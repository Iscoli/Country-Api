import { useEffect,useContext } from 'react';
import { useParams,Link  } from 'react-router-dom';
import CountryContext from '../context/CountryContext';
import LisitingItems from '../Data/ListingItems';
import UserSearch from "../Users/UserSearch" ;
import DropDown from "../Components/DropDown";
import Spinner from '../Components/Spinner';


    function Region(){
      const params = useParams()
      const {Regions,  SearchcountryData, RegionDAta,loading,theme} = useContext(CountryContext)





      

      
      useEffect(()=>{
        Regions(params.regionName)
            
          
        // eslint-disable-next-line
       },[params.regionName,SearchcountryData])
         
         
      

        
        return ( <div>
         
        
         <div className="Regional-flex">
            
        <UserSearch />
       <DropDown />
       </div>
      {loading ? <Spinner /> : 
      <div className="row-contain">
        <div className="row-container">
       {  RegionDAta.filter((item)=>{
       return  SearchcountryData.toLowerCase() === '' ? item : item.name.common.toLowerCase().includes( SearchcountryData)
     }).map((item,index)=>(
      <Link    className={`text-Link${theme}`}  key={index} to={`/country/${item.name.common}?`}>
          <LisitingItems key={index} item={item}/> 
          </Link>
       ))}
       </div>
       </div>}
     
      </div>

    )}

    export default Region