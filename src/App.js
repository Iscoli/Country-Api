  import Header from "./Components/Header";
  import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
  import Home from './pages/Home'
  import NotFound from "./pages/NotFound";
  import { CountryContextProvider } from "./context/CountryContext";
  import Region from "./pages/Region";
  import Country from '../src/pages/Country'
  import Border from "./pages/Border";
   
  
  
        
  
                    function App() {
                    
                      

                    return (
                      <div className={`App `}>
                      <CountryContextProvider>
                        <Router>
                        
                  
                  
                          <Header   />
                                
                          
                          <div className="main-container">
                          <Routes>
                          
                            <Route path='/' element={<Home/>} />
                              <Route path='/notfound' element={<NotFound/>} />
                              <Route path='/*' element={<NotFound />} />
                              <Route path='/region/:regionName' element={<Region />}/>
                              <Route path='/country/:countryName' element={<Country />}  />
                              <Route path='/Alpha/:country' element={<Border/>}  />
                          </Routes>
                          </div>
                          
                      
                      </Router>
                    
                      
                      
                      
                      
                    
                      </CountryContextProvider>
                  
                      </div> 
                    );
                  }

                  export default App;
