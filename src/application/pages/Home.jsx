import Carousel from "./Carousel";
import Jumborton from "./Jumborton";
const Home = () => {
    return (
      <>
      <marquee>We have won Best CSR Award 2023..yayyyy</marquee>
      
      <button type="button" class="btn btn-secondary btn-lg btn-block ">Click me to donate & become a DONOR now</button>
      <button class="btn btn-outline-success" >Click me to donate & become a DONOR now</button>
      <Carousel />
      <Jumborton/>
      </>
    )
    
   
  };
  
  export default Home;