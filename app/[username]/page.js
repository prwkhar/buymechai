"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const UserPage = () => {
  const { username } = useParams(); // dynamic route param
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState(session?.user?.email || "");

  useEffect(() => {
    if (session?.user?.email) {
      const fetchUser = async () => {
        try {
          const res = await fetch(`/api/user/${session.user.email}`);
          const data = await res.json();
          setUser(data);
        } catch (err) {
          console.error("Failed to fetch user", err);
        }
      };
  
      fetchUser();
    }
  }, [session]);

  const handleDonate = async () => {
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          donorName,
          amount,
        }),
      });

      const data = await res.json();
      alert(data.message || "Donation successful!");
      setAmount("");
      setDonorName("");
    } catch (err) {
      console.error("Donation error", err);
    }
  };

  if (!user) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="p-8">
      <img src={user.coverImage} alt="Cover" className="w-full h-64 object-cover rounded-xl" />
      <div className="flex items-center space-x-4 mt-4">
        <img src={user.profileImage} alt="Profile" className="w-20 h-20 rounded-full border-4 border-white -mt-12" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">💸 Total Donations: ₹{user.totalDonations}</h2>
      </div>

      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Donate to {user.name}</h3>
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-2 mb-2 border rounded"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount in ₹"
          className="w-full p-2 mb-2 border rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleDonate}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default UserPage;
