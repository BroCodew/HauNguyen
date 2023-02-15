import React, { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import TodoList from "../components/Todolist/todoList";

const Todo = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("params", params);
  console.log("searchParams", searchParams.get("orderTemplateId"));

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

  return (
    <div>
      <TodoList todoList={renderTodoList} onClickTodo={handleClickTodo} />
      <button onClick={handleShowAll}>Show ALl</button>
      <button onClick={handleShowNew}>Show New</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
      <button onClick={() => navigate(`/todoList?orderTemplateId=123`)}>
        Navi
      </button>
    </div>
  );
};

export default Todo;
