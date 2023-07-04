import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import { Destinations } from "./components/destinations/Destinations";
import Search from "./components/search/Search";
import BeachesInfo from "./components/beaches/BeachesInfo";
import Imgcarguy from "./components/carguy/Imgcarguy";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Destinations />
      <Search />
      <BeachesInfo />
      <Imgcarguy />
      <Footer />
    </div>
  );
}

export default App;
