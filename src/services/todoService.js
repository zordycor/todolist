const fetchTodos = async () => {
	const response = await fetch('http://localhost:3000/api/todos');
	const todos = await response.json();

	return todos;
};

const TodoService = {
	fetchTodos
}

export { TodoService };