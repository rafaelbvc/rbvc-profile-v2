import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import VisibilityProvider from "./components/contexts/IsVisibleContext";
import Public from "./layouts/Public";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VisibilityProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Public />} />
            {/* <Route path="SignedInLayout" element={<SignedInLayout />} /> */}
          </Route>
        </Routes>
      </VisibilityProvider>
    </QueryClientProvider>
  );
}

export default App;
