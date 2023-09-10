import axiosInstance from "./config";
import { IntegrationResponse } from "../utils/types/service";
import { Customer, MinimalCustomerRequest } from "../utils/types/customer";

export const customersService = {
  list: async (): Promise<IntegrationResponse<Customer[]>> => {
    try {
      const response = await axiosInstance.get("/customers");
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },

  create: async (
    data: MinimalCustomerRequest
  ): Promise<IntegrationResponse<Customer>> => {
    try {
      const response = await axiosInstance.post<Customer>("/customers", data);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },

  update: async (
    id: number,
    data: MinimalCustomerRequest
  ): Promise<IntegrationResponse<Customer>> => {
    try {
      const response = await axiosInstance.put<Customer>(
        `/customers/${id}`,
        data
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },

  delete: async (id: number): Promise<IntegrationResponse<undefined>> => {
    try {
      await axiosInstance.delete(`/customers/${id}`);
      return {
        success: true,
      };
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      };
    }
  },
};
