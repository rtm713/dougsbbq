import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Recipes() {
    return (
      <>
        <Navbar/>
        <div className="recipesMainCard">
        <div id="mainCardHead">
            <hr></hr>
            <h2>RECIPES</h2>
            <hr></hr>
        </div>
        <div id="recipesMainButtonBox">
            <Link to="/dougsbbq/Allrecipes" className="recButton" id="allRecButton">
                <p>ALL RECIPES</p>
            </Link>
            <Link to="" className="recButton" id="chickenRecButton">
                <p>CHICKEN</p>
            </Link>
        </div>
    </div>
      </>
    );
  }