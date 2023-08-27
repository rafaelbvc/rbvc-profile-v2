import { twMerge } from "tailwind-merge";
import DefaultBtn from "../buttons/DefaultBtn";
import useIsVisible from "../hooks/useIsVisible";

const GetStartedMenu = () => {
  const { isVisibleGetStarted, handleGetStarted } = useIsVisible();

  console.log(isVisibleGetStarted);

  return (
    <section
      className={twMerge(
        "fixed   max-w-[22rem] py-1 right-4  menuOpenStyle ",
        isVisibleGetStarted
      )}
    >
      <header className="flex flex-row  justify-between px-3 ">
        <h3 className="smallTitles">GET STARTED</h3>
        <button className="smallTitles" onClick={() => handleGetStarted}>
          CLOSE
        </button>
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
