import "./sign-in-and-sign-up.style.css";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up panel centered">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUp;
