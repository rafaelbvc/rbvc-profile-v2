import TransPay from "./TransPay";

const TransPayScreen = () => {


  return (
    <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap">
      <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
        <h4 className="mb-2 text-right text-bold bounceTitles">
          Trans Pay
        </h4>
        <TransPay className="mb-[2rem] lg:mb-0 animate-pingIMG" />
      </section>
      <section className="flex flex-col p-2 items-left margins animate-pingText">
        <p className="text-bold">
          Important: This project was a sample for a freelance!
        </p>
        <br /><br /><br />
        <p>Project design provided by customer
          <br /><br />
          •	React<br />
          •	TypeScript<br />
          •	Tailwindcss<br /><br />
          • Responsive Layout<br />
        </p>
      </section>
    </section>
  );
};

export default TransPayScreen;
