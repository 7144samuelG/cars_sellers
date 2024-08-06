import { useState } from "react";
//import { car_shop_backend } from 'declarations/car_shop_backend';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import HomePage from "./pagescomponents/HomePage";
import SellYourCar from "./pagescomponents/SellYourCar";
import { Footer } from "./components/footer";
import HelpLine from "./pagescomponents/HelpLine";
import VehicleDetails from "./pagescomponents/VehicleDetails";
import { AuthProvider } from "./components/authclient";

function App() {
  const [greeting, setGreeting] = useState("");

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   car_shop_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/sell_your_car" element={<SellYourCar />}></Route>
          <Route path="/helpline" element={<HelpLine />}></Route>
          <Route path="/vehicle/details" element={<VehicleDetails />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
