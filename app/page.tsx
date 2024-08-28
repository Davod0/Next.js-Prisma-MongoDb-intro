import Link from "next/link";
import { jokes } from "./data";


export default function Home() {
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



