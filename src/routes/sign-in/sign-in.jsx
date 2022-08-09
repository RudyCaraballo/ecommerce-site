import { signInWithGooglePopup, createUserDoc} from "../../util/firebase"
import SignUpForm from "./sign-up-form"

export default function SignIn(){

    const signIn = async() => {
        const {user} = await signInWithGooglePopup()
        const userDoc = createUserDoc(user)
    }

    return (
    <div>
        <h1>This is the sign in page</h1>
        <SignUpForm />
        <button onClick={signIn}>Sign in With Google</button>
    </div>
    )

}