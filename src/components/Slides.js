import React from 'react'

export default function Slides() {
  return (
    <div id="carouselExampleCaptions" className="container my-3 carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" height={300} className="d-block w-100" alt="/"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Title 1</h5>
        <p>Something about the video.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" height={300} className="d-block w-100" alt="/"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Title 2</h5>
        <p>Somethhing about the video.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg" height={300} className="d-block w-100" alt="/"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Title 3</h5>
        <p>Something about the video.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
