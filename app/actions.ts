"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

// This tells Next.Js to craete API endpoints for each exported functions.
// Functions can then be called from the client side.

export async function createJoke(formData: FormData){
    await db.joke.create({data: {text: formData.get("text")?.toString()!, rating: 2.5}});

    // Tell the server to rebuild the HTML page.
    revalidatePath("/");
}


