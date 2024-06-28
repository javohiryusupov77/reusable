import React from "react";
import Card from "../componenet/cards";
import "./service.css"

const Services = () => {
  const services = [
    {
      title: "Project Plan",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Interior Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "Retail Design",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "2d/3d Art Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "2d/3d Art Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      title: "2d/3d Art Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  return (
    <div>
      <div className="content">
        <h2 className="h8">Services</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
