import React from "react";

import "./Person.css";

export const Person = ({ image, name, age }) => {
  return (
    <article className="container_person">
      <img src={image} alt={name} />
      <div className="container_info">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
