const About = () => {

    return (
      <div  className="about-section">
        <div className="about-me"> 
           <h2> About Me </h2>
           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="my-skills"> 
           <h2> Skills</h2>
           <img src={require('../assets/html.png')} /> 
           <p> HTML5 </p>

           <img src={require('../assets/javaScript.png')} /> 

        </div>
           
          
           
      </div>
    )

}

export default About