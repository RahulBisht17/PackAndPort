import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Layout from "./Components/Layout";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
