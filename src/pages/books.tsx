
import { useEffect, useState } from "react";
import styles from "../styles/home.module.css"

export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "http://localhost:8000/Books";

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
    <div>
      <h1>Books</h1>
     <table className={styles.table}>
     <tr className={styles.table}>
        <th className={styles.table}>book.id</th>
        <th className={styles.table}>books_title</th> 
        <th className={styles.table}>library_name</th> 
        <th className={styles.table}>books_price</th>
     </tr>
        {userData.map((book) => (
          <tr className={styles.table} key={book.id}>
            <td className={styles.table} >{book.id}</td>
            <td className={styles.table} >{book.books_title}</td>
            <td className={styles.table} >{book.library_name}</td>
            <td className={styles.table} >{book.books_price}</td>

          </tr>
        ))}
      </table>
    </div>
  );
}
