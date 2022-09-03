// import GoogleSignInButton from "../buttons/google-btn";
import { useState } from "react";
import FormInput from "../../form-input/form-input-component";
import Button from "../buttons/button";

export default function SignInForm() {

  const defaultFormFeilds = {
    username: '',
    password: ''
  }

  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds)

  const {username, password} = formFeilds

  const handleChange = async(event) => {
    const {name, value} = event.target
    setFormFeilds({...formFeilds, [name]:value})
  }
  console.log(formFeilds);
  return (
    <div>
    <h2>I already have an account</h2>
    <span>Sign in wiht your email and password.</span>
      <form>
        <FormInput
        label="Username"
        type="text"
        name="username"
        value={username}
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
      <Button buttonType="google" type="submit">Sign In With Google</Button>

      </form>

      
    </div>
  ) 

  // const handleChange = async() => {
  //   console.log("You are attempting to sign in")
  // }

  // return (
  //   <div className="sign-in-container">
  //     <h1>I Already Have An Account</h1>
  //     <form onSubmit={handleChange}>
  //     </form>
  //     <button>Sign in with Google</button>
  //     <button>Sign in with email</button>
  //   </div>
  // );
}
