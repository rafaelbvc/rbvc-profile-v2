interface IDefaultBtn {
  textBtn?: string;
  onClick?: () => void;
  styleBtn?: string;
  typeBtn?: "button" | "submit" | "reset" | undefined;
}

const DefaultBtn = (props: IDefaultBtn) => {
  const { textBtn, onClick, styleBtn, typeBtn } = props;

  return (
    <button type={typeBtn} className={`mx-3 ${styleBtn}`} onClick={onClick}>
      <span className="vBtnStyle">{textBtn}</span>
    </button>
  );
};

export default DefaultBtn;
