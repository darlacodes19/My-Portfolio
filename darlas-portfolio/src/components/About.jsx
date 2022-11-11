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
           
       <div className="about-section-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill">
            
          </path>
         </svg>
        </div> 
           
      </div>
    )

}

export default About