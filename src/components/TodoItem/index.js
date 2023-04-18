import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodos} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodos(id)
  }

  return (
    <li className="container">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
