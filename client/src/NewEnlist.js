import { useEffect, useState } from "react";

function NewEnlist({ memberId, onAddGame }) {
    const [gameId, setGameId] = useState("");
    const [games, setGames] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/games")
        .then((r) => r.json())
        .then(setGames);
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            game_id: Number(gameId),
            member_id: memberId
        };
        fetch("/signups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((game) => {
                    setGameId("");
                    setErrors([]);
                    onAddGame(game);
                });
            } else {
                r.json().then((err) => setErrors(err.erros));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Enlist</h2>
            <div>
                <label htmlFor="game">Game</label>
                <select
                    id="game"
                    value={gameId}
                    onChange={(e) => setGameId(e.target.value)}
                >
                    <option value="">Select Game...</option>
                    {games.map((game) => (
                        <option key={game.id} value={game.id}>
                            {game.name}
                        </option>
                    ))}
                </select>
            </div>
            {errors.map((err) => (
                <p key={err} style={{ color: "red" }}>
                    {err}
                </p>
            ))}
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewEnlist;