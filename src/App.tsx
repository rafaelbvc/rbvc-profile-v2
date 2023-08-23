import { Route, Routes } from "react-router-dom"
import Public from "./layouts/Public"
import Layout from "./layouts/Layout"


function App() {


  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Public />} />
      {/* <Route path="SignedInLayout" element={<SignedInLayout />} /> */}
    </Route>
  </Routes>
  )
}

export default App
