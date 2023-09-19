
import Image from "next/image"
import Navbar from "../components/Navbar"
import images from "./image/img1.jpg"
import styles from "../styles/home.module.css"


export default function Home() {
  return (
    <>

      <Navbar />
      <Image className={styles.image} src={images} alt="img" />
      
      <footer className={styles.text}>
        <div className={styles.footer}>
          <div className={styles.contain}>
            <div className={styles.col}>
              <h2>Company</h2>
              <ul>
                <li>About us</li>
                <li> Our Mission</li>
                <li>Services</li>
              </ul>
            </div>
            <div className={styles.col}>
              <h2>Products</h2>
              <ul>
                <li>SEO</li>
                <li>Content Development</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            <div className={styles.col}>
              <h2>Team</h2>
              <ul>
                <li>HR Team</li>
                <li>Finance Team</li>
                <li>Content Team</li>
              </ul>
            </div>
            <div className={styles.col}>
              <h2>Resources</h2>
              <ul>
                <li>Webmail</li>
                <li>Web templates</li>y
                
                <li>Email templates</li>
              </ul>
            </div>
            <div className={styles.col}>
              <h2>Contact</h2>
              <ul>
                <li>+91 9051 XXXXXX</li>
                <li>033 2464 XXXX</li>
                <li>abc@gmail.com</li>
              </ul>
            </div>

            <div className={styles.clearfix}></div>
          </div>
        </div>
      </footer>

    </>

  )
}

