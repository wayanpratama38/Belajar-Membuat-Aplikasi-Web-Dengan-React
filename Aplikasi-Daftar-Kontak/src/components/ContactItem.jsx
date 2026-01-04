import ContactItemBody from "./ContactItemBody.jsx";
import ContactItemImage from "./ContactItemImage.jsx";
import DeleteButton from "./DeleteButton.jsx";

export default function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  console.log("CONTACT ITEM", imageUrl)
  return (
    <div>
      <ContactItemImage image={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}
