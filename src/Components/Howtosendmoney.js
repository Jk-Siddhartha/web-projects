import React from 'react';

const Howtosendmoney = () => {

    const Howtosendmoney = [
        {
            src : "fa fa-download card-logo",
            title : 'Register for free.',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
        {
            src : "fa fa-download card-logo",
            title : 'Verify your identity.',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
        {
            src : "fa fa-download card-logo",
            title : "Add recipient's bank details.",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
        {
            src : "fa fa-download card-logo",
            title : 'Pay for your transfer.',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
        {
            src : "fa fa-download card-logo",
            title : 'Choose an amount to send.',
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
        {
            src :"fa fa-download card-logo",
            title : "That's it.",
            desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam corporis quod non alias atque repellat similique, distinctio saepe natus, corrupti itaque ratione explicabo! Accusamus tenetur nostrum, quaerat quasi aliquid eveniet.'
        },
    ]
  return (
      <>
        <div className="howtosendmoney">
            <div className="howtosendmoney-cards">
                {
                    Howtosendmoney.map((curr)=>{
                       return (
                            <div className="howtosendmoney-card">
                                <i class={curr.src}></i>
                                <img src={curr.src} alt="" className='card-logo' />
                                <h3 className='card-title'>{curr.title}</h3>
                                <p className='card-desc'>{curr.desc}</p>
                            </div>
                       ) 
                    })
                }
            </div>
        </div>
      </>
  );
};

export default Howtosendmoney;
