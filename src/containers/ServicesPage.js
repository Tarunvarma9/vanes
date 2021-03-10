import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Services from "../components/Services";

class ServicesPage extends Component {
  render() {
    return (
      <div>
        <h1>ServicesPage</h1>
        <Header/>
        <Services/>
        <Footer/>
      </div>
    );
  }
}
export default ServicesPage;
