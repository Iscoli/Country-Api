  import { useContext } from "react"
  import CountryContext from '../context/CountryContext'
  import {  useParams } from 'react-router-dom';
  import {useEffect} from 'react'
  import CountryListings from "../Data/CountryListings";
  import Arrow from '../assets/svg/arrow-left-icon.svg'
  import {Link}from 'react-router-dom'
  import Spinner from "../Components/Spinner";
  import { ArrowRight } from 'react-bootstrap-icons';
  import { ArrowLeft } from 'react-bootstrap-icons';

  function Country(){

    const { theme,CountryName,getCountryName,loading} = useContext(CountryContext)


    const params = useParams()

  

      useEffect(()=>{
        getCountryName(params.countryName)
      },[])



  
     
      return  <div>
        
       <div className= 'backButton'>
          
            <Link  className={ theme === 'light' ? {Color:"hsl(0, 0%, 100%)"} : {Color: " hsl(209, 23%, 22%)"}} to='/'>
            <button className={theme == 'light' ? 'back-btn white-btn' : 'back-btn  black-btn  '}>  <ArrowLeft  className="ml-5" />Back</button>
            </Link>
          </div> 
          {loading ? <Spinner /> :    
           <div className="country-containers">
           
           {CountryName.map((item,index)=>(
         
        
        <CountryListings key={index} item={item} />
        
      ))}
            </div> }  
    
           </div>
  }




  export default Country