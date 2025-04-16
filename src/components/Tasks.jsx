import { ChevronRight } from "lucide-react";

function Tasks(props) {
	return (
		<ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
			{props.tasks.map((task) => (
				<li className="flex gap-2" key={task.id}>
					<button className="bg-slate-400 text-left w-full text-white p-2 rounded-md ">
						{task.title}
					</button>
					<button className="bg-slate-400 p-2 rounded-md text-white "> {<ChevronRight />}</button>
				</li>
			))}
		</ul>
	);
}

export default Tasks;
