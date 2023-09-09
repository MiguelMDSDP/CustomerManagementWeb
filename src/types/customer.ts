export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
};

export type MinimalCustomerRequest = Omit<Customer, "id">;
