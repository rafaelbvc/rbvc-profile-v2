import DefaultBtn from "../buttons/DefaultBtn";

type TGetStartedMenu = {
  className?: string;
};

const GetStartedMenu = (props: TGetStartedMenu) => {
  const { className } = props;
  return (
    <section className={`fixed   max-w-[22rem] py-1 ${className}`}>
      <header className="flex flex-row justify-between px-3">
        <h3 className="smallTitles">GET STARTED</h3>
        <button className="smallTitles">CLOSE</button>
      </header>
      <menu className="flex justify-between">
        <DefaultBtn text="Sign In" onClick={() => null} />
        <DefaultBtn text="Sign Up" onClick={() => null} />
        <DefaultBtn text="Profile" onClick={() => null} />
        <DefaultBtn text="Post" onClick={() => null} />
      </menu>
    </section>
  );
};

export default GetStartedMenu;
