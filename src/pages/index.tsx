
import Image from "next/image"
import Navbar from "../components/Navbar"
import image1 from "./image/ima2.png"
import image2 from "./image/img3.png"
import image3 from "./image/img4.png"


import styles from "../styles/home.module.css"
import ActionAreaCard from "@/components/Card"
import { useEffect, useState } from "react"


export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "http://localhost:8000/show";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in the state
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



  return (
    <>

      <Navbar />
      <Image className={styles.image} src={image1} alt="img" />


      <div className="new">

        <h1 className={styles.bio}>New Release Books</h1>
      </div>
      <div className={styles.cards} >
        {userData.map((book, index) => (
          <ActionAreaCard key={index} id={book.id} price={book.price} author={book.author} title={book.title} condition={book.condition} image={book.image} />
        ))
        }
      </div>
      <Image className={styles.image} src={image2} alt="img" />
      <Image className={styles.image} src={image3} alt="img" />
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
                <li>Web templates</li>
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

