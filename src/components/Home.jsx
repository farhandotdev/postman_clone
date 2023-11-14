import React from "react";
import "../App.css";
import Header from "./Header";
import Form from "./Form";
import SelectTab from "./SelectTab";
import Response from "./Response";
import ErrorScreen from "./ErrorScreen";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Form/>
      <SelectTab/>
      {/* <Response/> */}
      <ErrorScreen/>
    </div>
  );
};

export default Home;
