import React from "react";
import Header from "./component/header/Header.tsx";
import Footer from "./component/Footer.tsx";
import Home from "./Home.tsx";


function App() {
  return (
    <div className="App" >
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;
