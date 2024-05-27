import "./style.css"

const CommentForm = (props) => {
    const {onAddComment, onFieldChanged, form} = props;

    return (
          <form className="comment-form" onSubmit={onAddComment}>
      <div>
        <h2>Adicionar um comentário</h2>
        <input
        onChange={onFieldChanged}
        value={form.name}
        type="text"
        name="name"
        placeholder="Digite aqui o seu nome"
        required="required"
        />
      </div>

      <div>
        <input
        onChange={onFieldChanged}
        value={form.email}
        type="email"
        name="email"
        placeholder="Digite aqui o seu email"
        required="required"
        />
      </div>

      <div>
        <textarea
        onChange={onFieldChanged}
        value={form.message}
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
    );
};

export default CommentForm;