import { notification } from "antd";
import { useEffect, useState } from "react";
import { Customer, MinimalCustomerRequest } from "../../utils/types/customer";
import { customersService } from "../../services/customersService";

export const useCustomers = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [customersLoading, setCustomersLoading] = useState<boolean>(false);

  const fetchCustomers = async () => {
    setCustomersLoading(true);
    const response = await customersService.list();
    if (!response.success) {
      notification.error({
        message: "Error fetching customers",
        description: response.errorMessage,
      });
    } else if (response.data) setCustomersList(response.data);
    setCustomersLoading(false);
  };

  const createCustomer = async (customer: MinimalCustomerRequest) => {
    setCustomersLoading(true);
    const response = await customersService.create(customer);
    if (!response.success) {
      notification.error({
        message: "Error creating customer",
        description: response.errorMessage,
      });
    } else fetchCustomers();
    setCustomersLoading(false);
  };

  const updateCustomer = async (
    id: number,
    customer: MinimalCustomerRequest
  ) => {
    setCustomersLoading(true);
    const response = await customersService.update(id, customer);
    if (!response.success) {
      notification.error({
        message: "Error updating customer",
        description: response.errorMessage,
      });
    } else fetchCustomers();
    setCustomersLoading(false);
  };

  const deleteCustomer = async (id: number) => {
    setCustomersLoading(true);
    const response = await customersService.delete(id);
    if (!response.success) {
      notification.error({
        message: "Error deleting customer",
        description: response.errorMessage,
      });
    } else fetchCustomers();
    setCustomersLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return {
    customersList,
    customersLoading,
    fetchCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  };
};
