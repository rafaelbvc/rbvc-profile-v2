import { twMerge } from "tailwind-merge";
import MenuHeader from "../MenuHeader";
import AdressLogo from "../svg/AdressLogo";
import DiscordLogo from "../svg/DiscordLogo";
import EmailLogo from "../svg/EmailLogo";
import LinkedInLogo from "../svg/LinkedInLogo";
import WhatsAppLogo from "../svg/WhatsAppLogo";
import YoutubeLogo from "../svg/YoutubeLogo";
import { TScreensPropsTypes } from "../../types/screensPropsType";

const ContactScreen = ({ className }: TScreensPropsTypes) => {

  return (
    <article id="ContactScreen" className={twMerge("mt-[0.7rem] ", className)}>
      <MenuHeader
        titleHeader="CONTACT"
        buttonText="TO TOP"
        hrefUp="#AboutMe"
        hrefDown="#HireScreen"

      />
      <section className="flex justify-center paddingYScreens">
        <section className="flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6  py-3 sm:flex-wrap margins sm:flex-row  max-w-[48rem]">
          <a
            className="contactScreen"
            href="https://www.youtube.com/@rafaelvendramini2598"
            target="_blank"
          >

            <YoutubeLogo className="svgContactScreen" />

            <p className="w-[11.25rem] text-center">
              @rafaelvendramini2598
            </p>
            <p className=" text-golden w-[4.1rem] text-center">
              Youtube
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://discord.com/channels/1137311403305349130/1137311404207112295 "
            target="_blank"
          >
            <DiscordLogo className="svgContactScreen" />
            <p className=" w-[11.25rem] text-center">
              rafaelvendramini
            </p>
            <p className="text-golden w-[4.1rem] text-center">
              Discord
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://api.whatsapp.com/send?phone=15998254287"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppLogo className="svgContactScreen" />
            <p className="  w-[11.25rem] text-center">
              (+55) 15 9982542-87
            </p>
            <p className=" text-golden w-[4.1rem] text-center">
              Mobile
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://www.linkedin.com/in/rafael-vendramini/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogo className="svgContactScreen" />

            <p className="  w-[11.25rem] text-center">
              /rafael-vendramini/
            </p>
            <p className=" text-golden w-[4.1rem] text-center">
              Linked In
            </p>
          </a>

          <a
            className="contactScreen"
            href="mailto:rafaelbvc@hotmail.com"
          >
            <EmailLogo className="svgContactScreen" />
            <p className=" w-[11.25rem] text-center">
              rafaelbvc@hotmail.com
            </p>
            <p className=" text-golden w-[4.1rem] text-center">
              E-mail
            </p>
          </a>

          <div className="contactScreen">
            <AdressLogo className="svgContactScreen" />
            <p className=" w-[11.25rem] text-center">São Paulo</p>
            <p className=" text-golden w-[4.1rem] text-center">
              &nbsp; Brazil
            </p>
          </div>
        </section>
      </section>
    </article>
  );
};

export default ContactScreen;
