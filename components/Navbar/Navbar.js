import { useSession, signIn, signOut } from "next-auth/react"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/outboxedu logo.png";
import { FaBars } from "react-icons/fa";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";


const Bars = withStyles({
  root: {
    width: "70px",
    height: "70px",
    // display: "none",
    // ["@media (max-width: 650px)"]: {
    //   display: "block",
    //   position: "absolute",
    //   right: "0",
    //   top: "0",
    // },
  },
})((props) => <MenuIcon {...props} />);



export default function Component() {
  const { data: session } = useSession()
  const [showlinks, setShowlinks] = useState(false);

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }


  if (session) {
    return (
      <>
        


        <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <div className={styles.brand}>
              <Image src={logo} width={90} height={90} alt="edu logo" />
            </div>
          </a>
        </Link>
        <button>
          <Bars onClick={() => setShowlinks(!showlinks)} />
        </button>
        <ul
          className={`${styles.links} ${showlinks ? `${styles.hidden}` : ""}`}
        >
<li className={styles.navlink} >
            <Link href="/job" passHref={true}>
           <a class="text-decoration-none">Jobs</a>
            </Link>
          </li>

          <li className={styles.navlink}>
            <Link href="/profileCreation" passHref={true}>
             <a class="text-decoration-none"> Create profile</a>
            </Link>
          </li>
          <li className={`${styles.navlink}`}>
            <Link href="/allprofiles" passHref={true}>
             <a class="text-decoration-none"> All profiles</a>
            </Link>
          </li>
       
          {/* <li className={`${styles.navlink}`}>
            <Link href="/" passHref={true}>
              Signout
            </Link>
          </li> */}

          <li className={`${styles.navlink}`} onClick={toggle}>
          {session.user.name} 
          <div className = {styles.navImage}>
          <img src={session.user.image} className = {styles.img}/>
          </div>
          <br />
        <button onClick={() => signOut()}>Sign out</button>
          </li>
        </ul>
      </nav>
      <div
        style={{ display: showMe ? "block" : "none" }}
        className={styles.menu}
      >
        <span className={styles.menuitem}>
          <Link href="/profile">
          <a className='nav-link my-0 text-white' activeclassname='activeLink'>
            View Profile
            </a>
            </Link>
        </span>
        <span className={styles.menuitem}>
          <Link href="/">
          <a className='nav-link my-0 text-white' activeclassname='activeLink'>
          Sign out
            </a>
            </Link>
        </span>
      </div>


      </>
    )
  }
  return (
    <>

      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <div className={styles.brand}>
              <Image src={logo} width={90} height={90} alt="edu logo" />
            </div>
          </a>
        </Link>
        <button>
          <Bars onClick={() => setShowlinks(!showlinks)} />
        </button>
        <ul
          className={`${styles.links} ${showlinks ? `${styles.hidden}` : ""}`}
        >
<li className={styles.navlink}>
            <Link href="/job" passHref={true}>
              Jobs
            </Link>
          </li>

          <li className={styles.navlink}>
            <Link href="/profile" passHref={true}>
              Create profile
            </Link>
          </li>
          <li className={`${styles.navlink}`}>
            <Link href="/allprofiles" passHref={true}>
              All profiles
            </Link>
          </li>
       
          <li className={`${styles.navlink}`}>
            <Link href="/" passHref={true}>
              Signup
            </Link>
          </li>
        </ul>
      </nav>


    </>
  )
}