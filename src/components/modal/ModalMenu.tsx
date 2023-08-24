import DefaultBtn from "../buttons/DefaultBtn";

type TModalMenu = {
  title?: string;
};

const ModalMenu = (props: TModalMenu) => {
  const { title } = props;

  return (
    <dialog className="flex mt-[6rem]">
      <section className="border-2 shadow-sm rounded-md w-[21rem] h-[3rem]">
        <title className="">{title}</title>
        <DefaultBtn textBtn="close" styleBtn="text-xxs font-golden" />
      </section>
    </dialog>
  );
};

export default ModalMenu;
