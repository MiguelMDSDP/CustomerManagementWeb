import { Customer, MinimalCustomerRequest } from "../types/customer";
import { IntegrationResponse } from "../types/service";
import axiosInstance from "./config";

export const customersService = {
  list: async (): Promise<IntegrationResponse<Customer[]>> => {
    try {
      const response = await axiosInstance.get("/customers");
      console.log(response);
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
      console.log(response);
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
      const response = await axiosInstance.put<Customer>(`/customers/${id}`, data);
      console.log(response);
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
      const response = await axiosInstance.delete(`/customers/${id}`);
      console.log(response);
      return {
        success: true,
      }
    } catch (error: any) {
      return {
        success: false,
        errorMessage: error.response?.data,
      }
    }
  }
};
