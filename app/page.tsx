import { db } from "@/prisma/db";
import Link from "next/link";

export default async function Home() {

  const jokes = await db.joke.findMany({/*filtering kan nskrivas här*/});

    return (
    <main className="min-h-screen p-4">
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



