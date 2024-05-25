import './App.css';
import Comment from "./components/Comment";
function App() {
  return (
    <div className="App">
      <h1>Comentário - Opinião</h1>
      <Comment
          name="Sérgio Silva"
          email="sergio.web100@gmail.com"
          date={new Date()}
          message="Estou gordo"
          />
      <Comment 
           name="Wiliam Silva"
           email="wiliam_2004@sapo.pt"
           date={new Date()}
           message="Puto fixe"
           />
    </div>
  );
}

export default App;
