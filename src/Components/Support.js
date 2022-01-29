import React from 'react';

const Support = () => {
     const HowToUseSteps = [
        {
            id:1,
            name:"Sign in",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facere adipisci. Esse illum blanditiis, quibusdam quam at recusandae error aperiam, veritatis tempora, unde architecto odio eveniet iure quod. Odio, assumenda!"
        },
        {
            id:2,
            name:"Add your bank Account",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facere adipisci. Esse illum blanditiis, quibusdam quam at recusandae error aperiam, veritatis tempora, unde architecto odio eveniet iure quod. Odio, assumenda!"
        },
        {
            id:3,
            name:"Send Payment request",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facere adipisci. Esse illum blanditiis, quibusdam quam at recusandae error aperiam, veritatis tempora, unde architecto odio eveniet iure quod. Odio, assumenda!"
        },
    ]
  return (
    <>
        <div className="howtousetheapp">
            <div className="howtousesteps">
                <h2>World class support is available 24/7</h2>
                <div className="howtousesteps-cards">
                    {
                        HowToUseSteps.map((curr)=>{
                            return (
                                <div className="howtousesteps-cards-card">
                                    <span>{curr.id}</span>
                                    <div className="howtousesteps-cards-card-info">
                                        <h3>{curr.name}</h3>
                                        <p>{curr.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="learn-more-btn">Learn More</button>
            </div>
            <img src="https://images.pexels.com/photos/7620629/pexels-photo-7620629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='img' />
        </div>      
    </>
  );
};

export default Support;
