import RbvcLogo from "../svg/RbvcLogo";

interface IRBVCLogoBtn {
  onClick?: () => void;
}

const RBVCLogoBtn = ({ onClick }: IRBVCLogoBtn) => {
  return (
    <button id="RBVCLogoBtn" className="flex" onClick={onClick}>
      <RbvcLogo />
      <div className="self-center cursor-pointer">
        <p className="text-start font-semibold mb-[-0.65rem] tracking-widest">
          RAFAEL VENDRAMINI
        </p>
        <p className="text-dGolden tracking-tight">
          RBVC Soluções Tecnológicas
        </p>
      </div>
    </button>
  );
};

export default RBVCLogoBtn;
