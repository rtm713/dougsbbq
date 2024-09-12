import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
    return (
      <>
        <div id='footerMainDiv'>
            <p>Website Developed By </p> <Link to="https://travismeyerkc.com/">Travis Meyer</Link>
        </div>
      </>
    );
  }