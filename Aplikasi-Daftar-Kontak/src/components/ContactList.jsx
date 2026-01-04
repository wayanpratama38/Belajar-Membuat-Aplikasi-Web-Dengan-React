import ContactItem from "./ContactItem.jsx";
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {
        contacts.map((contact) => (
          <ContactItem key={contact.id}
            id={contact.id}
            onDelete={onDelete}
            {...contact} />
        ))
      }
    </div>

  )
}
