import { ReactNode } from "react";
import { Container, Alert, AlertTitle, Button, Stack } from "@mui/material";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

type RoleBasedGuardProp = {
  accessibleRoles: String[];
  children: ReactNode | string;
};

const useCurrentRole = (): String[] => {
  const { user } = useAuth();
  const roles: string[] = [];
  roles.push(user?.role);
  return roles;
};

export default function RoleBasedGuard({
  accessibleRoles,
  children,
}: RoleBasedGuardProp) {
  const currentRole = useCurrentRole();
  const { logout } = useAuth();
  const router = useRouter();

  if (
    accessibleRoles?.length !== 0 &&
    !accessibleRoles.some((r) => currentRole.some((ur) => ur === r))
  ) {
    return (
      <Container sx={{ height: "100vh" }}>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
        <Stack direction="row" justifyContent="center">
          <Button onClick={() => router.push("/")}>Back to home</Button>
          <Button onClick={logout} variant="outlined" color="inherit">
            Logout
          </Button>
        </Stack>
      </Container>
    );
  }

  return <>{children}</>;
}
