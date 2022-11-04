import React from "react";
import "./services.scss";
import Divider from "../../components/divider/Divider";
import { dataServices } from "../../local data/dataServices";
import CardServices from "../../components/cardServices/CardServices";
const Services = () => {
  return (
    <div className="services container" id="services">
      <div className="services__content">
        <Divider text={"Our Services"} />
        <h1>
          Save Time Managing Social <br /> Media For Your Business
        </h1>
      </div>
      <div className="services__card">
        {dataServices.map((item) => {
          return <CardServices key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Services;
