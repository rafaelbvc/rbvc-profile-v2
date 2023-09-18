import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import VisibilityProvider from "./components/contexts/IsVisibleContext";
import Public from "./layouts/Public";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from "./components/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
