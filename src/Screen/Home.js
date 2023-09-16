import { AddBtn } from "../components/AddBtn";
import { DeleteHandler } from "../components/DeleteTodo";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TODO APP</h2>
        <AddBtn></AddBtn>
        <ul className='allTodo'>
        <DeleteHandler></DeleteHandler>

        </ul>
      </header>
    </div>
  );
}

export default Home;
