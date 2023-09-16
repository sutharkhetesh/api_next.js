
import styles from "../styles/home.module.css"

const Navbar = () => {
  return <>
    <nav className={styles.navbar}>
      <ul className={styles.nav}>
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Books</a>
          <ul>
            <li><a href="Books/Get">Get Data</a></li>
            <li><a href="Books/Post">Post Data</a></li>
            <li><a href="Books/Delete">Delete Data</a></li>
            <li><a href="Books/Update">Patch Data</a></li>
          </ul>
        </li>
        <li><a href="#">Author</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </>
};
export default Navbar;