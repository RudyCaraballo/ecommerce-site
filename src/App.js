import HomePage from "./routes/homepage/homepage.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import Shop from "./components/shop/shop.jsx";
import SignIn from "./routes/sign-in/sign-in-page.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  );
}

export default App;
