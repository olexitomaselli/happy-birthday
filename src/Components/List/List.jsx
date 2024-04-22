import React from "react";
import { Person } from "../People/Person";

import "./List.css";

export const List = ({ people }) => {
  return (
    <section className="container_list">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};
