import { signInWithGooglePopup, createUserDoc } from "../../util/firebase"
import Button from "./button";


export default function GoogleSignInButton() {
    const signIn = async() => {
        const {user} = await signInWithGooglePopup()
        const userDoc = await createUserDoc(user)
        console.log(userDoc);
    }

    return (
        <Button buttonType="google" onClick={signIn}>Sign in with Google</Button>
    )
}