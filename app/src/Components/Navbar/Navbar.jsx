import { NavLink } from "react-router-dom";
import { useContext } from "react";
import {AppContext} from '../../App';
export default function Navbar() {

  const {addToCard} = useContext(AppContext);
  return (
    <div className="navbar">
        <div>
            <h4>Navbar</h4>
        </div>

        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>

        <div>
            <p>{addToCard} 
              <NavLink to='/basket'>Basket</NavLink>
            </p>
        </div>
    </div>
  )
}
