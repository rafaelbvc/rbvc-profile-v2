import { ComponentProps } from "react";

type TRBVCLogoBtn = ComponentProps<"button"> & {
  isVisible?: boolean;
};

const GetStartedBtn = ({ isVisible, ...props }: TRBVCLogoBtn) => {
  return (
    <button data-success={isVisible} className="flex mt-1 " {...props}>
      <p className="text-2xl font-semibold">Get</p>
      <p className="text-2xl font-semibold text-golden ml-1">Started</p>
    </button>
  );
};

export default GetStartedBtn;
