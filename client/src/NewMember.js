import { useState } from "react";

function NewMember({ onAddMember }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            age: Number(age),
        };
        fetch("/members", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((member) => {
                    setName(""),
                    setAge(""),
                    setErrors([]);
                    onAddMember(member);
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2>Add New Member</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              placeholder="Between 8 & 18"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          {errors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))}
          <button type="submit">Submit</button>
        </form>
    );
}

export default NewMember