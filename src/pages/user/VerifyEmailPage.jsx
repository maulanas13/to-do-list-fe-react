import { useState, useEffect } from 'react';
import "./styles/VerifyEmailPage.css";
import {Redirect, useParams} from "react-router-dom";
import axios from "axios";
// import {errorToast, successToast} from "../redux/actions";

function VerifyEmailPage() {
    const [redirectLoad, setRedirectLoad] = useState(false);

    const {tokenEmailVerif} = useParams();

    const emailVerifyProcess = async () => {
        try {
            const res = await axios.get(`http://localhost:5010/auth/verify`, {headers: { "Authorization": `Bearer ${tokenEmailVerif}`} });
            console.log("ini:", res.headers["x-token-access"]);
            console.log(res.data);
        } catch (error) {
            console.log("Masuk error:", error);
        }
    }

    useEffect(() => {
        emailVerifyProcess();
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setRedirectLoad(true);
    //     }, 5000)
    // }, []);

    return (
        <>
            <div className="verif-email-main-wrap">
                <div className="verif-email-sub-wrap">
                    {/* <h1>Congratulation! Your email account is verified!</h1> */}
                    <h2>Please wait, we will redirect you to dashboard...</h2>
                </div>
            </div>
            {/* {redirectLoad ? <Redirect to="/register" /> : null} */}
        </>
    )
}

export default VerifyEmailPage;