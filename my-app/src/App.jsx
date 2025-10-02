import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

function App() {
  const { loading, data } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Thunk Example (RTK)</h1>
      <button onClick={() => dispatch(fetchPosts())}>Load Posts</button>

      {loading && <p>Loading...</p>}

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
