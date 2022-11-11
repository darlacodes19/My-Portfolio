import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm(`${process.env.REACT_APP_MY_SERVICE_ID}`, `${process.env.REACT_APP_MY_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_MY_PUBLIC_KEY}`)
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
    return (
      <div className="contact-section">
           
           <h2 className="contact-form-header"> Let's Connect ! </h2>

       <div className="form"> 
           <form className="contact-form" ref={form} onSubmit={sendEmail}> 
             {/* <label> Name </label> */}
              <input placeholder="Name" className="first-name-input" type="text" name="user_name"></input> 
              {/* <label> Email </label> */}
              <input placeholder="Email" id="email" type="email" name="user_email"></input> 
              {/* <label> Message </label> */}
             <textarea type="text" placeholder="Message" id="message" size="200" rows="5" name="message"></textarea> 
             <input type="Submit"  value = "submit" className="contact-form-button" /> 
           
           </form>
           </div>

       
      </div>
    )

}

export default Contact