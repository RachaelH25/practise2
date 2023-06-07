import { useState } from "react";
import "../CSS/MyList.css";

export default function MyList() {
    const [newItem, setNewItem] = useState("");
    const [goals, setGoals] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        setGoals((currentGoals) => {
            return [...currentGoals, { id: crypto.randomUUID(), title: newItem, completed: false }];
        });
    }

    console.log(goals);

    return (
        <div className="list-container">
            <form onSubmit={handleSubmit} className="new-goal-form">
                <div className="form-row">
                    <input
                        value={newItem}
                        onChange={(event) => setNewItem(event.target.value)}
                        type="text"
                        id="item"
                        placeholder="Add a goal"
                    ></input>
                </div>
                <button className="btn">Add</button>
            </form>
            <h2 className="header">My List</h2>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-delete">Delete</button>
                </li>
            </ul>
        </div>
    );
}
