import './header.css'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/Images/logo-1.jpg'



const Header=(()=>{
  const navigate = useNavigate()
    return(
        <> 
            <div className='header-section'>
                   <div className='logo-section' onClick={()=>{navigate('/')}}>
                        <img src={logo1} alt='logo1'/>
                   </div>
                   <div className='nav-section'>
                        <div className='nav-sub-section'>
                          
                          <p>Tract&pay</p>
                        </div>
                        <div className='nav-sub-section' onClick={()=>{navigate('/blogs')}}>
                        
                          <p>Blogs</p>
                        </div>
                        <div className='nav-sub-section'>
                         
                          <p>Services</p>
                        </div>
                        {/* <div className='nav-sub-section'>
                         
                          <p>Lubricants</p>
                        </div> */}
                        <div className='nav-sub-section' onClick={()=>{navigate('/insurance')}}>
                         
                          <p>Insurance claims</p>
                        </div>
                         <button className='login-button' onClick={()=>{navigate('/login')}}>Log in</button>
                   </div>
            </div>
        </>
    )
})
export default Header



