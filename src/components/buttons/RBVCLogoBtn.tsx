import { ComponentProps } from "react";
import RbvcLogo from "../svg/RbvcLogo";

type TRBVCLogoBtn = ComponentProps<"button">;

const RBVCLogoBtn = ({ ...props }: TRBVCLogoBtn) => {
  return (
    <button className="flex" {...props}>
      <RbvcLogo />
      <div className="xl:flex xl:flex-wrap self-center cursor-pointer">
        <p className=" text-start font-semibold mb-[-0.32rem] tracking-wider">
          RAFAEL VENDRAMINI <span className="text-golden">|&nbsp;</span>
        </p>
        <p className="text-golden tracking-tight">RBVC Soluções Tecnológicas</p>
      </div>
    </button>
  );
};

export default RBVCLogoBtn;
