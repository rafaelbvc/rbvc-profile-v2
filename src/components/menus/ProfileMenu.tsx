import DefaultBtn from "../buttons/DefaultBtn";

type TProfileMenu = {
  className?: string;
  isVisibleHeader?: string;
};

const ProfileMenu = (props: TProfileMenu) => {
  const { className, isVisibleHeader } = props;

  return (
    <section className={className}>
      <header
        className={`flex flex-row justify-between px-3 ${isVisibleHeader}`}
      >
        <h3 className="smallTitles">PROFILE</h3>
        <button className="smallTitles">CLOSE</button>
      </header>

      <menu className="flex justify-between">
        <DefaultBtn text="Home" />
        <DefaultBtn text="About" onClick={() => null} />
        <DefaultBtn text="Portifolio" onClick={() => null} />
        <DefaultBtn text="Contact" onClick={() => null} />
        <DefaultBtn text="Hire" onClick={() => null} />
      </menu>
    </section>
  );
};

export default ProfileMenu;
