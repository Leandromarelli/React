import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import  Navbar  from "./components/Navbar/Navbar";

const App =() => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = {"Welcome"}/>
    </div>

  );
}

export default App;
