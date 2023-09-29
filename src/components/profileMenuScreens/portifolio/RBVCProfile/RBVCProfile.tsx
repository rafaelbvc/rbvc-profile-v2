import { twMerge } from "tailwind-merge";
import rbvcProfile from "./RBVCProfile.jpg";
import { TScreensPropsTypes } from "../../../../types/screensPropsType";

const RBVCProfile = ({ className }: TScreensPropsTypes) => {
  return (
    <a href="https://rbvcprofile.netlify.app/" target="_blank" className={twMerge(" ", className)}>
      <img src={rbvcProfile} alt="Rafael Vendramini - Profile" />
    </a>
  );
};

export default RBVCProfile;
