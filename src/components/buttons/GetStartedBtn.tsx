import { ComponentProps } from "react";

type TRBVCLogoBtn = ComponentProps<"button">;

const GetStartedBtn = ({ ...props }: TRBVCLogoBtn) => {
  return (
    <button className="flex mt-2" {...props}>
      <p className="text-2xl font-semibold">Get</p>
      <p className="text-2xl font-semibold text-golden ml-1">Started</p>
    </button>
  );
};

export default GetStartedBtn;
