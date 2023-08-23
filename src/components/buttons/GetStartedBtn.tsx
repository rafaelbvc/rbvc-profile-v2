interface IGetStatedBtn {
  onClick: () => void;
}

const GetStartedBtn = ({ onClick }: IGetStatedBtn) => {
  return (
    <button onClick={onClick} className="flex mt-1">
      <p className="text-2xl font-semibold">Get</p>
      <p className="text-2xl font-semibold text-dGolden ml-1">Started</p>
    </button>
  );
};

export default GetStartedBtn;
