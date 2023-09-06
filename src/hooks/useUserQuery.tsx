import { useQuery } from "react-query";
import CircleLoader from "../components/loadingSpinners/CircleLoader";

const useUserQuery = () => {
  const {
    isLoading,
    error,
    data: userData,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: () =>
      fetch("http://localhost:5090/users").then((res) => res.json()),
  });

  let queryReturn: JSX.Element = <CircleLoader isLoading={isLoading} />;

  if (isLoading) {
    queryReturn = <CircleLoader isLoading={isLoading} />;
  }

  if (error) {
    queryReturn = <p>{`Sory the ${error} occurred...`}</p>;
  }

  if (userData) {
    queryReturn = userData;
  }

  return { queryReturn };
};

export default useUserQuery;
