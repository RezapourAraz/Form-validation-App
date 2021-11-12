import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Styles/SignUp.module.css"

import { validate } from './validate';
import { notify } from './toast';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState ({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setError] = useState ({});
    const [touched, setThouched] = useState ({});

    const submitHandler = event => {
        event.preventDefault();

        if (!Object.keys(errors).length) {
            notify("You Signed Up Successfully", "success");
        } else {
            notify("Invalid data!", "error");
            setThouched ({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    useEffect(() => {
        setError(validate(data, "signup"))
    }, [data, touched])

    const focusHandler = event => {
        setThouched ({...touched, [event.target.name]: true})
    }

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData ({...data, [event.target.name]: event.target.checked });
        } else {
            setData ({...data, [event.target.name]: event.target.value });
        }

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} >
                <h1 className={styles.header}>Signup</h1>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                    className={( errors.name && touched.name ) ? styles.uncompleted : styles.formInput}
                    type="text" 
                    name="name" 
                    value={data.name} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.name && touched.name && <span> {errors.name} </span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                    className={( errors.email && touched.email ) ? styles.uncompleted : styles.formInput}
                    type="email" 
                    name="email" 
                    value={data.email} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.email && touched.email && <span> {errors.email} </span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                    className={( errors.password && touched.password ) ? styles.uncompleted : styles.formInput}
                    type="password" 
                    name="password" 
                    value={data.password} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.password && touched.password && <span> {errors.password} </span>}
                </div>
                <div className={styles.formField}>
                    <label>confirm Password</label>
                    <input 
                    className={( errors.confirmPassword && touched.confirmPassword ) ? styles.uncompleted : styles.formInput}
                    type="Password" 
                    name="confirmPassword" 
                    value={data.confirmPassword} 
                    onChange={changeHandler} 
                    onFocus={focusHandler} 
                    />
                    {errors.confirmPassword && touched.confirmPassword && <span> {errors.confirmPassword} </span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I Accsept Terms of Privacy Policy</label>
                        <input 
                        type="checkbox" 
                        name="isAccepted" 
                        value={data.isAccepted} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span> {errors.isAccepted} </span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login" >Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};


export default SignUp;