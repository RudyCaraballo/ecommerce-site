import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"

export default function SignIn(){

    return (
        //TODO properly test google sign in form to make sure using it as  component still works as intended
    <div>
        <h1>This is the sign in page</h1>
        <SignUpForm /> 
        <SignInForm />
    </div>
    )

}