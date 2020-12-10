type Todo = {
  id: number,
  text: string,
  done: boolean
}

export default function ToggleToDo() {
  const foo: Todo = {
    id: 1,
    text: "...",
    done: true,
  };

  const bar: Todo = {
    text: "...",
    done: true,
  };

  console.log("foo:", foo);
  console.log("bar:", bar);
}
