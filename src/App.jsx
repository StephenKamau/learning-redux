import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./features/counter/Counter";
import PostList from "./features/posts/PostList";
import AddPost from "./features/posts/AddPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AddPost />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <PostList />
      </div>
    </>
  );
}

export default App;
