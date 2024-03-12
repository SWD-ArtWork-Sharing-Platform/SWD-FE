function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS = '/';
const ROOTS_ADMIN = '/admin';

export const PATH_AUTH = {
  signin: path(ROOTS, '/signin'),
  signup: path(ROOTS, '/signup'),
};

export const PATH_SHOP = {
  root: "/",
  general: {
    discover: "/discover"
  }
};

export const PATH_ADMIN = {
  root: ROOTS_ADMIN,
};