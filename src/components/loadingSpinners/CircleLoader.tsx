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
};

const CircleLoader = (props: TCircleLoader) => {
  const { isLoading } = props;

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
      <MenuHeader className="" />
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        ara-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-center mt-2">Loading...</p>
      <FooterBar />
    </div>
  );
};

export default CircleLoader;
