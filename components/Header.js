import Link from "next/link";
import Search from "./Search";

import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        <Link href='/'>
          <a>KombinasEvents</a>
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
          <li>
            <Link href="/events/add">
              <a>Add Events</a>
            </Link>
          </li>
          <li>
            <Link href="/account/login">
              <a className='btn-secondary'>
                <FaSignInAlt />Login</a>
            </Link>
          </li>
          <li>
            <Link href="/account/register">
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
