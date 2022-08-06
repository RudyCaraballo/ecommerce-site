import { signInWithGooglePopup } from "../../util/firebase"

export default function SignIn(){

    const signIn = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
    <div>
        <h1>This is the sign in page</h1>
        <button onClick={signIn}>Sign in With Google</button>
    </div>
    )

}