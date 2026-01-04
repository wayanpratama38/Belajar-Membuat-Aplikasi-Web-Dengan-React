

export default function DeleteButton({ id, onDelete }) {
  return (
    <button onClick={() => onDelete(id)}>X</button>
  )
}
