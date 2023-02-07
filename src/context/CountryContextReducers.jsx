

  const CountryContextReducers = (state, action) =>{
    switch(action.type){

        case 'GET-ALL-COUNTRIES':
          return {
            ...state,
            CountryDAta: action.payload,
            loading:false,
          }

          case 'GET-REGION':
        return{
          ...state,  
          RegionDAta: action.payload,
         loading:false,
        }

        
          
          case 'SEARCH-COUNTRY-DATA':
            return {
              ...state,
              SearchcountryData: action.payload 
            }


            case 'COUNTRY-NAME':
            return {
              ...state,
              CountryName: action.payload,
              loading:false,
            }


            case 'ALPHA-DATA':
              return {
                ...state,
                AlphaData : action.payload,
                loading:false,
              }
  
              case 'SET_LOADING':
          return {
            ...state,
            loading: true,
          }

      default:
        return state
    }
  }
  
  
  export default  CountryContextReducers