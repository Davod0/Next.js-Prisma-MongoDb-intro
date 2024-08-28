
export declare interface Joke{
    id: number;
    text: string;
    rating: number;
}


export const jokes: Joke[] = [
      {
        id: 1,
        text: "Why don't scientists trust atoms? Because they make up everything!",
        rating: 4.5
    },
    {
        id: 2,
        text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        rating: 4.2
    },
    {
        id: 3,
        text: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        rating: 4.8
    },
    {
        id: 4,
        text: "Why don't skeletons fight each other? They don't have the guts.",
        rating: 4.0
    },
    {
        id: 5,
        text: "I would tell you a construction joke, but I'm still working on it.",
        rating: 4.1
    }
];