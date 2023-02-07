
   import CountryContext from '../context/CountryContext'
   import { useContext } from 'react'
   import { Link } from 'react-router-dom'
   import Spinner from '../Components/Spinner'
   
   function CountryListings({item}){

    const { theme,loading} = useContext(CountryContext)
    const {
        name,
        population,
        region,
        capital,
        subregion,
        flags,
        tld,
        borders,
        currencies,
        languages
      } = item

      const cur = Object.values(currencies)
      const lang = Object.values(languages)

     
        
    if(loading){
      return <Spinner />
    }
    return ( <div className="country-container"> 
        <div className="container">
        <div className="flex-4">
            
            <img src={flags.png}  alt='country-flag'   />
        </div>
        <div className="flex-5">
            
            <div className="container-5">
            <div className="sub-flex-5a">
            <h1  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  } ><span>{name.common}</span></h1>



            <p className='font-bold'  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  } ><span className='font-size'>Native Name:</span>{ name.official}</p>



            <p className='font-bold'  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  }><span className='font-size'>Population:</span>{population .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>



            <p className='font-bold'  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  }><span className='font-size'>  Region: </span>{region}</p>



            <p className='font-bold'  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  }><span className='font-size'>Sub Region:</span>{subregion}</p>



            <p className='font-bold'  style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  }><span className='font-size'>Capital:</span>{capital}</p>  
            </div>
            <div className="sub-flex-5b">
                <p className='font-bold' style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  } ><span className='font-size'>Total Level Domain:</span>{tld}</p>

                <p className='font-bold' style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  } ><span className='font-size'>Currencies: </span>{cur[0].name}</p>  


                <p className='font-bold' style={ theme === 'light'?{color: " hsl(209, 23%, 22%)"} :  {color:"hsl(0, 0%, 100%)"}  } ><span className='font-size'>Languages: </span> {lang[0]}</p> 
         
                 
            </div>
            <div> 
            </div>
            </div>
          <div className='main-border'> Border Counntries: 
            <div className="borders"><span className="border-btn">{borders ? borders.map((border,index)=>{
                
           return <Link  key={index}  to={`/Alpha/${border}`}><button  className={ theme === 'light' ? 'white-btn btn-country' : 'black-btn btn-country'}  key={index}>{border}</button></Link>
                 }) : <p className="no-border  ptag-boder">shares No border</p>}
                
                 </span>
                 </div>
         </div>
        </div>
    </div>
    </div>             








    )}



    export  default CountryListings