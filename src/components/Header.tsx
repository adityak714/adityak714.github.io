import '../index.css'

function Header() {
  return (
    <header id="header-menu" style={{
      backgroundImage: 'linear-gradient(to right, rgba(0, 60, 120, 0.85), rgba(0, 60, 120, 0.65))',
      position: 'static',
      padding: '10px 50px 10px 50px',
      margin: '0px 0px 75px 0px',
      textAlign: 'start',
      fontSize: '1.5rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <p>
        Aditya Khadkikar        
      </p>
      <div className="links" style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <a href="mailto:guskhadad@student.gu.se" target={"_blank"} rel={'noreferrer'}>Email</a>
        <a href="https://www.linkedin.com/in/aditya-k-8b9a00220/" target={"_blank"} rel={'noreferrer'}>LinkedIn</a>
        <a href="https://github.com/adityak714" target={"_blank"} rel={'noreferrer'}>GitHub</a>
      </div>
    </header>
  )
}

export default Header