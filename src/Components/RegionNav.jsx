import UserSearch from "../Users/UserSearch"  
import DropDown from "../Components/DropDown"


function Home(){
        
  return  <div className="Regional-flex">
        <div className="search-btn">
        <UserSearch />
        </div>
        <div className="region-btn">
        <DropDown />
        </div>

  
  </div>
 

}

export default   Home