import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
        <header>
            <div>
                <img src="./images/Screenshot 2024-08-19 134211.png" alt=""></img>
                <h1>DOUG'S KC INSPIRED BBQ</h1>
            </div>
        </header>
        <div id="navDiv">
        <nav>
  <Link to="/recipes">
    <p>Recipes</p>
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 33.131 33.131"
      xmlSpace="preserve"
      width="20px"
      height="20px"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <g id="b149_recipes_book">
            <polygon points="3.927,29.35 5.529,29.35 5.529,26.25 3.927,26.25 3.927,24.883 5.529,24.883 5.529,22.07 3.927,22.07 3.927,20.701 5.529,20.701 5.529,17.814 3.927,17.814 3.927,16.449 5.529,16.449 5.529,13.561 3.927,13.561 3.927,12.193 5.529,12.193 5.529,9.59 3.927,9.59 3.927,8.225 5.529,8.225 5.529,3.473 2.331,3.473 2.331,33.131 5.529,33.131 5.529,30.721 3.927,30.721 "></polygon>
            <rect x="5.529" y="8.225" width="1.354" height="1.365"></rect>
            <rect x="5.529" y="12.193" width="1.354" height="1.367"></rect>
            <rect x="5.529" y="16.449" width="1.354" height="1.365"></rect>
            <rect x="5.529" y="20.701" width="1.354" height="1.369"></rect>
            <rect x="5.529" y="24.883" width="1.354" height="1.367"></rect>
            <rect x="5.529" y="29.35" width="1.354" height="1.371"></rect>
            <path d="M30.799,30.1V1.143C30.799,0.23,29.655,0,29.655,0H5.552c-2.095,0-2.91,1.373-3.221,2.438h3.452h21.358 c1.293,0,1.258,1.139,1.258,1.139V30.05h-1.502V3.473H6.883v4.752h1.371V9.59H6.883v2.604h1.371v1.367H6.883v2.889h1.371v1.365 H6.883v2.887h1.371v1.369H6.883v2.812h1.371v1.367H6.883v3.1h1.371v1.371H6.883v2.41h20.015v-1.74h1.468v0.004l1.211-0.004 C30.892,31.391,30.799,30.1,30.799,30.1z M23.099,15.656c-0.947,0.945-2.176,1.307-3.021,0.969l0.052,0.055l-1.772,1.775 l3.968,3.967c0,0,0.108,0.873-0.875,0.873l-3.97-3.965l-3.982,3.986c0,0-0.878,0.113-0.878-0.873l3.991-3.988l-1.797-1.795 l0.009-0.014c-0.817,0.328-1.321,0.67-2.212-0.162l-0.003,0.006l-2.687-2.688l0.426-0.434l2.816,2.389l0.504-0.512l-2.584-2.713 l0.41-0.412l2.705,2.6l0.596-0.596l-2.461-2.736l0.449-0.449l2.685,2.689v0.004c0.831,0.887,0.492,1.391,0.162,2.211l0.057-0.059 l1.794,1.797l1.778-1.773l0.011,0.008c-0.342-0.844,0.023-2.076,0.968-3.021c1.151-1.15,2.723-1.439,3.509-0.65 C24.537,12.934,24.248,14.506,23.099,15.656z"></path>
          </g>
        </g>
      </g>
    </svg>
  </Link>

  <Link to="/shop">
    <p>Shop</p>
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      enableBackground="new 0 0 32 32"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Cart">
          <path
            d="M30,1h-4c-0.5,0-0.9,0.4-1,0.8L24,8h-8H2C1.7,8,1.4,8.1,1.2,8.3C1,8.6,1,8.9,1,9.2l2,12 C3.1,21.6,3.5,22,4,22h12h6.9c0.5,0,0.9-0.4,1-0.8l1.9-12l1-6.1H30c0.5,0,1-0.5,1-1S30.5,1,30,1z"
            fill="#000000"
          ></path>
          <g>
            <circle cx="7" cy="27" fill="#000000" r="4"></circle>
          </g>
          <g>
            <circle cx="20" cy="27" fill="#000000" r="4"></circle>
          </g>
        </g>
      </g>
    </svg>
  </Link>

  <Link to="/about">
    <p>About</p>
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <title>about-filled</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="drop" fill="#000000" transform="translate(42.666667, 42.666667)">
            <path
              d="M213.333333,3.55271368e-14 C331.154987,3.55271368e-14 426.666667,95.51168 426.666667,213.333333 C426.666667,331.153707 331.154987,426.666667 213.333333,426.666667 C95.51296,426.666667 3.55271368e-14,331.153707 3.55271368e-14,213.333333 C3.55271368e-14,95.51168 95.51296,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,320 C198.803333,320 186.666667,332.15696 186.666667,346.666667 C186.666667,361.196667 198.803333,373.333333 213.333333,373.333333 C227.84304,373.333333 240,361.196667 240,346.666667 C240,332.15696 227.84304,320 213.333333,320 Z M213.333333,106.666667 C204.84364,106.666667 197.333333,114.176973 197.333333,122.666667 L197.333333,277.333333 C197.333333,285.82304 204.84364,293.333333 213.333333,293.333333 C221.82304,293.333333 229.333333,285.82304 229.333333,277.333333 L229.333333,122.666667 C229.333333,114.176973 221.82304,106.666667 213.333333,106.666667 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </Link>
</nav>
        </div>
    </>
  );
}