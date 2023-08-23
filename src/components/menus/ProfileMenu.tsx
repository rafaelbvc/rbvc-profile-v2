import DefaultBtn from "../buttons/DefaultBtn";

const ProfileMenu = () => {
  return (
    <section className="md:mt-[1.6rem]">
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
