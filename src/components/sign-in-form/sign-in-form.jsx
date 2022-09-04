// import GoogleSignInButton from "../buttons/google-btn";
import { useState } from "react";
import FormInput from "../../form-input/form-input-component";
import Button from "../buttons/button";
import GoogleSignInButton from "../buttons/google-btn";
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
    const {user} = await signInWithEmailAndPasswordFunction(auth, email, password)
    console.log(user);
    setFormFeilds(defaultFormFeilds)

  }
  
  // console.log(formFeilds);
  return (
    <div>
    <h2>I already have an account</h2>
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
      <Button type="submit">Sign In</Button>
      <GoogleSignInButton />
      </form>

      
    </div>
  ) 

}
