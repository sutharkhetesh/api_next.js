import Link from "next/link";
import styles from "../styles/home.module.css"

const Navbar = () => {
  return <>
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
      <li><Link href="#">LOGO</Link></li>
        <li><Link href="#">Home</Link></li>
        <li>
          <Link href="#">Books</Link>
          <ul>
            <li><Link href="Books/Get">Get Data</Link></li>
            <li><Link href="Books/Post">Post Data</Link></li>
            <li><Link href="Books/Delete">Delete Data</Link></li>
            <li><Link href="Books/Update">Patch Data</Link></li>
          </ul>
        </li>
        <li><Link href="#">Author</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>

   
  </>
};
export default Navbar;