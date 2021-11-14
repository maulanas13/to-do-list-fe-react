import { useState } from 'react';
import "./styles/VerifyEmailPage.css";
import {Redirect, useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import afterEmailVerified from '../../redux/actions/AfterVerifiedAction';
import API_URL from '../../helpers/ApiUrl';

function VerifyEmailPage() {
    const [verifFail, setVerifFail] = useState(null);
    console.log(verifFail);
    const [redirectStat, setRedirectStat] = useState(null);

    const dispatch = useDispatch();

    const {tokenEmailVerif} = useParams();

    const emailVerifyProcess = async () => {
        try {
            const res = await axios.get(`${API_URL}/auth/verify`, {headers: { "Authorization": `Bearer ${tokenEmailVerif}`} });
            console.log("Kirim backend bisa");
            dispatch(afterEmailVerified(res.data)); // Ini klo gagal ternyata bs masuk catch
            console.log("Lewatin dispatch");
            setVerifFail(false);
            console.log("Lewatin setVerif");
            setTimeout(() => {
                setRedirectStat(true);
            }, 3000);
        } catch (error) {
            console.log(error);
            setVerifFail(true);
            console.log("Lewatin setVerif gagal");
            setTimeout(() => {
                setRedirectStat(true);
            }, 3000);
        };
    };

    const triggerVerif = () => {
        setTimeout(() => {
            emailVerifyProcess();
        }, 1750);
    }

    const renderVerifDefault = () => {
        return (
            <>
                <h1>Verification on progress, please wait</h1>
                <h3>Loading...</h3>
            </>
        )
    };

    const renderVerifSucces = () => {
        return (
            <>
                <h1>Congratulation, your account has been verified!</h1>
                <h2>Please wait, we will take you to dashboard</h2>
                <h3>Loading...</h3>
            </>
        )
    };

    const renderVerifFail = () => {
        return (
            <>
                <h1>Verification failed/expired!</h1>
                <h2>Please try again, the page will redirect</h2>
                <h3>Loading...</h3>
            </>
        )
    }

    // const renderProgressVerif = () => {
    //     if (verifFail) { // Klo verifikasi gagal
    //         return (
    //             <>
    //                 <h1>Verification failed/expired!</h1>
    //                 <h2>Please try again, the page will redirect...</h2>
    //             </>
    //         )
    //     } else if (verifFail === false) { // Klo verifikasi berhasil
    //         return (
    //             <>
    //                 <h1>Congratulation, your account has been verified!</h1>
    //                 <h2>Please wait, we will take you to dashboard...</h2>
    //             </>
    //         )
    //     } else { // Render awal
    //         return (
    //             <>
    //                 <h1>Verification on progress, please wait...</h1>
    //             </>
    //         )
    //     }
    // };
    
    return (
        <>
            {
                verifFail === null ?
                triggerVerif()
                :
                null
            }
            <div className="verif-email-main-wrap">
                <div className="verif-email-sub-wrap">
                    {
                        verifFail ? // Klo verifikasi gagal
                        renderVerifFail()
                        :
                        verifFail === false ? // Klo verifikasi berhasil
                        renderVerifSucces()
                        :
                        renderVerifDefault() // Render awal
                    }
                </div>
            </div>
            {
                (verifFail && redirectStat) ? // Klo verifikasi gagal
                <Redirect to="/register" />
                :
                (verifFail === false && redirectStat) ? // Klo verifikasi berhasil
                <Redirect to="/calendar" />
                :
                null // Render awal
            }
        </>
    )
}

export default VerifyEmailPage;