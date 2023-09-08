import { useQuery } from "react-query";
import CircleLoader from "../components/loadingSpinners/CircleLoader";
import { IUserData } from "../interfaces/userData";
import ProfileScreen from "../components/getStartedMenuScreens/ProfileScreen";

const useUserQuery = () => {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery<IUserData[]>({
    queryKey: ["Users"],
    queryFn: () =>
      fetch("http://localhost:5090/users").then((res) => res.json()),
    // staleTime: 1000 * 60 * 60, // 1 minute
    // refetchOnWindowFocus: false,
  });

  let queryReturn: JSX.Element = <CircleLoader isLoading={isLoading} />;

  if (isLoading) {
    queryReturn = <CircleLoader isLoading={isLoading} />;
  }

  if (error) {
    queryReturn = <p>{`Sory the ${error} occurred...`}</p>;
  }

  if (userData) {
    const usersArr = userData.map((itens) => (
      <ProfileScreen
        firstName={itens.firstName}
        phone={itens.phone}
        lastName={itens.lastName}
        email={itens.email}
        password={itens.password}
      />
    ));

    queryReturn = usersArr[0];
  }

  return { queryReturn };
};

export default useUserQuery;
