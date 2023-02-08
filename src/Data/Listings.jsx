
    import LisitingItems from "./ListingItems"
    import {useContext} from 'react'
    import CountryContext from '../context/CountryContext';
      import {Link} from  'react-router-dom'







    function Listings(){
       


        const {SearchcountryData,CountryDAta,theme} = useContext(CountryContext)
   
   
      return  <>
      

     {CountryDAta === '' ? <div className="error-p"><p>Network Error. Unable to fetch list of countries.</p><span className="error-h"><h2>Reload page!</h2></span></div>
     : CountryDAta.filter((item)=>{
       return  SearchcountryData.toLowerCase() === '' ? item : item.name.common.toLowerCase().includes( SearchcountryData) ||  item.name.common.toUpperCase().includes( SearchcountryData)
     }).map((item,index)=>(
          <Link   className={`text-Link${theme}`} key={index} to={`/country/${item.name.common}?`}>
            
         <LisitingItems key={index} item={item}/> 
         </Link>
      ))}
      
       </>
    } 

    export default Listings