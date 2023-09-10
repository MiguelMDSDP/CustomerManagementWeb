export interface IntegrationResponse<T> {
  success: boolean;
  errorMessage?: string;
  data?: T;
}