import { signInWithGooglePopup, createUserDoc } from "../../util/firebase"


export default function GoogleSignInButton() {
    const signIn = async() => {
        const {user} = await signInWithGooglePopup()
        const userDoc = createUserDoc(user)
    }

    return (
        <button onClick={signIn}>Sign in With Google</button>
    )
}