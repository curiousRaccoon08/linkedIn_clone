import { auth, provider } from "../firebase";

export function singInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then((payload) => {
                console.log(payload);
            })
            .catch((error) => alert(error.message));
    };
}
