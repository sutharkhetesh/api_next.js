// import styles from "./post.module.css";
// import { useState } from "react";

// type book = {
//   id: number;
//   books_title: string;
//   library_name: string;
//   books_price: number;
// };

// export default function Books() {
//   const [books_title, setBooksTitle] = useState("");
//   const [library_name, setLibraryName] = useState("");
//   const [books_price, setBooksPrice] = useState<number | string>("");
//   const books_status = false;

//   const isButtonDisabled = !books_title || !library_name || books_price === "";

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/books", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ books_title, library_name, books_price, books_status }),
//       });

//       if (!response.ok) {
//         alert("Network response was not ok");
//       }
//       else{
//         alert("Data has been added")
//       }

//       // Clear the input fields
//       // setBooksTitle("");
//       // setLibraryName("");
//       // setBooksPrice();
//     } catch (error) {
//       console.error("Error posting data:", error);
//     }
//     window.location.reload()
//   };

//   return (
//     <div className={styles.add}>
//       <h1>Add New Data</h1>
//       <input
//         className={styles.input}
//         value={books_title}

//         type="text"
//         onChange={(e) => setBooksTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         className={styles.input}
//         value={library_name}
//         type="text"
//         onChange={(e) => setLibraryName(e.target.value)}
//         placeholder="Library Name"
//       />
//       <input
//         className={styles.input}
//         value={books_price}
//         type="number"
//         onChange={(e) => setBooksPrice(e.target.valueAsNumber)}
//         placeholder="Price"
//       />
//       <button className={styles.btn} onClick={handleSubmit} disabled={isButtonDisabled}>
//       Create Data
//       </button>

//     </div>
//   );
// }

import Author from "@/pages/author";
import styles from "./post.module.css";
import { useState } from "react";

type book_show = {
  id: number;
  title: string;
  author: string;
  price: string;
  condition: string;
  image: string;
};

export default function Books() {
  const [title, setBooksTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setBooksPrice] = useState<number | string>("");
  const [condition, setCondition] = useState("");
   const [image, setImage] = useState("");


  const isButtonDisabled = !title || !author || !condition || !image || price === "";

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/show", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, price, condition, image }),
      });

      if (!response.ok) {
        alert("Network response was not ok");
      }
      else {
        alert("Data has been added")
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
        value={title}

        type="text"
        onChange={(e) => setBooksTitle(e.target.value)}
        placeholder="Books Title"
      />
      <input
        className={styles.input}
        value={author}
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author Name"
      />
      <input
        className={styles.input}
        value={price}
        type="text"
        onChange={(e) => setBooksPrice(e.target.value)}
        placeholder="Books Price"
      />
      <input
        className={styles.input}
        value={condition}
        type="text"
        onChange={(e) => setCondition(e.target.value)}
        placeholder="Books Condition"
      />
       <input
        className={styles.input}
        value={image}
        type="text"
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image Path"
      />
      <button className={styles.btn} onClick={handleSubmit} disabled={isButtonDisabled}>
        Create Data
      </button>

    </div>
  );
}





