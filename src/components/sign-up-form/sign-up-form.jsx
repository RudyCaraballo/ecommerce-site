import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDoc,
} from "../../util/firebase";
import { updateProfile } from "firebase/auth";
import FormInput from "../../form-input/form-input-component";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFeilds] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      //TODO needs error handling. Firebase checks weak passwords and emails already in use by other accounts
      try{
          const { user } = await createUserAuthWithEmailAndPassword(
            email,
            password
          );
          await updateProfile(user, { displayName: username });
          const returnValue = await createUserDoc(user);
          console.log(returnValue);
          setFormFeilds(defaultFormFields);

      } catch(error) {
        console.log(error.code) 
      }
    } else {
      alert("Passwords don't match");
    }
  };

  console.log(formFields);
  return (
    <div>
      <h3>I Do Not Have An Account</h3>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Username"
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
          required
        />

        
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          minLength="5"
          required
        />

        
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          minLength="5"
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
