import { createReview } from "@/app/actions";
import { db } from "@/prisma/db";

interface Props {
  params: { id: string };
}

export default async function JokePge(props: Props) {
  const joke = await db.joke.findUnique({
    where: { id: props.params.id },
    include: { reviews: true },
  });

  if (!joke) {
    return <div>Joke not found</div>;
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="text-center max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{joke.text}</h2>
        <p className="text-xl text-gray-600 mb-6">Rating: {joke.rating}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-700">
          Community Reviews
        </h2>

        <form action={createReview} className="space-y-4">
          <input type="hidden" name="jokeId" value={joke.id} />
          <textarea
            name="text"
            rows={4}
            placeholder="Create a new review"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <input
            type="text"
            name="author"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0-5)"
            min={0}
            max={5}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>

        <ul className="mt-6 space-y-4">
          {joke.reviews.map((review) => (
            <li
              key={review.id}
              className="flex flex-col gap-2 p-4 border-b border-gray-200"
            >
              <p className="text-lg text-gray-800">{review.text}</p>
              <p className="text-sm text-gray-600">By: {review.author}</p>
              <p className="text-sm text-gray-600">Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
