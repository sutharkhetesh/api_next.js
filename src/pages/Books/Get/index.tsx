// import { useEffect, useState } from "react";
// import styles from "./get.module.css";
// import { type } from "os";

// type book = {
//     id: number;
//     books_title: string;
//     library_name: string;
//     books_price: number;
// }

// export default function Home() {
//     const [userData, setUserData] = useState<book[]>([]);

//     useEffect(() => {
//         // Define the API endpoint URL
//         const apiUrl = "http://localhost:8000/Books";

//         // Fetch data from the API
//         fetch(apiUrl)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 // Set the fetched data in the state
//                 setUserData(data);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     return (
//         <div>
//             <h1 className={styles.head}>Books Details (Get Data)</h1>
//             <table className={styles.table}>
//                 <thead >
//                     <tr>
//                         <th >ID</th>
//                         <th>Title</th>
//                         <th>Library Name</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {userData.map((book) => (
//                         <tr key={book.id}>
//                             <td>{book.id}</td>
//                             <td>{book.books_title}</td>
//                             <td>{book.library_name}</td>
//                             <td>{book.books_price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// scraping data show

import { useEffect, useState } from "react";
import styles from "./get.module.css";
import { type } from "os";

type book = {
    id: number;
    title: string;
    price: string;
    author: string;
    condition: string;
    image: string;

}


export default function Home() {
    const [userData, setUserData] = useState<book[]>([]);

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

    function deleteBook(id: number): void {
        fetch(`http://localhost:8000/show/${id}`, {
            method: 'DELETE',
        }).then(() => {
            alert('Book deleted successfully')
            window.location.reload();
        }).catch((error) => {
            console.error('Error:', error);
            alert('Error deleting book')
        });
    }

    return (
        <div>
            <h1 className={styles.head}>Books Details (Get Data)</h1>
            <table className={styles.table}>
                <thead >
                    <tr>
                        <th >ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Author</th>
                        <th>Condition</th>
                        <th>Image</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {userData.map((book, index) => (
                        <tr key={book.id}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                            <td>{book.author}</td>
                            <td>{book.condition}</td>
                            <td>{book.image}</td>
                            <td><button className={styles.button} onClick={()=>deleteBook(book.id)}>Delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
