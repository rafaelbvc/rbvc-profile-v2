import { useEffect, useState } from "react";

const useIsVisible = () => {


  const [isVisibleProfile, setIsVisibleProfile] = useState<string>();
  const [isVisibleGetStarted, setIsVisibleGetStarted] = useState<string>();

  const handleProfile = () => {
    if (isVisibleProfile === " hidden") {
      setIsVisibleProfile(" ");
    } else {
      setIsVisibleProfile(" hidden");
    }
  };

  const handleGetStarted = () => {
    if (isVisibleGetStarted === " hidden") {
      setIsVisibleGetStarted(" ");
    } else {
      setIsVisibleGetStarted(" hidden");
    }
  };

  useEffect(() => {
    () => handleProfile

  }, []);

  useEffect(() => {
    () => handleGetStarted
  }, []);

  return {
    handleGetStarted,
    isVisibleProfile,
    isVisibleGetStarted,
    handleProfile,
  };
};

export default useIsVisible;
