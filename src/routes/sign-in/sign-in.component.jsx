import SignUpForm from "../../components/sign-up-form/sign-up-form.compent";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            Sign In Page
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;
