import PortifolioPhotoContainer from "../PortifolioPhotoContainer";
import rbvcProfileServer from "./RBVCProfileServer.jpg";

const RBVCProfileServerScreen = () => {


  return (
    <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
      <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
        <h4 className="mb-2 text-right text-bold bounceTitles">
          Rafael Vendramini - Profile
        </h4>
        <PortifolioPhotoContainer className="mb-[2rem] lg:mb-0 animate-pingIMG " href="https://rbvc-profile-v2-server.onrender.com/" src={rbvcProfileServer} alt="Rafael Vendramini - Profile" />
      </section>
      <section className="flex flex-col p-2 items-left margins animate-pingText">
        <p className="text-center whitespace-normal text-bold">
          Server Side - Host (Render) uses Cold Start (first access may take a few seconds to start)
        </p>
        <br /><br /><br />
        <p>Project developed from scratch
          <br /><br />
          •	JavaScript<br />
          •	Node<br />
          •	TypeScript<br />
          •	Mongo(Atlas for Prod) local for Dev<br />
          •	Express<br /><br />
          •	Private and Public Routes<br />
          •	Error handling<br />
          •	Authentication<br />
          •	Access level<br />
          •	Middleware, Hashers and Json Web Tokens<br />
          •	ErrorLog<br /><br />
        </p>
      </section>
    </section>
  );
};

export default RBVCProfileServerScreen;
