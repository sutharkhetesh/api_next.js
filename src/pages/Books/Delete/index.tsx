import { useState } from 'react';
import styles from './delete.module.css';

export default function Books() {
  const [idToDelete, setIdToDelete] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/books/${idToDelete}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className={styles.add}>
      <h1>Delete Data</h1>
      <input className={styles.input}
        type="number"
        placeholder="Enter ID to delete"
        value={idToDelete}
        onChange={(e) => setIdToDelete(e.target.value)}
      />
      <button onClick={handleDelete} className={styles.btn} >Delete Data</button>
      {isDeleted && <p>Data has been deleted.</p>}
    </div>
  );
}



