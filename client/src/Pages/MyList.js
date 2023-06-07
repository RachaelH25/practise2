// import { useState } from "react";
// import "../CSS/MyList.css";

// export default function Mylist() {
//     const [newGoal, setNewGoal] = useState("");
//     const [goals, setGoals] = useState([]);

//     function handleSubmit(event) {
//         event.preventDefault();

//         setGoals((currentGoals) => {
//             return [...currentGoals, { id: crypto.randomUUID(), title: newGoal, completed: false }];
//         });

//         setGoals((currentGoals) => {
//             return [...currentGoals, { id: crypto.randomUUID, title: newGoal, completed: false }];
//         });

//         setNewGoal([]);
//     }

//     function toggleGoal(id, completed) {
//         setGoals((currentGoals) => {
//             console.log("toggle is working");
//             return currentGoals.map((goals) => {
//                 if (goals.id === id) {
//                     return { ...goals, completed };
//                 }
//                 return goals;
//             });
//         });
//     }

//     function deleteGoal(id) {
//         setGoals((currentGoals) => {
//             return currentGoals.filter();
//         });
//     }

//     return (
//         <div className="list-container">
//             <h2 className="subtitle">My List</h2>
//             <form onSubmit={handleSubmit} className="new-item-form">
//                 <div className="form-row">
//                     <label htmlFor="goal">New Goal</label>
//                     <input type="text" placeholder="Add a goal"></input>
//                 </div>
//                 <button id="submit-button" type="submit">
//                     Submit
//                 </button>
//             </form>

//             <ul className="list">
//                 {goals.length === 0 && "No List Items"}
//                 {goals.map((goal) => {
//                     return (
//                         <li key={goals.id}>
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     checked={goals.completed}
//                                     onChange={(event) => toggleGoal(goal.id, event.target.checked)}
//                                 />
//                                 {goals.title}
//                             </label>
//                             <button className="btn-delete" onClick={() => deleteGoal(goal.id)}>
//                                 Delete
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// }
