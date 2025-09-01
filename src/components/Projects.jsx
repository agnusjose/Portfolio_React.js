import "./Projects.css"
function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <dl>
        <dt><strong>CraftConnect</strong> - <a href="https://github.com/agnusjose/CraftConnect" target="blank">Click here to view code on Github</a></dt>
        <dd>A web platform that bridges local manufacturers—such as tailors, bakers, and artisans—with customers, enabling product customization and direct feedback. It primarily focuses on quality-driven products for children under 12,
           including clothing, jewelry, gift items, and cakes. The platform features real-time private chat between customers and manufacturers, ensuring personalized experiences while supporting local businesses.
          <ul>
          <li>Designed and developed key features including real-time chat interface (frontend and backend) for direct communication between customers and manufacturers.</li>
           <li> Built shopping cart functionality, and contributed to manufacturer dashboard features such as Manage Orders, Check Messages, and Manage Projects.</li>
           <li> Technologies: HTML, CSS, JavaScript, Python (Flask), SQLite, WebSockets.</li>
        </ul>
        </dd>
        <dt><strong>Personal Portfolios </strong></dt>
        <dd><ul>
          <li> A responsive portfolio using HTML , CSS and JavaScript - <a href="https://agnusjose.github.io/AgnusJose_Portfolio/" target="blank">click here to view code on Github</a></li>
          <li> A responsive portfolio using React - <a href="https://agnusjose.github.io/AgnusJose_Portfolio/" target="blank">click here to view code on Github</a></li>
        </ul>
        </dd>
      </dl>
    </div>
  )
}
export default Projects
