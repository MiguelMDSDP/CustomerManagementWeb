import { notification } from "antd";
import { useEffect, useState } from "react";
import { Customer, MinimalCustomerRequest } from "../../utils/types/customer";
import { customersService } from "../../services/customersService";

export const useCustomers = () => {
  const [customersList, setCustomersList] = useState<Customer[]>([]);
  const [customersLoading, setCustomersLoading] = useState<boolean>(false);

  const [filteredCustomersList, setFilteredCustomersList] =
    useState<Customer[]>(customersList);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (searchString: string) =>
    setSearchQuery(searchString.toUpperCase());
  const resetSearch = () => setSearchQuery("");

  useEffect(() => {
    let newList = customersList;
    if (searchQuery) {
      newList = newList.filter(
        (customer) =>
          customer.email.toUpperCase().includes(searchQuery) ||
          customer.firstName.toUpperCase().includes(searchQuery) ||
          customer.lastName.toUpperCase().includes(searchQuery)
      );
    }
    setFilteredCustomersList(newList);
  }, [searchQuery, customersList]);

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
    filteredCustomersList,
    fetchCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    handleSearch,
    resetSearch,
  };
};
