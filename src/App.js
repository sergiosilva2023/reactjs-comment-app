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

      <form onSubmit={this.addComment}>
      <div>
        <h2>Add a comment</h2>
        <input
        onChange={this.onFieldChanged}
        value={this.state.form.name}
        type="text"
        name="name"
        placeholder="Type here your name"
        required="required"
        />
      </div>

      <div>
        <input
        onChange={this.onFieldChanged}
        value={this.state.form.email}
        type="email"
        name="email"
        placeholder="Type here your email"
        required="required"
        />
      </div>

      <div>
        <textarea
        onChange={this.onFieldChanged}
        value={this.state.form.message}
        name="message"
        rows="4"
        placeholder="Type here you message"
        required="required"
        />
      </div>

      <div>
        <button type="submit">Add a comment</button>
      </div>
      
      </form>

    </div>
      );
    }
}

export default App;
