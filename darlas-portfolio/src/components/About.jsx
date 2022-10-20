const About = () => {

    return (
      <div  className="about-section">
        <div className="about-me"> 
           <h2 className='about-me-header'> About Me </h2>
           <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="my-skills"> 
           <h2 className='skills-header'> Skills</h2>
           <div className='skills-grid'> 
           <div> 
           <img src={require('../assets/html.png')} alt = 'HTML icon' className='skills-icon'/> 
           <p> HTML5</p>
           </div>
          
          <div>
           <img src={require('../assets/CSS.png')} alt = 'Cascading Style Sheet' className='skills-icon'/> 

           <p> CSS3</p>
           </div>

           <div>
           <img src={require('../assets/javaScript.png')}  alt = 'JavaScript icon' className='skills-icon'/> 
           <p> JavaScript </p>
           </div>
           <div>
           <img src={require('../assets/react.png')} alt = 'React icon' className='skills-icon' /> 
           <p> React </p>
           </div>

           <div> 
           <img src={require('../assets/express.png')} alt= 'Express icon' className='skills-icon'/> 
           <p> Express </p>
           </div>
           <div>
           <img src={require('../assets/mongoDB.png')} alt = 'MongoDB icon' className='skills-icon' /> 
           <p> MongoDB </p>
           </div>
           <div> 
           <img src={require('../assets/git.png')} alt= 'Git icon' className='skills-icon'/> 
           <p> Git </p>
           </div>
           <div> 
           <img src={require('../assets/github.png')} alt = 'GitHub icon' className='skills-icon' /> 
           <p> GitHub </p>
           </div>
           </div>

        </div>
           
          
           
      </div>
    )

}

export default About