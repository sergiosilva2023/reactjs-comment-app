import React from "react";
import './App.css';
import Comment from "./components/Comment";

class App extends React.Component {


  state = {
    comments : [
      {
        name: 'Sérgio Silva',
        email: 'sergio.web100@gmail.com',
        date: new Date(),
        message: 'Estou gordo',
      },
      {
        name: 'Wiliam Silva',
        email: 'wiliam_2004@sapo.pt',
        date: new Date(),
        message: 'Estou lindo'
      },
    ],
  };

  addComment=()=>{
    const newComment = {
      name: 'Sónia Loureiro',
      email: 'sonia.web100@gmail.com',
      date: new Date(),
      message: 'Sou muito linda'
    };

    this.setState({
      comments: [...this.state.comments, newComment]
    });


//    this.state.comments.push(newComment)
    alert('Devo adiconar um comentário')
  };

    render() {
      return (
      <div className="App">
      <h1>My Comments App!</h1>
      {this.state.comments.map((comment, index)=>{
        return(
        <Comment
        key={index}
        name={comment.name}
        email={comment.email}
        date={comment.date}
        message={comment.message}
        />
      );
      })}
      <button onClick={this.addComment}>Adicionar Comentário.</button>
    </div>
      );
    }
}

export default App;
