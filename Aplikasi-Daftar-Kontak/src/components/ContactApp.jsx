import react from 'react';
import ContactList from '../components/ContactList.jsx';
import { getData } from '../data.js'
import ContactInput from './ContactInput.jsx';
export default class ContactApp extends react.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onAddContactHandler = this.onAddContactHandler.bind(this)

  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({ contacts })
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg'
          }
        ]
      }
    })
  }


  render() {
    return (
      <div>
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
        <h1>Tambah Kontak</h1>
        <ContactInput addContact={this.onAddContactHandler} />
      </div>
    )
  }
}
