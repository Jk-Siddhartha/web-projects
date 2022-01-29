import React from 'react';

const HowToUseTheApp = () => {

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
            <img src="https://images.pexels.com/photos/6214385/pexels-photo-6214385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='img' />
            <div className="howtousesteps">
                <h2>How to use the App?</h2>
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
        </div>
      </>
  );
};

export default HowToUseTheApp;
