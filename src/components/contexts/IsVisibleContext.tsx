import { createContext, useState, useContext, ReactNode } from "react";

interface IVisibleContext {
  isVisibleProfile: string;
  isVisibleGetStarted: string;
  isVisibleAboutMe: string;
  isVisiblePortifolio: string;
  isVisibleContact: string;
  isVisibleHireMe: string;
  isVisibleSignIn: string;
  isVisibleGetProfile: string;
  setProfileVisibilityState: (isVisibleProfile: string) => void;
  setGetStartedVisibilityState: (isVisibleGetStated: string) => void;
  setAboutMeVisibilityState: (isVisibleAboutMe: string) => void;
  setPortifolioVisibilityState: (isVisiblePortifolio: string) => void;
  setContactVisibilityState: (isVisibleContact: string) => void;
  setHireMeVisibilityState: (isVisibleHireMe: string) => void;
  setSignInVisibilityState: (isVisibleSignIn: string) => void;
  setGetProfileVisibilityState: (isVisibleGetProfile: string) => void;
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
  const [isVisiblePortifolio, setIsVisiblePortifolio] =
    useState<string>(" hidden");
  const [isVisibleContact, setIsVisibleContact] = useState<string>(" hidden");
  const [isVisibleHireMe, setIsVisibleHireMe] = useState<string>(" hidden");
  const [isVisibleSignIn, setIsVisiblieSignIn] = useState<string>(" hidden");
  const [isVisibleGetProfile, setIsVisibleGetProfile] = useState<string>(" ");

  const setProfileVisibilityState = (isVisibleProfile: string) => {
    setIsVisibleProfile(isVisibleProfile);
  };

  const setGetStartedVisibilityState = (isVisibleGetStarted: string) => {
    setIsVisibleGetStarted(isVisibleGetStarted);
  };

  const setAboutMeVisibilityState = (isVisibleAboutMe: string) => {
    setIsVisibleAboutMe(isVisibleAboutMe);
  };

  const setPortifolioVisibilityState = (isVisiblePortifolio: string) => {
    setIsVisiblePortifolio(isVisiblePortifolio);
  };

  const setContactVisibilityState = (isVisibleContact: string) => {
    setIsVisibleContact(isVisibleContact);
  };

  const setHireMeVisibilityState = (isVisibleHireMe: string) => {
    setIsVisibleHireMe(isVisibleHireMe);
  };

  const setSignInVisibilityState = (isVisibleSignIn: string) => {
    setIsVisiblieSignIn(isVisibleSignIn);
  };

  const setGetProfileVisibilityState = (isVisibleGetProfile: string) => {
    setIsVisibleGetProfile(isVisibleGetProfile);
  };

  return (
    <VisibilityContext.Provider
      value={{
        isVisibleProfile,
        isVisibleGetStarted,
        isVisibleAboutMe,
        isVisiblePortifolio,
        isVisibleContact,
        isVisibleHireMe,
        isVisibleSignIn,
        isVisibleGetProfile,
        setGetStartedVisibilityState,
        setProfileVisibilityState,
        setAboutMeVisibilityState,
        setPortifolioVisibilityState,
        setContactVisibilityState,
        setHireMeVisibilityState,
        setSignInVisibilityState,
        setGetProfileVisibilityState,
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
