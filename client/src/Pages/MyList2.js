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
        setNewItem("");
    }

    function toggleGoal(id, completed) {
        setGoals((currentGoals) => {
            return currentGoals.map((goal) => {
                if (goal.id === id) {
                    return { ...goal, completed };
                }
                return goal;
            });
        });
    }

    function deleteGoal(id) {
        setGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <div className="list-container">
            <form onSubmit={handleSubmit} className="new-goal-form">
                <div className="form-row">
                    <input
                        value={newItem}
                        onChange={(event) => setNewItem(event.target.value)}
                        type="text"
                        id="item"
                        placeholder="Add to your list..."
                    ></input>
                </div>
                <button className="btn btn-add">Go</button>
            </form>
            <h2 className="header">My List</h2>
            <ul className="list">
                {goals.length === 0 && "no list items yet"}
                {goals.map((goal) => {
                    return (
                        <li key={goal.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={goal.completed}
                                    onChange={(event) => toggleGoal(goal.id, event.target.checked)}
                                />
                                {goal.title}
                            </label>
                            <button className="btn btn-delete" onClick={() => deleteGoal(goal.id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
