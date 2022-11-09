const Contact = () => {

    return (
      <div className="contact-section">
           <h2 className="contact-form-header"> Let's Connect ! </h2>

       <div className="form"> 
           <form className="contact-form"> 
             {/* <label> Name </label> */}
              <input placeholder="Name" className="first-name-input" type="text"></input> 
              {/* <label> Email </label> */}
              <input placeholder="Email" id="email" type="email"></input> 
              {/* <label> Message </label> */}
             <textarea type="text" placeholder="Message" id="message" size="200" rows="5"></textarea> 
             <button className="contact-form-button"> Submit </button> 
           
           </form>
           </div>

       
      </div>
    )

}

export default Contact