
import { Link } from "react-router-dom"
import Button from "./Button"

const Header = () =>{
    return(
        <> <nav className="navbar container pt-3 pb-3">
            <Link className="navbar-brand text-light"  to={'/'}>Stock Prediction</Link>

            <div>
                <Button text='Login' class='btn-info' url="/login"/>
                &nbsp;
                <Button text='Register' class='btn-outline-info' url="/register" />
            </div>
        </nav>

        
        </>
    )
}

export default Header