import ContactItem from "./ContactItem.jsx";

export default function ContactList({ contacts }) {
  return (
    <div>
      {
        contacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))
      }
    </div>

  )
}
