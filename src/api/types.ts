export interface DataFetchUser {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface DataFetchColor {
  id: number;
  color: string;
  name: string;
  pantone_value: string;
  year: string;
}

export interface CredentialInterface {
  email?: string;
  Login?: string;
  password?: string;
  Password?: string;
}
