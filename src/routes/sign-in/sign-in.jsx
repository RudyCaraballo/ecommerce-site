import { signInWithGooglePopup, createUserDoc} from "../../util/firebase"

export default function SignIn(){

    const signIn = async() => {
        const {user} = await signInWithGooglePopup()
        const userDoc = createUserDoc(user)
    }

    return (
    <div>
        <h1>This is the sign in page</h1>
        <button onClick={signIn}>Sign in With Google</button>
    </div>
    )

}