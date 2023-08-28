import { createContext, useState, useContext, ReactNode } from "react";

interface IVisibleContext {
  isVisibleProfile: string;
  isVisibleGetStarted: string;
  setProfileVisibilityState: (isVisibleProfile: string) => void;
  setGetStartedVisibilityState: (isVisibleGetStated: string) => void;
}

interface IVisibilityProvider {
  children: ReactNode;
}

export const VisibilityContext = createContext({} as IVisibleContext);

export const VisibilityProvider = ({children}: IVisibilityProvider) => {
  const [isVisibleProfile, setIsVisibleProfile] = useState<string>(" hidden");
  const [isVisibleGetStarted, setIsVisibleGetStarted] =
    useState<string>(" hidden");

  function setProfileVisibilityState(isVisibleProfile: string) {
    setIsVisibleProfile(isVisibleProfile);
  }

  function setGetStartedVisibilityState(isVisibleGetStarted: string) {
    setIsVisibleGetStarted(isVisibleGetStarted);
  }

  return (
    <VisibilityContext.Provider
      value={{
        isVisibleProfile,
        isVisibleGetStarted,
        setGetStartedVisibilityState,
        setProfileVisibilityState,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityProvider;

export const UseIsVisibleContext = () => {
  const visibility = useContext(VisibilityContext);
  return visibility;
};
