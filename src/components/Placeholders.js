import React from 'react'

export default function Placeholders() {
  return (

    <div>

    {/* <div classNameName="card container my-2 d-flex" style={{width:"300px"}} >
  <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="  classNameNameName="card-img-top my-2" alt="..."/>

  <div classNameName="card-body">
    <h5 classNameName="card-title">Card title</h5>
    <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" classNameName="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

{/* <div classNameName="card container my-2 " style={{width:"300px"}}>
  <img src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg" classNameName="card-img-top" alt="..."/>

  <div classNameName="card-body">
    <h5 classNameName="card-title">Card title</h5>
    <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" classNameName="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

<div className="container row row-cols-1 row-cols-md-2 g-4 ms-5" style={{display: "flex",
        alignItems: "center"}}>
  <div className="col">
    <div className="card" >
      <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className="card-img-top" alt="..."/>
      <div className="card-body" >
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

</div>
  )
}
