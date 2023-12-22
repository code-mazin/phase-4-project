import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewMember from "./NewMember";

function Home() {
    const [members, setMembers] = useState([]);
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("/games")
            .then((r) => r.json())
            .then(setGames);
    }, []);

    useEffect(() => {
        fetch("/members")
            .then((r) => r.json())
            .then(setMembers);
    }, []);

    function handleAddMember(newMember) {
        setMembers((members) => [...members, newMember]);
    }

    function handleDeleteGame(id) {
        fetch(`/games/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setGames((games) =>
                    games.filter((game) => game.id !==id)
                );
            }
        });
    }

    return (
        <div>
            <h2>Games</h2>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <span>
                            {game.name}
                        </span>
                        <button onClick={() => handleDeleteGame(game.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
            <h2>Members</h2>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>
                        <span>
                            {member.name}, age {member.age}
                        </span>
                        <Link to={`members/${member.id}`}>View Games</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <NewMember onAddMember={handleAddMember} />
        </div>
    );
}

export default Home;