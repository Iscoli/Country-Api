
import {createContext,useState,useEffect,useReducer} from 'react'
import CountryContextReducers from './CountryContextReducers';
import axios from 'axios';
 


  //initialize context
const CountryContext = createContext()









export const CountryContextProvider = ({children})=>{

  const initialState = {
    CountryDAta: [],
    RegionDAta:[],
    SearchcountryData: '',
    CountryName: [],
    AlphaData:[],
    loading:false,

  }

  const [state, dispatch] = useReducer(CountryContextReducers, initialState)


  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')


      // SET COLOR

      const toggleTheme = ()=>{
  
        if(theme === 'light'){
          setTheme('dark')
        }else{
          setTheme('light')
        }
      }
    
    
    
      useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.body.className= theme
      },[theme])






            //Set Loading //LOADING

          
       const  setLOADING = ()=> dispatch({
        type: 'SET_LOADING'
       })












    // All Country 
    

    useEffect(()=>{
    
      const getCountries = async()=>{
        setLOADING()
       
        try {
          const {data} = await axios.get('https://restcountries.com/v3.1/all')
          
          dispatch({
            type: "GET-ALL-COUNTRIES",
            payload: data,
           })


         
     }
     catch (error){
       console.log('an eroo occured')
     }
      }
      getCountries()
  
 },[])







    //Regions


  const Regions = async(region)=>{

    setLOADING()

       try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)

      dispatch({
        type: "GET-REGION",
        payload: response.data,
       })


     
      
 }
 catch (error){
   console.log('an eroo occured')
 }
  }
  






    // Search  filter Users
    // const texty = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  

    // const texty =  text.toLowerCase().split(' ').map((word)=>word.charAt(0).toUpperCase() + text.slice(1).toLowerCase().join(' '));
    const SearchCountries=((text)=>{
     
      const texty =  text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

      dispatch({
        type: "SEARCH-COUNTRY-DATA",
        payload:texty,
       })
      
    })



  
   


   
   
    // countries by name
   
   
     const getCountryName = async(params)=>{

      setLOADING()
      
       try {
         const {data} = await axios.get(`https://restcountries.com/v3.1/name/${params}`)
         
         dispatch({
          type: "COUNTRY-NAME",
          payload: data,
         })
         console.log(data)
       
    }
    catch (error){
      console.log('an eroo occured')
    }
     }
    






  
       // countries by name
   
   
       const getAlphaName = async(code)=>{

        setLOADING()
      
        try {
          const {data} = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
          
          dispatch({
            type: "ALPHA-DATA",
            payload: data,
           })
        
     }
     catch (error){
       console.log('an eroo occured')
     }
      }
    
    










  return <CountryContext.Provider value={{
    ...state, 
    Regions,
    SearchCountries,
    toggleTheme,
    getCountryName,
    getAlphaName,
    theme,
  }}>
      {children}
  </CountryContext.Provider>
}



export default CountryContext