import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import VisibilityProvider from "./components/contexts/IsVisibleContext";
import Public from "./layouts/Public";

function App() {
  return (
    <VisibilityProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          {/* <Route path="SignedInLayout" element={<SignedInLayout />} /> */}
        </Route>
      </Routes>
    </VisibilityProvider>
  );
}

export default App;
