"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

// This tells Next.Js to craete API endpoints for each exported functions.
// Functions can then be called from the client side.

export async function createJoke(formData: FormData) {
  await db.joke.create({
    data: { text: formData.get("text") as string, rating: 2.5 },
  });

  // Tell the server to rebuild the HTML page.
  revalidatePath("/");
}

export async function createReview(formdata: FormData) {
  await db.review.create({
    data: {
      text: formdata.get("text") as string,
      author: formdata.get("author") as string,
      rating: Number(formdata.get("rating")),
      jokeId: formdata.get("jokeId") as string,
    },
  });

  revalidatePath("/joke/" + formdata.get("jokeId"));
}
