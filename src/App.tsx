import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import VisibilityProvider from "./components/contexts/IsVisibleContext";
import { MotionDesign } from "./components/animatedBG/MotionDesign";


function App() {
  return (
    <VisibilityProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MotionDesign />} />
          {/* <Route path="SignedInLayout" element={<SignedInLayout />} /> */}
        </Route>
      </Routes>
    </VisibilityProvider>
  );
}

export default App;
