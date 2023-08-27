# Portfolio Showcase Project

Welcome to my portfolio showcase project! This project is a representation of my professional portfolio.

## Introduction

The entire application is designed to be responsive, with breakpoints carefully considered to ensure optimal display across various devices. I've followed the mobile-first principle in designing the architecture.

## Framework Libraries and Tools

- ReactJs
- TypeScript
- Json Web Token
- React Query
- ReactForm
- Regex
- TailwindCSS
- MongoDB
- Router

## User History

- As a user I must be able to access the app on all my devices
- As an unregistered user I must have access to the profile and getstarted menu
- As an unregistered user I should be able to see the Contact, Portfolio, About, Home and SignUp screens
- As a user I must be able to create an account with my credentials
- As a registered user, I must be able to authenticate and log out
- As a registered user I must be able to edit, view and delete the account with my credentials
- As a registered user I must be able to create, edit, view and delete comments
- As an administrator I must have full access including retrieving the list of all users and messages coming from the backend

## Todo List

- Create and configure initial project structure [Done]
- Create global color pattern [Done]
- Create global fonts pattern [Done]
- Create global properties for the scope [Done]
- Create NavBar [Done]
- !IMPORTANT - Fix NavBar components to fit with more content xl break point and upper
  1.  Refactor RBVCLogoBtn:
    - Add resize options 
  2.  Refactor GetStartedBtn:
    - Add resize options
  3. Add more content lg break point and upper
    - ???? 
- Create Profile menu [Done]
  1. Create static profile menu [Done]
  2. Create mobile first responsive to 2xl [Done]
  3. Create functional scripts
  - Create custom hook useIsVisible
  - useIsVisible need to control:
    1.  GetStartedMenu
    2.  GetStartedBtn
    3.  ProfileMenu
    4.  ProfileBtn
    5.  HireScreen
    6.  PortifolioScreen
    7.  ContacteScreen
    8.  AboutMeScreen
    9.  SignInScreen
    10. SignUpScreen
    11. ProdileScreen (from GetStartedMenu)
    12. PostScreen
    13. Home
  - Test funcionalites with useIsVisible custom hook, all break points
- Create GetStarted menu [Done]
- Create Home and AboutMe screen submenu of Profile
- Create Portifolio screen submenu of Profile
- Create Contact screen submenu of Profile
- Create signUp submenu of GetStarted
- Create logic for access token request
- Create logic to release features according to access level
- Create logic for authentication persistence
- Create logic for authentication acess level
- Create Profile submenu of GetStarted
- Create EditUser submenu of GetStarted
- Create the endpoint to delete the user
- Create SignIn submenu of GetStarted
- Create context for dynamic SignIn/SignOut
- Create Messages submenu of GetStarted
- Create Messages post endpoint
- Create Messages edit endpoint
- Create Messages delete endpoint
- Modulate the layout in a responsive way with the mobile first principle
- Modulate the navbar responsively with the mobile first principle
- Modulate all tabs and components responsively with the mobile first principle
- Test user experience and interface layout at all breakpoints
- Test end points
- Test error handling

## API Routes

- `/users`: GET (Private)/ POST (Public)/ PUT (Private)/ DELETE (Private)
- `/messages`: GET (Private)/ POST (Private)/ PUT (Private)/ DELETE (Private)
- `/auth`: POST (Public)
- `/auth/refresh`: GET (Private)
- `/auth/logout`: POST (Private)

## Get in Touch

I hope you enjoy exploring my portfolio showcase! Feel free to leave me a message in the GetStarted menu.

Thank you!
