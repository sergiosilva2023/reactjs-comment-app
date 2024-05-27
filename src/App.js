import React from "react";
import './App.css';
import Comment from "./components/Comment";

class App extends React.Component {

  state = {
    comments : [],

    form: {
      name: "",
      email: "",
      message: "",

    }
  };

  addComment=(event)=>{
    
    event.preventDefault();
    const newComment = {...this.state.form, date: new Date()};
    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name: "",
        email: "",
        message: "",
      }
    });
};


    onFieldChanged = (event) => {
      const newCommentForm = this.state.form;
      newCommentForm[event.target.name] = event.target.value;
      this.setState ({
        form: newCommentForm,
      });
      // console.log(event.target.name, event.target.value)
    };

    deleteComment = (comment) => {

      const filteredList = this.state.comments.filter((commentFilter) =>{
        return comment !== commentFilter;
      });

      this.setState({
        comments: filteredList,
      });

    };

    render() {
      return (
      <div className="App">
      <h1>Minha App Comentários!</h1>
      {this.state.comments.map((comment, index)=>{
        return(
        <Comment
        key={index}
        name={comment.name}
        email={comment.email}
        date={comment.date}
        message={comment.message}
        onDeleteComment={()=>{this.deleteComment(comment)}}
        />
      );
      })}

      <form onSubmit={this.addComment}>
      <div>
        <h2>Adicionar um comentário</h2>
        <input
        onChange={this.onFieldChanged}
        value={this.state.form.name}
        type="text"
        name="name"
        placeholder="Digite aqui o seu nome"
        required="required"
        />
      </div>

      <div>
        <input
        onChange={this.onFieldChanged}
        value={this.state.form.email}
        type="email"
        name="email"
        placeholder="Digite aqui o seu email"
        required="required"
        />
      </div>

      <div>
        <textarea
        onChange={this.onFieldChanged}
        value={this.state.form.message}
        name="message"
        rows="4"
        placeholder="Digite aqui a sua mensagem"
        required="required"
        />
      </div>

      <div>
        <button type="submit">Adicionar</button>
      </div>
      
      </form>

    </div>
      );
    }
}

export default App;
