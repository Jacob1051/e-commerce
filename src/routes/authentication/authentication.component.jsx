import SignInForm from "../../components/sign-in-form/sign-in-form.compent";
import SignUpForm from "../../components/sign-up-form/sign-up-form.compent";

import './authentication.styles.scss'

const Authentication = () => {
    return(
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;
