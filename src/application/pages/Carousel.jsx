//import img1 from "../public/logo192.png";
const Carousel = () => {

  return ( 
  <>
   
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="300px" height="400px" src="/img2.jpg" class="d-block w-100" alt="..."/>
      <div style={{color:"white"}}class="carousel-caption d-md-block">
        <h5>1 slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="300px" height="400px" src="/img3.jpg" class="d-block w-100" alt="..."/>
      <div style={{color:"green"}}class="carousel-caption d-md-block">
        <h5>2 slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img width="300px" height="400px" src="/myimg.jpg" class="d-block w-100" alt="..."/>
      <div style={{color:"blue"}}class="carousel-caption d-md-block">
        <h5>3 slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span  class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  
    </>
);
}
    
  
  
  export default Carousel;