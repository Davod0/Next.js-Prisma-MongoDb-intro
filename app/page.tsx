import { db } from "@/prisma/db";
import Link from "next/link";
import { createJoke } from "./actions";

export default async function Home() {
  const jokes = await db.joke.findMany({});

  return (
    <main className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <form
        action={createJoke}
        className="flex flex-col gap-4 mb-8 bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Tell your best joke:
        </h3>
        <textarea
          name="text"
          rows={6}
          placeholder="Tell me a joke"
          className="dark:bg-neutral-800 bg-gray-100 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Publish
        </button>
      </form>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">All jokes</h1>

      <ul className="flex flex-col gap-4 w-full max-w-lg">
        {jokes.map((joke) => (
          <li
            key={joke.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Link href={`/joke/${joke.id}`}>
              <p className="text-2xl font-medium text-gray-800">{joke.text}</p>
              <p className="text-lg text-gray-600 mt-2">
                Rating: {joke.rating}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
