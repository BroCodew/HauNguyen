import { useState } from "react";
import TodoList from "../components/Todolist/todoList";
import TodoForm from "../components/TodoForm";

const Todo = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Learn",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleClickTodo = (item: any, idx: any) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    setFilterStatus("all");
  };
  const handleShowNew = () => {
    setFilterStatus("new");
  };

  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };
  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  const handleTodoFromSubmit = (values: any) => {
    console.log("form submission", values);
  };

  return (
    <div>
      <h3>TodoForm</h3>
      <TodoForm onSubmit={handleTodoFromSubmit} />
      <TodoList todoList={renderTodoList} onClickTodo={handleClickTodo} />
      <button onClick={handleShowAll}>Show ALl</button>
      <button onClick={handleShowNew}>Show New</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
    </div>
  );
};

export default Todo;
