import HomePage from "./routes/homepage/homepage.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Shop from "./components/shop/shop.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
