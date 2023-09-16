import { useState } from 'react';
import styles from "./update.module.css";

export default function Books() {
  const [idToUpdate, setIdToUpdate] = useState("");
//   const [updatedData, setUpdatedData] = useState("");
  const [books_title, setBooksTitle] = useState("");
  const [library_name, setLibraryName] = useState("");
  const [books_price, setBooksPrice] = useState<number | string>("");
  const books_status = false;
  const [isUpdated, setIsUpdated] = useState(false);
  
  const isButtonDisabled = !books_title || !library_name || books_price === "";


  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8000/books/${idToUpdate}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToUpdate, books_title, library_name, books_price, books_status  }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsUpdated(true);
    } catch (error) {
      console.error("Error updating data:", error);
    }
    window.location.reload()
  };

  return (
    <div className={styles.add}>
      <h1>Update Data</h1>
      <input  className={styles.input}
        type="number"
        placeholder="Enter ID to update"
        value={idToUpdate}
        onChange={(e) => setIdToUpdate(e.target.value)}
      />
      {/* <input
        type="text"
        placeholder="Enter updated data"
        value={updatedData}
        onChange={(e) => setUpdatedData(e.target.value)}
      /> */}
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
      <button onClick={handleUpdate} className={styles.btn} disabled={isButtonDisabled}>Update Data</button>
      {isUpdated && <p>Data has been updated.</p>}
    </div>
  );
}
