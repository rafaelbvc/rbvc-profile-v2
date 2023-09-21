import { useRef } from "react";
import ReactToPrint from "react-to-print";
import AboutMeScreen from "../AboutMeScreen";
import MenuHeader from "../../../MenuHeader";

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
          <menu className="mb-[-1.3rem]">
            <button className="text-golden animate-ping pl-[45%] text-semibold text-xxs">
              PRINT
            </button>
          </menu>
        )}
        content={() => aboutMePdfRef.current}
      />
      <MenuHeader
        className="flex mt-[-0.95rem] justify-between"
        titleHeader="ABOUT ME"
        buttonText="TO BOTTOM"
        hRef="#HireScreen"
      />
      <style>
        {getPageMargins()}
        <AboutMeScreen ref={aboutMePdfRef} />
      </style>
    </article>
  );
};

export default AboutMePdf;
