import ContactItemBody from "./ContactItemBody.jsx";
import ContactItemImage from "./ContactItemImage.jsx";

export default function ContactItem({ imageUrl, name, tag }) {
  console.log("CONTACT ITEM", imageUrl)
  return (
    <div>
      <ContactItemImage image={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  )
}
