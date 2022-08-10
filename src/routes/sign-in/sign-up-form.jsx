import { useState } from "react";
import {
  createUserAuthWithEmailAndPassword,
  createUserDoc,
} from "../../util/firebase";
import { updateProfile } from "firebase/auth";

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
      <h3>Sign up with your email and password</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          minlength="5"
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          minlength="5"
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
