import image from '../../src/assets/images/login/login.svg'
import { FaSquareFacebook ,FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../../firebase.config';

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password, name)

          // creating user through form 
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            alert(" user created successfullly ")
        })
        .catch(error => {
            console.log(error.message)
        })

        updateProfile(auth.currentUser, {
            displayName: name
        }) .then()
        .catch(error => console.log(error.message))
        
    }

    // google 
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin =() =>{
        signInWithPopup( auth , googleProvider )
        .then( () => {
            alert('successfully logged in')
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className="flex justify-around items-center my-16">
            <div>
                <img src={image} alt="" />
            </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
        <h1 className='text-center pt-5 font-bold text-3xl'>Sign Up</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="name -text"> Name </span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="email-text"> Email </span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button  className="btn bg-[#FF3811] text-white hover:text-black">Sign Up</button>
        </div>
        <p className="text-center mt-2">Or Sign in with</p>
        <div className='flex justify-center space-x-5 mt-2'>
        <FaSquareFacebook  className='text-xl cursor-pointer hover:shadow-lg ' /> <FaGoogle onClick={handleGoogleLogin} className='text-xl cursor-pointer hover:shadow-lg ' /> <FaLinkedinIn className='text-xl cursor-pointer hover:shadow-lg ' />
        </div>
        <p className='text-center my-3'>Already Have an account? <Link className='text-[#FF3811] font-bold ' to='/login'>Sign in</Link> </p>
      </form>
    </div>
</div>
    );
};

export default Signup;