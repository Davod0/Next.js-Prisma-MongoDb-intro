import { Joke } from "@prisma/client";
// export interface Joke{
//     id: number;
//     text: string;
//     rating: number;
// }

// Here I have some mocked data that is used to seed the database.
export const jokes: Joke[] = [
  {
    id: "66d1acdc352d14f934d1a7ab",
    text: "Why don't scientists trust atoms? Because they make up everything!",
    rating: 4.5,
  },
  {
    id: "66d1ad3068dda3cf31cda7b2",
    text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    rating: 4.2,
  },
  {
    id: "66d1ad3906d7474eb38ca818",
    text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    rating: 4.8,
  },
  {
    id: "66d1ad4311319ce84fb5cb3f",
    text: "Why don't skeletons fight each other? They don't have the guts.",
    rating: 4.0,
  },
  {
    id: "66d1ad49ecb0af7095ca4f38",
    text: "I would tell you a construction joke, but I'm still working on it.",
    rating: 4.1,
  },
];
