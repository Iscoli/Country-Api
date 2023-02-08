import {useContext} from 'react'
import CountryContext from '../context/CountryContext'


function UserSearch(){
 
  // const navigate = useNavigate();
  const {SearchCountries,setSearchCountryData} = useContext(CountryContext)

  const handleChange = (e) => SearchCountries(e.target.value)

  








 return(
  
    <div>
    <form className='form'>
          <div>
            <div >
              <input
                type='name'
                placeholder='Search for a country'
                className='myInput'
                value={setSearchCountryData}
                onChange={handleChange}
              />
              
            </div>
          </div>
        </form> 
        
    </div>
 
 ) 
}


export default UserSearch