import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function RecipePage() {
    return (
      <>
        <Navbar/>
        <div className="recipesMainCard">
        <div className='indRecipeMainBox'>
            <h2>Charcoal Grilled Ribs</h2>
        </div>
        </div>
      </>
    );
  }