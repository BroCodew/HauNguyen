import classnames from "classnames";
import "./styles.scss";
const TodoList = (props: { todoList: any; onClickTodo: Function }) => {
  const { todoList, onClickTodo } = props;

  const className = (type: string) => {
    return classnames("checkbox", {
      completed: type === "completed",
      new: type === "new",
    });
  };
  const handleTodoClick = (item: any, idx: any) => {
    if (!onClickTodo) return;
    onClickTodo(item, idx);

    return item;
  };
  return (
    <div className="todo-container">
      {todoList.map((item: any, idx: any) => {
        return (
          <div
            key={item.id}
            className={classnames("checkbox", {
              completed: item.status === "completed",
            })}
            onClick={() => handleTodoClick(item, idx)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
