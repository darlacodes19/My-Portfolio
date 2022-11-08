const Contact = () => {

    return (
      <div className="contact-section">
           <h2 className="contact-form-header"> Let's Connect ! </h2>

       <div className="form"> 
           <form className="contact-form"> 
             <div className="contact-form-div"> 
              <input placeholder="first name" className="first-name-input" ></input> 
              <input placeholder="last name"></input> 
             </div>
             <input placeholder="email" id="email"></input> 
             <input placeholder="subject" id="subject"></input> 
             <input placeholder="message" id="message"></input> 
             
           
           </form>
           </div>

       
      </div>
    )

}

export default Contact