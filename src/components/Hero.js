import Carousel from "./Carousel"


function Hero() {
  return (
    <div className='heroes'>
    <div className='hero'>
      <img className='heropic' src="assets/coverpic.png" alt="" />
        
        <h1 className='herotitle'>Night Gauger</h1>
      <h1 className='herotext'>
        Automatic Lift for
Deliquefying
Flowing Oil & Gas
Wells using
        Foaming Sticks </h1>
        <div className="flexbox">
          <img className='flexpic1' src="assets/gasflow13.png" width="400px" height="300px" alt="" />
          <img className='flexpic2' src="assets/gasflow14.png" width="400px" height="300px" alt="" />
          <img className='flexpic3' src="assets/gasflow15.png" width="300px" height="300px" alt="" />
        </div>


      <div className="hero2">
        
         <h2 className="herotext2">Unloading liquids from aging gas wells is a problem that every drilled well will eventually have to solve. There are many solutions marketed today but the US EPA did a study in 2010 and found Foam (Soap) Sticks as the most economical. All Technologies strive to do the same thing, Deliquefy the well. Since the the well is nearing the end of it's life, it only makes sense to minimalize the Capital Investment</h2>
        </div>
        <img className='heropic3' src="assets/gasflow2.png" alt="" />
      

      <div className="hero3">
    <h3 className="herotext3">Solid foam sticks, applied once per day, are designed to increase natural
gas production by an average of 30-35%, by reducing the hydrostatic
pressure on layer, achieved by the transformation in foam of the
deposit water accumulated in well.
Automatic Launchers, combined with Well Limiters, can increase
        production 40% -50% and higher.</h3>
      <Carousel/> 
      
     
      
    
      
    </div>
      </div>
      </div>
    
  )
}

export default Hero