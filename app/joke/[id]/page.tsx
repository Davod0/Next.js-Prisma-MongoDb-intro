import { db } from "@/prisma/db";

interface Props{
    params: {id: string}
}

export default async function JokePge(props: Props){
    // const joke = jokes.find((joke) => joke.id.toString() === props.params.id)
    const joke = await db.joke.findUnique({where: {"id": Number(props.params.id)}});

    if(!joke){
        return (<div>Joke not found</div>);
    }    
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="text-center max-w-md w-full">
                <h2 className="text-4xl font-bold mb-4">{joke.text}</h2>
                <p className="text-xl text-gray-600">Rating: {joke.rating}</p>
            </div>
        </main>
    );
}
        