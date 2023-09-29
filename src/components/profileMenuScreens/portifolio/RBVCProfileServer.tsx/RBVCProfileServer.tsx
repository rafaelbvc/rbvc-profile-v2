import { twMerge } from "tailwind-merge";
import rbvcProfileServer from "./RBVCProfileServer.jpg";
import { TScreensPropsTypes } from "../../../../types/screensPropsType";

const RBVCProfileServer = ({ className }: TScreensPropsTypes) => {
  return (
    <a href="https://rbvc-profile-v2-server.onrender.com/" target="_blank" className={twMerge(" ", className)}>
      <img src={rbvcProfileServer} alt="Rafael Vendramini - Profile" />
    </a>
  );
};

export default RBVCProfileServer;
