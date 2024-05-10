import Link from "next/link";
import React, { Suspense } from "react";

interface User {
  id: number;
  name: string;
}

const UserDetail = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <button className="bg-slate-400 p-4 rounded-lg">Users</button>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {users.map((user) => (
          <li key={user.id}>
            {/* <Link href={"/users?sortOrder=name"}>Name</Link> */}
            {user.name}
          </li>
        ))}
      </Suspense>
    </>
  );
};

export default UserDetail;
