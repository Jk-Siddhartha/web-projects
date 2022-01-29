import React from "react";
import Card from "./Howdoesitwork/Card";

const Howdoesitwork = () => {
  const HowDoesItWorkCardInfo = [
    {
      src: "fa fa-download card-logo",
      title: "Download App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.",
    },
    {
      src: "fa fa-download card-logo",
      title: "Complete the Instruction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.",
    },
    {
      src: "fa fa-download card-logo",
      title: "Receive your funds",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.",
    },
  ];

  return (
    <>
      <div className="howdoesitwork">
        <h1>How does it work</h1>
        <div className="cards">
          {HowDoesItWorkCardInfo.map((curr) => {
            return <Card src={curr.src} title={curr.title} desc={curr.desc} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Howdoesitwork;
