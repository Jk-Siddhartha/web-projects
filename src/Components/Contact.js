import React from 'react';

const Contact = () => {
  return (
      <>
        <div className="contact">
            <div className="contact-left">
                <h2>connect with our sales team.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ea dolores ad eveniet doloremque provident, explicabo numquam deleniti.</p>
                <img src="https://images.pexels.com/photos/5301747/pexels-photo-5301747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='contact-img' />
            </div>
            <div className="contact-right">
                <div className="name">
                    <input type="text" name="" id="" placeholder='First Name' />
                    <input type="text" name="" id="" placeholder='Last Name' />
                </div>
                <div className="number-email">
                    <input type="number" name="" id="" placeholder='Mobile Number' />
                    <input type="email" name="" id="" placeholder='Email Address' />
                </div>
                <input type="text" name="" id="address" placeholder='Add Address' />
                <input type="text" name="" id="message" placeholder='Enter Your Message'/>
                <div className="check-accept">
                    <input type="checkbox" name="" id="check" />
                    <p>I agree with all the term and conditions related to the contact, and JustPay service can contact me with any medium.</p>
                </div>
                <button className='btn'>Submit</button>
            </div>
        </div>
      </>
  );
};

export default Contact;
