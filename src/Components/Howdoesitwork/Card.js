import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <i class={props.src}></i>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-desc">{props.desc}</p>
      </div>
    </>
  );
};

export default Card;
