import { notification } from "antd";
import { CustomerSchema } from "../schemas/customer";
import { MinimalCustomerRequest } from "../types/customer";

export const validateCustomer = (customerData: MinimalCustomerRequest) => {
  try {
    CustomerSchema.parse(customerData);
    return null;
  } catch (error: any) {
    const errorMessage = error.issues[0].message;
    notification.error({
      message: "Validation Error",
      description: errorMessage,
    });
    return error;
  }
};
