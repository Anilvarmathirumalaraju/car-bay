import { useNavigate } from 'react-router-dom'
import './login.css'

const Login=(()=>{
    const navigate = useNavigate()
    return(
        <>
            <div className="login-con">
                <h1>Login</h1>
                <div className='login-section'>
                    <div className='phoneemail'>
                        <label>Username</label>
                        <input placeholder='Enter Email / Phone no' className='phonenumberinput'/>
                        
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input placeholder='Enter your Password' className='passwordinput'/>
                        
                    </div>
                    <div className='login-button'>
                        <p onClick={()=>{navigate('/signup')}}>Create new account ?</p>
                        <button className='button'>
                            Login
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
})
export default Login