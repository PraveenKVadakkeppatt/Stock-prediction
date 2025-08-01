
import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import { AuthContext } from "../AuthProvider"
import { useContext } from "react"
const Header = () =>{
    const {isLogedIn, setLogedIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout =()=>{
        localStorage.removeItem('accessToken'),
        localStorage.removeItem('refreshToken'),
        setLogedIn(false)
        navigate('/login')
    }

    return(
        <> <nav className="navbar container pt-3 pb-3">
            <Link className="navbar-brand text-light"  to={'/'}>Stock Prediction</Link>

            <div>
                {isLogedIn ?(
                    <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
                )
                :(
                    <>
                        <Button text='Login' class='btn-info' url="/login"/>
                            &nbsp;
                        <Button text='Register' class='btn-outline-info' url="/register" />
                    </>
                )
            }
                
            </div>
        </nav>

        
        </>
    )
}

export default Header