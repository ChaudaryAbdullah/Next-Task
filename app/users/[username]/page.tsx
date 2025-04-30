"use client";
// PART 1
// interface UserPageProps {
//   params: {
//     username: string;
//   };
// }

// export default function UserPage({ params }: UserPageProps) {
//   return (
//     <main className="flex min-h-screen items-center justify-center p-12">
//       <h1 className="text-3xl font-bold">Hello, {params.username}</h1>
//     </main>
//   );
// }

//PART 2
// import { useEffect, useState } from "react";

// interface UserPageProps {
//   params: {
//     username: string;
//   };
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// }

// export default function UserPage({ params }: UserPageProps) {
//   const { username } = params;
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users/3"
//         );
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return (
//       <main className="flex min-h-screen items-center justify-center">
//         <p className="text-white">Loading user data...</p>
//       </main>
//     );
//   }

//   if (!user) {
//     return (
//       <main className="flex min-h-screen items-center justify-center">
//         <p className="text-white">User not found.</p>
//       </main>
//     );
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-900 text-white">
//       <h1 className="text-4xl font-bold mb-4">Profile: {username}</h1>
//       <div className="text-lg bg-black text-white p-6 rounded shadow-md w-full max-w-md space-y-2">
//         <p>
//           <strong>Name:</strong> {user.name}
//         </p>
//         <p>
//           <strong>Username:</strong> {user.username}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {user.phone}
//         </p>
//         <p>
//           <strong>Website:</strong> {user.website}
//         </p>
//       </div>
//     </main>
//   );
// }

// PART 3
"use client";

import useSWR from "swr";

interface UserPageProps {
  params: {
    username: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Fetch function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserPage({ params }: UserPageProps) {
  const { username } = params;

  // Fetch user data using SWR
  const { data, error } = useSWR<User>(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-white">Error fetching user data.</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-white">Loading user data...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Profile: {username}</h1>
      <div className="text-lg bg-black text-white p-6 rounded shadow-md w-full max-w-md space-y-2">
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Username:</strong> {data.username}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <p>
          <strong>Website:</strong> {data.website}
        </p>
      </div>
    </main>
  );
}
