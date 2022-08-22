import profilePic from "./images/LinkedinPicS.jpg"
import LinkedInLogo from "./images/linkedin.png"
import EmailLogo from "./images/Icon.png"
import TwitterIcon from "./images/TwitterIcon.png"
import FacebookIcon from "./images/FacebookIcon.png"
import InstagramIcon from "./images/InstagramIcon.png"
import GithubIcon from "./images/GitHubIcon.png"
import './App.css';

function App() {
  return (
    <div className="card">
      <img className="img" src={profilePic} alt="foto of Victor Martinez"/>
      <main className="main">
        <header>
          <h1>Victor Martinez</h1>
          <h2>Web Developer</h2>
          <a href="https://github.com/Victorloma">website</a>
          <div className="button-group">
            <button className="email"><img className="email-logo" src={EmailLogo} alt="email logo"/>Email</button>
            <button className="linkedin"><img className="linkedin-logo" src={LinkedInLogo} alt="linkedin logo"/>LinkedIn</button>
          </div>
        </header>
        <div className="text-container">
          <h3 className="about">About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h3 className="Interests">Interests</h3>
          <p>Food lover. Sports enthusiast. Reader. Internet fanatic. Chicken fan. Entrepreneur. Travel geek. Economic ninja. Cocktail connaisseur.</p>
        </div>
      </main>
      <footer className="footer">
        <img src={TwitterIcon} alt="The logo of Twitter" />
        <img src={FacebookIcon} alt="The logo of Facebook" />
        <img src={InstagramIcon} alt="The logo of Instagram" />
        <img src={GithubIcon} alt="The logo of GitHub" />
      </footer>
    </div>
  );
}

export default App;
