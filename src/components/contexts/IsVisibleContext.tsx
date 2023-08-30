import { createContext, useState, useContext, ReactNode } from "react";

interface IVisibleContext {
  isVisibleProfile: string;
  isVisibleGetStarted: string;
  isVisibleAboutMe: string;
  setProfileVisibilityState: (isVisibleProfile: string) => void;
  setGetStartedVisibilityState: (isVisibleGetStated: string) => void;
  setAboutMeVisibilityState: (isVisibleAboutMe: string) => void;
}

interface IVisibilityProvider {
  children: ReactNode;
}

export const VisibilityContext = createContext({} as IVisibleContext);

export const VisibilityProvider = ({ children }: IVisibilityProvider) => {
  const [isVisibleProfile, setIsVisibleProfile] = useState<string>(" hidden");
  const [isVisibleGetStarted, setIsVisibleGetStarted] =
    useState<string>(" hidden");
  const [isVisibleAboutMe, setIsVisibleAboutMe] = useState<string>(" ");

  const setProfileVisibilityState = (isVisibleProfile: string) => {
    setIsVisibleProfile(isVisibleProfile);
  };

  const setGetStartedVisibilityState = (isVisibleGetStarted: string) => {
    setIsVisibleGetStarted(isVisibleGetStarted);
  };

  const setAboutMeVisibilityState = (isVisibleAboutMe: string) => {
    setIsVisibleAboutMe(isVisibleAboutMe);
  };

  return (
    <VisibilityContext.Provider
      value={{
        isVisibleProfile,
        isVisibleGetStarted,
        isVisibleAboutMe,
        setGetStartedVisibilityState,
        setProfileVisibilityState,
        setAboutMeVisibilityState,
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
