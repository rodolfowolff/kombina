import { useContext } from "react";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

import Search from "./Search";

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        <Link href='/'>
          <a>Kombinas</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>

          { user ?
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Events</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  className='btn-secondary btn-icon'
                  onClick={ () => logout() }
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </li>
            </>
            :
            <>
              <li>
                <Link href="/account/register">
                  <a>Register</a>
                </Link>
              </li>
              <li>
                <Link href="/account/login">
                  <a className='btn-secondary'>
                    <FaSignInAlt />
                    Login
                  </a>
                </Link>
              </li>
            </>
          }
        </ul>
      </nav>

    </header>
  );
}
