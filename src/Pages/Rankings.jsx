// Supabase
import supabase from "../supabase";

// Hooks
import { useEffect, useState } from "react";

const Rankings = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data, error } = await supabase.from("scores").select("*");

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      const sortedUser = data.sort((userA, userB) => userB.score - userA.score);
      setUsers(sortedUser);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-full p-5">
      <ul>
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="flex items-center justify-between w-full bg-gray-200 p-2 rounded-lg mb-4"
            >
              <div>
                <h1 className="text-2xl">{user.fullname}</h1>
                <p>{user.username}</p>
              </div>
              <h1 className="text-lg">{user.score}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rankings;
