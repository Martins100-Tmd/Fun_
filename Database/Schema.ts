type userDB = {
  name: string;
  password: string;
  email: string;
  Date: string;
  purchases: [
    {
      date: string;
      time: string;
      checkout: string;
      price: string;
      product: {
        name: string;
        id: string;
        quantity: number;
      };
      delivered: boolean;
    },
    {
      date: string;
      time: string;
      checkout: string;
      price: string;
      product: {
        name: string;
        id: string;
        quantity: number;
      };
      delivered: boolean;
    },
    {
      date: string;
      time: string;
      checkout: string;
      price: string;
      product: {
        name: string;
        id: string;
        quantity: number;
      };
      delivered: boolean;
    }
  ];
};
