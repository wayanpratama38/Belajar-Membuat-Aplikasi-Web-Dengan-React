export default function NoteActionButton({ variant, onClick }) {
  if (variant === "delete") {
    return (
      <button
        className="note-item__delete-button"
        type="button"
        // TODO [Basic] panggil onDelete dengan id catatan.
        onClick={onClick}
        data-testid="note-item-delete-button"
      >
        Delete
      </button>
    )
  } else {
    return (
      <button
        className="note-item__archive-button"
        type="button"
        onClick={onClick}
        data-testid="note-item-archive-button"

      >
        {variant}
      </button>
    )
  }

}
