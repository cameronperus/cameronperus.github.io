const { useState } = React;

const Portfolio = () => {
    const [layoutVertical, setLayoutVertical] = useState(true);
  
    const toggleLayout = () => {
      setLayoutVertical(!layoutVertical);
    };
    return (
    <div className={"container"}>
        <div className={`grid ${layoutVertical ? 'vertical-layout' : 'horizontal-layout'}`}>
            <div className="column">
                <div className="summary">
                    <h1>Cameron Perus</h1>
                    <p>I am a computer sciences student, currently completing my final year for Software Support. I have been interested in computer sciences for most of my life but have a minimal physics background with a single year at Niagara College as a Photonics Engineering student. 
                    I have a passion for learning and am always looking for new opportunities to expand my knowledge. I am currently working on a game project in Unity, a chatbot using the Discord API, and am looking for a job in the field of computer sciences. 
                    </p>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <p>Mohawk College 2021-2024</p>
                    <p>Software Support</p>
                    <p>Niagara College 2017-2018</p>
                    <p>Photonics Engineering</p>
                </div>
                <div className="experience">
                    <h3>React Example</h3>
                    <p>This button is proof of my knowledge with multiple different languages: HTML, CSS, JavaScript, and using React</p>
                    <button onClick={toggleLayout}>Toggle Layout</button>
                </div>
            </div>
            <div className="column">
                <div className="skills">
                    <h2>Skills</h2>
                    <p>Competent in these languages:</p>
                    <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Java</li>
                    </ul>
                    <p>Experience with these tools:</p>
                    <ul>
                    <li>Unity</li>
                    <li>Discord API</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>IntelliJ IDEA</li>
                    <li>Pyzo</li>
                    </ul>
                </div>
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="project">
                        <h3>Unity game</h3>
                        <p>A unity game which is being created with C#, dealing with player interaction, object control, tilemapping, and ridgidbody2d</p>
                        <h3>Discord Bot</h3>
                        <p>A chatbot specializing in fighting game mechanics and notation which is being created using the Discord API, dealing with user interaction, message control, and server management</p>
                    </div>
                </div>
            </div>
          <div className="column">
            <div className="resume">
                <h2>Resume</h2>
                <p>
                <a href="link-to-my-resume.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a>
                </p>
            </div>
            <div className="contact">
                <h2>Contact Information</h2>
                <p>Email: 000776123@mohawkcollege.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/cameron-perus-0b06b726a/" target="_blank" rel="noopener noreferrer">My LinkedIn </a></p>
            </div>
          </div>
        </div>
    </div>
    );
  };
  
  ReactDOM.render(<Portfolio />, document.querySelector('#root'));
  