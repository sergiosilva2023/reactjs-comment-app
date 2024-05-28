import React from "react";
import './App.css';
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import Swal from "sweetalert2"

class App extends React.Component {

  state = {
    comments : [
      {
        name: 'Sérgio Henrique da Silva',
        email: 'sergio.web100@gmail.com',
        date: new Date(),
        message: 'DevSSilva.com, Desenvolvimento Web.'
      }
    ],

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
    Swal.fire("Comentário adicionado com sucesso!", "", "success")
};


    onFieldChanged = (event) => {
      const newCommentForm = this.state.form;
      newCommentForm[event.target.name] = event.target.value;
      this.setState ({
        form: newCommentForm,
      });
      // console.log(event.target.name, event.target.value)
    };

    deleteCommentAlert = (comment) =>{
      Swal.fire({
        title: "Deseja excluir este comentário?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sim, quero excluir!",
        denyButtonText: `Não, eu mudei de ideia.`,
        icon:"question",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.deleteComment(comment);
          Swal.fire("Confirmado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Sem alterações", "", "info");
        }
      });
    }

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
        onDeleteComment={()=>{this.deleteCommentAlert(comment)}}
        />
      );
      })}

      <CommentForm 
      onAddComment={this.addComment}
      onFieldChanged={this.onFieldChanged}
      form={this.state.form}
      />

    </div>
      );
    }
}

export default App;
