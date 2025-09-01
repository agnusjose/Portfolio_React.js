import './Navbar.css';

function Navbar({ scrollToSection, refs }) {
  return (
    <div className='nav'>
      <h1>Agnus Jose - Portfolio</h1>
      <ul>
        <li onClick={() => scrollToSection(refs.homeRef)}>Home</li>
        <li onClick={() => scrollToSection(refs.aboutRef)}>About</li>
        <li onClick={() => scrollToSection(refs.projectsRef)}>Projects</li>
        <li onClick={() => scrollToSection(refs.skillsRef)}>Skills</li>
        <li onClick={() => scrollToSection(refs.contactRef)}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
