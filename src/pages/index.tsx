
import Image from "next/image"
import Navbar from "../components/Navbar"
import images from "./image/img1.jpg"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <Image className={styles.image} src={images} alt="img" />
    </>

  )
}

