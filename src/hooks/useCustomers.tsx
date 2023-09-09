import { notification } from "antd";
import { useEffect, useState } from "react";
import { Customer } from "../types/customer";
import { customersService } from "../services/customersService";

export const useCustomers = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [customersLoading, setCustomersLoading] = useState<boolean>(false);
  const [shouldUpdateCustomers, setShouldUpdateCustomers] =
    useState<boolean>(true);

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

  const updateCustomersList = () => setShouldUpdateCustomers(true);

  useEffect(() => {
    if (shouldUpdateCustomers) {
      fetchCustomers();
      setShouldUpdateCustomers(false);
    }
  }, [shouldUpdateCustomers]);

  return {
    customersList,
    customersLoading,
    updateCustomersList,
  };
};
