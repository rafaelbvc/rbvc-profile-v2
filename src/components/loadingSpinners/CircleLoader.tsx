import { useState, CSSProperties, useEffect, useCallback } from "react";
import ClipLoader from "react-spinners/CircleLoader";
import FooterBar from "../FooterBar";
import MenuHeader from "../MenuHeader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

type TCircleLoader = {
  isLoading: boolean;
  onClick?: () => void
};

const CircleLoader = (props: TCircleLoader) => {


  const { isLoading, onClick } = props;

  const [loading, setLoading] = useState<boolean>(isLoading);
  const [color] = useState("#00FF00");

  const handleLoading = useCallback(() => {
    if (!isLoading) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [isLoading]);

  useEffect(() => {
    handleLoading();
  }, [isLoading, handleLoading]);

  return (
    <div className="mt-4">
      <MenuHeader onClick={onClick} />
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        ara-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="mt-2 text-center">Loading...</p>
      <FooterBar />
    </div>
  );
};

export default CircleLoader;
