import GoogleSignInButton from "../../components/buttons/google-btn"
import SignUpForm from "./sign-up-form"

export default function SignIn(){

    return (
        //TODO properly test google sign in form to make sure using it as  component still works as intended
    <div>
        <h1>This is the sign in page</h1>
        <SignUpForm /> 
        <GoogleSignInButton />
    </div>
    )

}