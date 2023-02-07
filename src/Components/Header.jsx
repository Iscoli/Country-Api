  import CountryContext from '../context/CountryContext'
  import Dark from '../assets/svg/moon-outline.svg'
  import light from '../assets/svg/moon.svg'
  import { useContext } from 'react'
  import {Link}from 'react-router-dom'
  
  
  
  
    function Header(){
    const { toggleTheme,theme} = useContext(CountryContext)
     
    return <nav className='top'>
      <div className="nav-container"  style={ theme === 'light'? {backgroundColor:"hsl(0, 0%, 100%)"} : {backgroundColor: " hsl(209, 23%, 22%)"}  }>
        <div>     
           <Link  className={`text-Link${theme}`}  to='/'>
        <div className="header1">
          <h2>Where in the world?</h2>
        </div>
        </Link>
        </div>

        <div className="header2">
          <p  className="toggle"  onClick={()=>toggleTheme()}
          > {theme === 'light' ? 
           <img className='dark-moon' src={light} alt='Arrow'/> :  <img className='light-moon' src={Dark} alt='Arrow'/> }
           {theme === 'light' ? 'Dark mode' : 'Light mode'} </p>
        </div>
    </div>
    
    </nav>
  }


  export default Header