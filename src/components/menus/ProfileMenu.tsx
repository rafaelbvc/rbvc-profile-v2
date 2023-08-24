import DefaultBtn from "../buttons/DefaultBtn";

type TProfileMenu = {
  className?: string;
};

const ProfileMenu = (props: TProfileMenu) => {
  const { className } = props;

  return (
    <section className={`md:mt-[1.6rem] ${className}`}>
      <h3 className="hidden">Profile Menu</h3>
      <menu className="flex justify-between">
        <DefaultBtn textBtn="Home" />
        <DefaultBtn textBtn="About" onClick={() => null} />
        <DefaultBtn textBtn="Portifolio" onClick={() => null} />
        <DefaultBtn textBtn="Contact" onClick={() => null} />
        <DefaultBtn textBtn="Hire" onClick={() => null} />
      </menu>
    </section>
  );
};

export default ProfileMenu;
