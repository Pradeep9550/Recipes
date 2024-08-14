import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"

const Home = (props) => {

    const [items,setItems] = useState([]);
    const [item,setitem] = useState("cake")
    
    let inputRef = useRef();
    

    let getRecipe =async ()=>{
        // method 1
        // let res =await fetch( "https://api.edamam.com/search?q=chicken&app_id=7e529349&app_key=5ec5a18b5cb7ccc6b8c6f926f59dada0")
        // let data =await res.json();
        // console.log(data)

        // method 2
        let res = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=7e529349&app_key=5ec5a18b5cb7ccc6b8c6f926f59dada0`)
        // console.log(res.data.hits)
        setItems(res.data.hits)
    }
    useEffect(()=>{
        getRecipe();
    },[item])

    console.log(items)
    
    const handleInput=(e)=>{
      e.preventDefault();
     let input=inputRef.current.value 
     setitem(input)
     inputRef.current.value =""
    }

    const handleClick=(obj)=>{
        props.getData(obj)
    }
    
  return (

    
    <div>
        
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
      <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/banners/2.jpg" className="d-block " alt="..." />
    </div>
    <div className="carousel-item active">
      <img src="https://metropolitanhost.com/themes/themeforest/html/trickly/assets/img/banners/1.jpg" className="d-block " alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



         


      <form className="d-flex col-6  m-auto my-3" role="search"  >
        <input ref={inputRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handleInput} className="btn btn-outline-success" type="submit">Search</button>
      </form>


      <div className='row justify-content-center gap-5 m-0 p-0'>

    
{
 items.map((ele)=>{
   return(
      <div className="card" key={ele.id} style={{width: '18rem'}}>
<img src={ele.recipe.image} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title text-truncate">{ele.recipe.label}</h5>
{/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
<Link to="/single" state={ele}   className="btn btn-warning">view recipe</Link>
<Link className='btn btn-success ms-3' onClick={()=>{handleClick(ele)}}>Add Cart</Link>

</div>
</div>

   )
 })
}
</div>
    </div>
  )
}

export default Home