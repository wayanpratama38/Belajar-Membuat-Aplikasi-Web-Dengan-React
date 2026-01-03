import { getData } from "./data.js"
import ContactList from "./ContactList.jsx"
export default function ContactApp() {
  const contacts = getData()
  console.log(contacts)
  return (
    <div>
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  )
}
