import { db } from "./db";
import { jokes } from "./mocked";

async function main() {
  for (const joke of jokes) {
    await db.joke.upsert({
      where: { id: joke.id },
      update: {},
      create: {
        ...joke,
        reviews: {
          create: [{ text: "Det var roligt!", rating: 5, author: "Emmy" }],
        },
      },
    });
  }
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    await db.$disconnect();
    process.exit(1);
  });
