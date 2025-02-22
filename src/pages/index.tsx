import React, { useEffect, useState } from "react";
import { getGreeting } from "../services/service";
import Header from "../components/header";

interface Greeting {
  id: number;
  message: string;
}

const HomePage: React.FC = () => {
  const [greeting, setGreeting] = useState<Greeting | null> (null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGreeting()
    .then((data) => setGreeting(data))
    .catch((err) => setError("Failed to load greeting"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Header />
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6 text-center">
        {error ? (
          <p className="text-red-500 font-semibold">{error}</p>
        ) : (
          <h1 className="text-2xl font-bold text-gray-700">
            {greeting ? greeting.message : "Loading..."}
          </h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;