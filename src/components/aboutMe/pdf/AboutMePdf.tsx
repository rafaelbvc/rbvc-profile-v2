import { useRef } from "react";
import ReactToPrint from "react-to-print";
import AboutMeScreen from "../AboutMeScreen";

const AboutMePdf = () => {

  const aboutMePdfRef = useRef(null);

  const marginTop = "20mm";
  const marginRight = "20mm";
  const marginBottom = "20mm";
  const marginLeft = "20mm";

  const getPageMargins = () => {
    return `@page { 
    removeAfterPrint: true; 
    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; 
    size: 210mm 297mm;
    display: true;
    }`;
  };

  return (
    <article>
      <ReactToPrint
        trigger={() => (
          <menu className="flex justify-center min-w-[21rem] max-w-[45rem]">
            <button className=" text-golden animate-ping font-poppins text-semibold text-xxs">
              PRINT
            </button>
          </menu>
        )}
        content={() => aboutMePdfRef.current}
      />

      <style>
        {getPageMargins()}
        <AboutMeScreen ref={aboutMePdfRef} />
      </style>
    </article>
  );
};

export default AboutMePdf;
