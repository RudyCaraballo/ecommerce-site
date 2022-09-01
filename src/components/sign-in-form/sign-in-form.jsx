import GoogleSignInButton from "../buttons/google-btn";
import FormInput from "../../form-input/form-input-component";
import Button from "../buttons/button";

export default function SignInForm() {

  const handleChange = async() => {
    console.log("Sign In")
  }

  return (
    <div>
      <h1>I Already Have An Account</h1>
      <form>
      {/* <FormInput
          label="Username"
          type="text"
          name="username"
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          required
        /> */}
      </form>
      <p>Sign in with google</p>
      <GoogleSignInButton />
      <button>Sign in with email</button>
    </div>
  );
}
