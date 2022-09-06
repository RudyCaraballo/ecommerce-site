// import GoogleSignInButton from "../buttons/google-btn";
import { useState } from "react";
import FormInput from "../../form-input/form-input-component";
import Button from "../buttons/button";
import GoogleSignInButton from "../buttons/google-btn";
import './sign-in-form.scss'
import { signInWithEmailAndPasswordFunction } from "../../util/firebase";
import {auth}  from "../../util/firebase";

export default function SignInForm() {

  const defaultFormFeilds = {
    email: '',
    password: ''
  }

  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds)

  const {email, password} = formFeilds

  const handleChange = async(event) => {
    const {name, value} = event.target
    setFormFeilds({...formFeilds, [name]:value})
  }


  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      const response = await signInWithEmailAndPasswordFunction(auth, email, password)
      console.log(response);
      setFormFeilds(defaultFormFeilds)
    } catch(error) {

      switch(error.code) {
        case 'auth/wrong-password':
          alert('Invalid password entered, please try again')
          break
        case 'auth/user-not-found':
          alert('No user found associated with this email')
          break
        default:
          console.log(error);
      }
    }

  }
  
  // console.log(formFeilds);
  //TODO: google sign in button isn't seperated from the sign in button in the stylesheet for some reason...
  return (
    <div className="sign-in-container">
    <h2>Already have an account?</h2>
    <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
        label="Email"
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
        <FormInput
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <div className="buttons-container">
      <Button type="submit">Sign In</Button>
      {/* google button is type 'button' as by default it is type submit and will trigger the sign in action by default */}
      <GoogleSignInButton />
      </div>

      </form>

      
    </div>
  ) 

}
