type ToDo = {
  id: number,
  text: string,
  done: boolean
}

export default function ToggleToDo(todo: ToDo): ToDo {
  // const foo: ToDo = {
  //   id: 1,
  //   text: "...",
  //   done: true,
  // };
  //
  // const bar: ToDo = {
  //   text: "...",
  //   done: true,
  // };

  // console.log("foo:", foo);
  // console.log("bar:", bar);

  todo.done = !todo.done;

  return todo;
}
