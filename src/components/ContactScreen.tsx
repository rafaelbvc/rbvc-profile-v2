import { twMerge } from "tailwind-merge";
import { handleVisibility } from "../utils/handleVisible";
import FooterBar from "./FooterBar";
import MenuHeader, { IMenuHeader } from "./MenuHeader";
import { UseIsVisibleContext } from "./contexts/IsVisibleContext";
import AdressLogo from "./svg/AdressLogo";
import DiscordLogo from "./svg/DiscordLogo";
import EmailLogo from "./svg/EmailLogo";
import LinkedInLogo from "./svg/LinkedInLogo";
import WhatsAppLogo from "./svg/WhatsAppLogo";
import YoutubeLogo from "./svg/YoutubeLogo";

const ContactScreen = ({ className }: IMenuHeader) => {
  const { setContactVisibilityState, isVisibleContact } = UseIsVisibleContext();

  return (
    <article className={twMerge("mt-[0.7rem] ", className)}>
      <MenuHeader
        className=""
        titleHeader="CONTACT"
        onClick={() =>
          setContactVisibilityState(handleVisibility(isVisibleContact))
        }
      />
      <FooterBar className="mt-[-0.51rem] mb-[0.5rem]" />
      <section className="flex flex-col bg-lightGray  justify-between  min-w-[21rem] max-w-[45rem] p-1 px-4 gap-2">
        <a
          className="flex items-center justify-between"
          href="https://www.youtube.com/@rafaelvendramini2598"
          target="_blank"
        >
          <YoutubeLogo width="1.5rem " className="w-[2rem] self-center" />

          <p className="font-poppins   w-[11.25rem] text-start">
            @rafaelvendramini2598
          </p>
          <p className="font-poppins  text-golden w-[4.1rem] text-right">
            Youtube
          </p>
        </a>

        <a
          className="flex items-center    justify-between"
          href="https://discord.com/channels/1137311403305349130/1137311404207112295 "
          target="_blank"
        >
          <DiscordLogo width="1.5rem " className="w-[2rem] self-center" />
          <p className="font-poppins  w-[11.25rem] text-start">
            rafaelvendramini
          </p>
          <p className="font-poppins text-golden w-[4.1rem] text-right">
            Discord
          </p>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=1599825428"
          target="_blank"
          rel="noreferrer"
          className="flex items-center  justify-between"
        >
          <WhatsAppLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins  w-[11.25rem] text-start">
            (+55) 15 99825-4287
          </p>
          <p className="font-poppins text-golden w-[4.1rem] text-right">
            Mobile
          </p>
        </a>

        <a
          className="flex items-center    justify-between"
          href="https://www.linkedin.com/in/rafael-vendramini/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInLogo width="1.5rem" className="self-center w-[2rem] " />

          <p className="font-poppins  w-[11.25rem] text-start">
            /rafael-vendramini/
          </p>
          <p className="font-poppins text-golden w-[4.1rem] text-right">
            Linked In
          </p>
        </a>

        <a
          href="mailto:rafaelbvc@hotmail.com"
          className="flex items-center    justify-between"
        >
          <EmailLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins w-[11.25rem] text-start">
            rafaelbvc@hotmail.com
          </p>
          <p className="font-poppins text-golden w-[4.1rem] text-right">
            E-mail
          </p>
        </a>

        <div className="flex items-center justify-between">
          <AdressLogo width="1.5rem" className="w-[2rem] self-center" />
          <p className="font-poppins w-[11.25rem] text-start">São Paulo</p>
          <p className="font-poppins text-golden w-[4.1rem] text-right">
            &nbsp; Brazil
          </p>
        </div>
      </section>
      <FooterBar className="mt-2 mb-1" />
    </article>
  );
};

export default ContactScreen;
