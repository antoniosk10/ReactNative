export interface DataAPI {
  data: Array<DataFetchUser | DataFetchColor>;
  page: number;
  per_page: number;
  support: {text: string; url: string};
  total: number;
  total_pages: number;
}

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

export interface LoginAPIInterface {
  Login: string;
  Password: string;
  PasswordConfirm?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}
