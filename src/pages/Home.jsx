    import UserSearch from "../Users/UserSearch"  
    import Listings from "../Data/Listings"
    import DropDown from "../Components/DropDown"
    import Spinner from "../Components/Spinner"
    import CountryContext from '../context/CountryContext';
    import { useContext } from "react";

    function Home(){
      const {loading} = useContext(CountryContext)
      
     
      return ( <div>
        <div className="Regional-container">
          <div className="Regional-flex">
        <div>
       <UserSearch />
       </div>

       <div>
      <DropDown />
      </div>
      </div>
      </div>
      {loading ? <Spinner /> :   <div className="row-contain">
        <div className="row-container">
        <Listings />
        </div>
        </div>}
     
      
      </div>
    )}

    export default   Home