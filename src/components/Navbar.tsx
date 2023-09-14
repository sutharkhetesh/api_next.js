
import styles from "../styles/home.module.css"

const Navbar = () => {
  return <>
    <nav>
      <ul className={styles.menubar}>
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/author">Authors</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </>
};
export default Navbar;