


      function LisitingItems( {item} ){
      
       

        const {
            name,
            population,
            region,
            capital,
            flags
          } = item
         
        
         
          return ( <>
          
         <div className="row">
         <img  className='img'  src={flags.png} alt='photo'/> 
         <div className="row-content">
         <p>{name.common}</p>
          <p>{population .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          <p>{region}</p>
          <p>{capital}</p>
         </div>
         </div>
         </>

      )}

      

      export default LisitingItems