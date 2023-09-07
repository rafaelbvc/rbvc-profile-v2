import { TScreensPropsTypes } from "../../types/screensPropsType";
import { twMerge } from "tailwind-merge";
import useUserQuery from "../../hooks/useUserQuery";

const ShowProfileScreen = ({ className }: TScreensPropsTypes) => {
  const { queryReturn } = useUserQuery();

  return <section className={twMerge("", className)}>{queryReturn}</section>;
};

export default ShowProfileScreen;
