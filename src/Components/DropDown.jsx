import {useContext} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryContext from '../context/CountryContext'
    function DropDown(){
    
      const { theme} = useContext(CountryContext) 

  return <>

    <DropdownButton 
   id={ theme === 'light'? 'nav-white-dropdown' : 'nav-black-dropdown'}
    title="Filter By Region"
    
    > 
         <Nav     
          className="  flex-column" 
         
           defaultActiveKey="#" >
         <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: " hsl(209, 23%, 22%)"}} href="/" >All</Nav.Link>
      <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: " hsl(209, 23%, 22%)"}} href="/region/Africa">Africa</Nav.Link>
      <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: " hsl(209, 23%, 22%)"}}  href="/region/America">America</Nav.Link>
      <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: " hsl(209, 23%, 22%)"}} href="/region/Asia">Asia</Nav.Link>
      <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: "  hsl(209, 23%, 22%)"}} href="/region/Europe">  Europe</Nav.Link>
      <Nav.Link style={ theme === 'light'? {color: " hsl(209, 23%, 22%)"} : {color: " hsl(209, 23%, 22%)"}} href="/region/Oceania">ocenia</Nav.Link>
    </Nav>
   
    
    
    </DropdownButton>
 
          </>


    }

    export default DropDown