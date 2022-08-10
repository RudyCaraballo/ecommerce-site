import { useState } from "react";
import { createUserAuthWithEmailAndPassword, createUserDoc} from "../../util/firebase";

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
            const {user} = await createUserAuthWithEmailAndPassword(email, password);
            const returnValue = await createUserDoc(user);
            console.log(returnValue);
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
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
