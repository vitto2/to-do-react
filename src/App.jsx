import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "Estudar programação",
			description: "Estudar React",
			done: false,
		},
		{
			id: 2,
			title: "Estudar inglês",
			description: "Estudar vocabulário",
			done: false,
		},
		{
			id: 3,
			title: "Estudar matemática",
			description: "Estudar álgebra",
			done: false,
		},
	]);

	return (
		<div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
			<div className="w-[500px]">
				<h1 className="text-3xl text-slate-100 font-bold text-center">
					Gerenciador de Tarefas
				</h1>
				<AddTask />
				<Tasks tasks={tasks} />
			</div>
		</div>
	);
}

export default App;
