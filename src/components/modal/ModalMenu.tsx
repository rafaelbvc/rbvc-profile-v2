import DefaultBtn from "../buttons/DefaultBtn";

type TModalMenu = {
  title?: string;
};

const ModalMenu = (props: TModalMenu) => {
  const { title } = props;

  return (
    <dialog className="flex mt-[6rem]">
      {/* <h3 className="hidden">Modal Container</h3> */}
      <section className="border-2 shadow-sm rounded-md w-[21rem] h-[3rem]">
        <header>
          <title className="">{title}</title>
          <DefaultBtn text="close" className="text-xxs font-golden" />
        </header>
      </section>
    </dialog>
  );
};

export default ModalMenu;
