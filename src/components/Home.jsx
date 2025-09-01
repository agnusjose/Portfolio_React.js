import "./Home.css"
import profilePic from "../assets/agnus2.jpg"; 
function Home() {
  return (
    <div className="home">
      <div className="left">
        <img src="public/agnus2.jpg" alt="Profile" />
      </div>
      <div className="right">
      <h2>Hi ! <br />I am <span style={{fontFamily:"monospace" , fontSize:"70px" , margin:"10px"}}>Agnus Jose</span></h2>
      <p>Final-year B.Tech Computer Science student at SJCET, Palai.</p>   
      </div>         
    </div>
  )
}
export default Home
