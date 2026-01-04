import react from 'react';
import ContactList from '../components/ContactList.jsx';
import { getData } from '../data.js'
export default class ContactApp extends react.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id)
    this.setState({ contacts })
  }


  render() {
    return (
      <div>
        <h1>Daftar Kontak</h1>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}
