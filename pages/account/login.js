import { useState, useEffect, useContext } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";

import styles from "@/styles/AuthForm.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <Layout title='User Login'>
        <div className={ styles.auth }>
          <h1>
            <FaUser />
            Log in
          </h1>
          <ToastContainer />
          <form onSubmit={ handleSubmit }>
            <div>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                id='email'
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
              />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
              />
            </div>

            <input type='submit' value='Login' className='btn' />

            <p>Dont't have an account?
              <Link href='/account/register'>
                Register
              </Link>
            </p>
          </form>
        </div>
      </Layout>
    </div>
  );
}