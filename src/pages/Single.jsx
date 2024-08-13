import React from 'react'
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Single = () => {
    let location = useLocation();
    console.log(location.state.recipe)
  return (
    <div className='container'>
   <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4 d-flex justify-content-center p-2">
      <img src={location.state.recipe.image} className="col-md-12 col-12 rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">{location.state.recipe.label}</h2>
        <h5 className="card-title">{location.state.recipe.mealType}</h5>
        <Link className="btn btn-success my-3"  to={location.state.recipe.url}>How To Make</Link>
        <div className='row gap-2 '>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>Sugar</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.SUGAR.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.SUGAR.unit}</span>
            </div>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>Cholesterol</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.CHOLE.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.CHOLE.unit}</span>
            </div>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>CA</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.CA.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.CA.unit}</span>
            </div>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>FAT</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.FAT.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.FAT.unit}</span>
            </div>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>Carbs</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.CHOCDF.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.CHOCDF.unit}</span>
            </div>
            <div className='col-sm-3 text-center p-4 border border-primary mx-1 my-1'>
                <h6>Energy</h6>
                <span>{Math.ceil(location.state.recipe.totalNutrients.ENERC_KCAL.quantity)}</span>
                <span>{location.state.recipe.totalNutrients.ENERC_KCAL.unit}</span>
            </div>
            
        </div>

      </div>
    </div>
  </div>
</div>

<ul className='ul mt-5'>
<h3>Ingredients</h3>
{
  location.state.recipe.ingredientLines.map((ele)=>{
    return(
       
        <li>{ele}</li>
      
    )
  })
 }
</ul>


   
    
    </div>
  )
}

export default Single
