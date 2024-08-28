
interface Props{
    params: {id: string}
}

export default function JokePge(props: Props){
    return (
        <main className="min-h-screen">
            {props.params.id}
        </main>
    );
}