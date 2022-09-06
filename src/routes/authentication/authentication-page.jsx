import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form"
import './authentication.scss'

export default function Authentication(){
    //TODO: too big on the page needs to be fixed in stylesheet
    return (
    <div className="authentication-container">
        <SignUpForm /> 
        <SignInForm />
    </div>
    )

}