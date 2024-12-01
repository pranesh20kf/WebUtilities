import React, { useEffect, useState } from 'react'

const API = "https://fakestoreapi.com/products";

export default function Table() {
    const [users, setUsers] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    const fetchUsers = async (url) => {                                 //asyns await for promices api get promices
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);            //data shows in array so its easy to show arry data in dynamic way using setusers by using map function
            }
            console.log(data);

        } catch (e) {                                     //try and catch use for if any error get 
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);                                               //passing the API as an argument
    }, [])            //Effect and depend

    const sortByPrice = () => {
        const sortedUsers = [...users].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.price - b.price; // Ascending order
            } else {
                return b.price - a.price; // Descending order
            }
        });
        setUsers(sortedUsers);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
    };

    return (
        <>
            {users.length > 0 ? (
                <table>
                    <thead>
                        <th className="border border-gray-400 p-2">ID</th>
                        <th className="border border-gray-400 p-2">Title</th>
                        <th
                            className="border border-gray-400 p-2 cursor-pointer"
                            onClick={sortByPrice}
                        >
                            Price
                            <span className="ml-2">
                                {sortOrder === "asc" ? "↑" : "↓"}
                            </span>
                        </th>
                        <th className="border border-gray-400 p-2">Description</th>
                        <th className="border border-gray-400 p-2">Category</th>
                        <th className="border border-gray-400 p-2">Rating</th>
                    </thead>
                    <tbody>
                        {users.map((users) => (                                            //map function
                            <tr key={users.id} className="bg-white">
                                <td className="border border-gray-400 p-2">{users.id}</td>
                                <td className="border border-gray-400 p-2">{users.title}</td>       {/*abc*/}
                                <td className="border border-gray-400 p-2">{users.price}</td>
                                <td className="border border-gray-400 p-2">{users.description}</td>
                                <td className="border border-gray-400 p-2">{users.category}</td>
                                <td className="border border-gray-400 p-2">{users.rating.rate} ({users.rating.count} reviews)</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            ) : (
                <p>Loading users...</p>
            )}
        </>
    )
}
