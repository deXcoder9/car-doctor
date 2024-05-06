import image from "../../src/assets/images/login/login.svg";
import { FaSquareFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase.config";
import { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(AuthContext);
   const location = useLocation()
   const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result);
      setUser(result.user);
      alert("user logged in successfullly");
      const userInfo = {email}
      // get access token
      axios.post('http://localhost:5000/jwt', userInfo, {withCredentials: true})
      .then(res=> {
        console.log(res.data)
        if(res.data.success){
          navigate( location?.state ? location.state : '/' )
        }
      })
    });
  };
  // google login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        alert("successfully logged in");
        setUser(result.user);
        console.log(result.user)
        navigate( location?.state ? location.state : '/' )
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-around items-center my-16">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-center pt-5 font-bold text-3xl">Login</h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="email-text"> Email </span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF3811] text-white hover:text-black">
              Login
            </button>
          </div>
          <p className="text-center mt-2">Or Sign in with</p>
          <div className="flex justify-center space-x-5 mt-2">
            <FaSquareFacebook className="text-xl cursor-pointer hover:shadow-lg " />{" "}
            <FaGoogle
              onClick={handleGoogleLogin}
              className="text-xl cursor-pointer hover:shadow-lg "
            />{" "}
            <FaLinkedinIn className="text-xl cursor-pointer hover:shadow-lg " />
          </div>
          <p className="text-center my-3">
            Do not have an account?{" "}
            <Link className="text-[#FF3811] font-bold " to="/signup">
              Sign up
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
