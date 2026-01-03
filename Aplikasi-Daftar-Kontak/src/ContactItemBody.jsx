

export default function ContactItemBody({ name, tag }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>@{tag}</p>
    </div>
  )
}
