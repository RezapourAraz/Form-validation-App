import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../Styles/Login.module.css"

import { validate } from './validate';
import { notify } from './toast';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [data, setData] = useState ({
        email: "",
        password: "",
    })

    const [errors, setError] = useState ({});
    const [touched, setThouched] = useState ({});

    const submitHandler = event => {
        event.preventDefault();

        if (!Object.keys(errors).length) {
            notify("You Loged In Successfully", "success");
        } else {
            notify("Invalid data!", "error");
            setThouched ({
                email: true,
                password: true,
                
            })
        }
    }

    useEffect(() => {
        setError(validate(data, "login"))
    }, [data, touched])

    const focusHandler = event => {
        setThouched ({...touched, [event.target.name]: true})
    }

    const changeHandler = event => {
            setData ({...data, [event.target.name]: event.target.value });

    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} >
                <h1 className={styles.header}>Signup</h1>
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
                
                <div className={styles.formButtons}>
                    <Link to="/signup" >Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};


export default LogIn;