export type ArtworkDTO = {
    artworkId: string,
    artworkName: string,
    price: number,
    discount: number,
    status: string,
    creator: {
      name: string,
      phoneNumber: string,
      address: string,
      status: string,
      id: string,
      userName: string,
      email: string,
    },
    categoryID: string,
    imageUrl: string,
    image: any,
    category: any
}