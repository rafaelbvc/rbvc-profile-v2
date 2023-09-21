import { Api } from "../api/baseURL";
// import { IUserData } from "../interfaces/userData";

const getUsers = () => {
  Api.get("/users");
};

export const userData = {
  getUsers,
};
