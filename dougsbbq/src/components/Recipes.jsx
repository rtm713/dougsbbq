import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Recipes() {
    return (
      <>
        <Navbar/>
        <div id="recipesMainCard">
        <div id="mainCardHead">
            <hr></hr>
            <h2>RECIPES</h2>
            <hr></hr>
        </div>
        <div id="recipesMainButtonBox">
            <a href="/AllRecipes" class="recButton" id="allRecButton">
                <p>ALL RECIPES</p>
            </a>
            <a href="" class="recButton" id="chickenRecButton">
                <p>CHICKEN</p>
            </a>
        </div>
    </div>
      </>
    );
  }