import RbvcLogo from "../svg/RbvcLogo";

type TRBVCLogoBtn = {
  onClick?: () => void;
};

const RBVCLogoBtn = ({ onClick }: TRBVCLogoBtn) => {
  return (
    <button id="RBVCLogoBtn" className="flex" onClick={onClick}>
      <RbvcLogo />
      <div className="self-center cursor-pointer">
        <p className="text-start font-semibold mb-[-0.65rem] tracking-widest">
          RAFAEL VENDRAMINI
        </p>
        <p className="text-golden tracking-tight">RBVC Soluções Tecnológicas</p>
      </div>
    </button>
  );
};

export default RBVCLogoBtn;
