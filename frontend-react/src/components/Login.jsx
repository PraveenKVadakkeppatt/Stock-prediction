import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../AuthProvider"



const Login = () =>{
    const [username, SetUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [success,setSuccess] = useState(false)
    const [errors,setErrors] = useState()
    const navigate = useNavigate();
    const {isLogedIn, setLogedIn} = useContext(AuthContext)

    const handleLogin = async (e) =>{
        e.preventDefault();
        setLoading(true)

        const userData = {
            username,password
        }
        console.log('userData==>',userData);
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
            localStorage.setItem('accessToken',response.data.access) 
            localStorage.setItem('refreshToken',response.data.refresh)
            console.log('Login Successfull')
            setSuccess(true)
            setLogedIn(true)
            navigate('/')
        }catch(error){
            console.error('Invalid Credentials')
            setErrors('Invalid Input')
        }finally{
            setLoading(false)
        }
    }
    return(


         <>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-6 bg-light-dark p-5 rounded">
                        <h3 className="text-light text-center mb-4">Login Here</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="User Name" value={username} onChange={(e) => SetUsername(e.target.value)}></input>

                            </div>

                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="User Password"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                                {errors && <div className='text-danger'> {errors} </div>}
                                {loading ?(
                                    <button type="submit" className="btn btn-info d-block mx-auto mb-4" disabled><FontAwesomeIcon icon={faSpinner} spin/>Loged in....</button>
                                ):(
                                    <button type="submit" className="btn btn-info d-block mx-auto mb-4">Login</button>
                                )} 
                        </form>
                    </div>

                </div>
            </div>       
        </>

    )
}

export default Login