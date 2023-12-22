import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewEnlist from "./NewEnlist";

function Member() {
    const [{data: member, error, status }, setMember] = useState({
        data: null,
        error: null,
        status: "pending",
    });
    const { id } = useParams();

    useEffect(() => {
        fetch(`/members/${id}`).then((r) => {
            if (r.ok) {
                r.json().then((member) =>
                setMember({ data: member, error: null, status: "resolved" })
                );
            }   else {
                r.json().then((err) =>
                    setMember({ data: null, error: err.error, status: "rejected" })
                );
            }
        });
    }, [id]);

    function handleAddGame(newGame) {
        setMember({
            error,
            status,
            data: {
                ...member,
                games: [...member.games, newGame],
            },
        });
    }

    if (status === "pending") return <h2>Loading...</h2>;
    if (status === "rejected") return <h2>Error: {error}</h2>;

    return (
        <div>
            <h2>{member.name}'s Games</h2>
            <ul>
                {member.games.map((game) => (
                    <li key={game.id}>
                        {game.name}
                    </li>
                ))}
            </ul>
            <hr />
            <NewEnlist onAddGame={handleAddGame} memberId={member.id} />
        </div>
    );
}

export default Member;