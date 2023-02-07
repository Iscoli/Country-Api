import { useContext } from "react";
import CountryContext from '../context/CountryContext';
import {  useParams } from 'react-router-dom';
import {useEffect} from 'react';
import CountryListings from "../Data/CountryListings";
import Arrow from '../assets/svg/arrow-left-icon.svg';
import {Link}from 'react-router-dom';
import Spinner from "../Components/Spinner"; 

function Border(){

  const {theme, AlphaData,getAlphaName,loading} = useContext(CountryContext)


  const params = useParams()



    useEffect(()=>{
      getAlphaName(params.country)
    },[params.country])




   
    if(loading){
      return <Spinner />
    }
    return (<div>
      
     <div className= 'backButton'>
        
          <Link  className={ theme === 'light' ? {Color:"hsl(0, 0%, 100%)"} : {Color: " hsl(209, 23%, 22%)"}} to='/'>
          <button className={theme == 'light' ? 'back-btn white-btn' : 'back-btn  black-btn  '}> <img  className='arrow'  src={Arrow} alt='Arrow'/>Back</button>
          </Link>
        </div> 
        
      <div className="country-containers">
         
         { AlphaData.map((item,index)=>(
       
      
      <CountryListings key={index} item={item} />
      
    ))}
          </div>
         </div>
)}




export default Border