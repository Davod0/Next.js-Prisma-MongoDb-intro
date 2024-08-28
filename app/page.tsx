import { db } from "@/prisma/db";
import Link from "next/link";
import { createJoke } from "./actions";

export default async function Home() {

  const jokes = await db.joke.findMany({/*filtering kan skrivas här*/});

    return (
    <main className="min-h-screen p-4">
      <form action={createJoke} className="flex flex-col gap-2 mb-8">
        <h3 className="text-3xl">Tell youre best joke:</h3>
        <textarea name="text" rows={6} placeholder="Tell me a joke" className="dark:bg-neutral-800 p-5"/>

        <button type="submit" >Publish</button>
      </form>

      <ul className="flex flex-col gap-4">
        {jokes.map((joke) => (
          <li key={joke.id}>
            <Link href={`/joke/${joke.id}`}>
            <p className="text-2xl" >{joke.text} </p>
            <p className="text-2xl">Rating: {joke.rating}</p>
            </Link>            
          </li>
        ))}
      </ul>
    </main>
  );
}



