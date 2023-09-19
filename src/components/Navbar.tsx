import Link from "next/link";
import styles from "../styles/home.module.css"

const Navbar = () => {
  return <>
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
      <li><Link href="#">LOGO</Link></li>
        <li><Link href="#">Dashboard</Link></li>
        <li>
          <Link href="#">Books</Link>
          <ul>
            <li><Link href="Books/Get">Available Books</Link></li>
            <li><Link href="Books/Post">Add Books</Link></li>
            <li><Link href="Books/Delete">Remove Books</Link></li>
            <li><Link href="Books/Update">Replace Books</Link></li>
          </ul>
        </li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>

   
  </>
};
export default Navbar;