import { useContext } from "react";
import CountryContext from '../context/CountryContext';
import {  useParams } from 'react-router-dom';
import {useEffect} from 'react';
import CountryListings from "../Data/CountryListings";
import {Link}from 'react-router-dom';
import Spinner from "../Components/Spinner"; 
import { ArrowLeft } from 'react-bootstrap-icons';

function Border(){

  const {theme, AlphaData,getAlphaName,loading} = useContext(CountryContext)


  const params = useParams()



    useEffect(()=>{
      getAlphaName(params.country)
      // eslint-disable-next-line
    },[params.country])




  
    return (<div>
      
     <div className= 'backButton'>
        
            <Link  className={ theme === 'light' ? {Color:"hsl(0, 0%, 100%)"} : {Color: " hsl(209, 23%, 22%)"}} to='/'>
            <button className={theme === 'light' ? 'back-btn white-btn' : 'back-btn  black-btn  '}>  <ArrowLeft  className="ml-5" />Back</button>
            </Link>
        </div> 
        {loading ? <Spinner /> :  <div className="country-containers">
         
         { AlphaData === '' ? <div className="error-p"><p>Network Error. Unable to fetch more information about the  country.</p><span className="error-h"><h2>Reload page!</h2></span></div>: AlphaData.map((item,index)=>(
       
      
      <CountryListings key={index} item={item} />
      
    ))}
          </div>} 
         </div>
)}




export default Border