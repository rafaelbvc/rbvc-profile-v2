export interface IUserData extends Element {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
  roles: Array<[]>;
}
