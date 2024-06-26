interface MassageShopItem {
    _id: string,
    name: string,
    password : string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface MassageShopJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: MassageShopItem[]
  }

  interface User {
    name: string,
    tel: string,
    email: string,
    role: string,
    password: string,
    createAt: Date
  }

  interface Booking {
    _id: string,
    bookingDate: Date,
    user: User,
    massageShop: MassageShopItem,
    createdAt: Date
  }
