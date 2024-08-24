import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Recipes() {
    return (
      <>
        <Navbar/>
        <div className="recipesMainCard">
        <div id="mainCardHead">
            <hr></hr>
            <h2>ALL RECIPES</h2>
            <hr></hr>
        </div>
        <div className="recipeCardBox">
            <div className="recipeCard">
                <img src="images/charcoalGrilledRibs.webp" alt=""/>
                <h3>Charcoal Grilled Ribs</h3>
            </div>
        </div>
    </div>
      </>
    );
  }