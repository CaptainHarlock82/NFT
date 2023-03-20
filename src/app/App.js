import { Routes, Route } from "react-router-dom";
import HomeV5 from "../pages/homeV5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV5 />} exact />
    </Routes>
  );
}

export default App;
