import styles from "./post.module.css";
import { useState } from "react";

type book = {
  id: number;
  books_title: string;
  library_name: string;
  books_price: number;
};

export default function Books() {
  const [books_title, setBooksTitle] = useState("");
  const [library_name, setLibraryName] = useState("");
  const [books_price, setBooksPrice] = useState<number | string>("");
  const books_status = false;
 

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ books_title, library_name, books_price, books_status }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear the input fields
      // setBooksTitle("");
      // setLibraryName("");
      // setBooksPrice();
    } catch (error) {
      console.error("Error posting data:", error);
    }
    window.location.reload()
  };

  return (
    <div className={styles.add}>
      <h1>Add New Data</h1>
      <input
        className={styles.input}
        value={books_title}
        type="text"
        onChange={(e) => setBooksTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className={styles.input}
        value={library_name}
        type="text"
        onChange={(e) => setLibraryName(e.target.value)}
        placeholder="Library Name"
      />
      <input
        className={styles.input}
        value={books_price}
        type="number"
        onChange={(e) => setBooksPrice(e.target.valueAsNumber)}
        placeholder="Price"
      />
      <button className={styles.btn} onClick={handleSubmit}>
        Submit
      </button>
     
    </div>
  );
}
