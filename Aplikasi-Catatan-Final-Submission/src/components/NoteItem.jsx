import React from "react";
import { showFormattedDate } from "../utils";
import NoteActionButton from "./NoteActionButton";

function NoteItem({ note, onDelete, onArchive, keyword }) {
  const highlightText = (text, keyword) => {
    if (!keyword || keyword.trim() === "") return text;

    const result = [];
    let tempText = text;
    let keyCount = 0;

    while (tempText.toLowerCase().includes(keyword.toLowerCase())) {
      const index = tempText.toLowerCase().indexOf(keyword.toLowerCase());

      const before = tempText.substring(0, index);
      if (before) result.push(before);

      const match = tempText.substring(index, index + keyword.length);
      result.push(<mark key={keyCount++}>{match}</mark>);

      tempText = tempText.substring(index + keyword.length);
    }
    if (tempText) result.push(tempText);

    return result;
  };

  return (
    <div className="note-item" data-testid="note-item" data-note-id={note?.id}>
      <div className="note-item__content" data-testid="note-item-content">
        <h3 className="note-item__title" data-testid="note-item-title">
          {highlightText(note.title, keyword)}
        </h3>
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>

        <p className="note-item__body" data-testid="note-item-body">
          {highlightText(note.body, keyword)}
        </p>
      </div>
      <div className="note-item__action" data-testid="note-item-action">
        <NoteActionButton variant="delete" onClick={() => onDelete(note.id)} />
        <NoteActionButton
          variant={`${!note.archived ? "Archive" : "Unarchive"}`}
          onClick={() => onArchive(note.id)}
        />
      </div>
    </div>
  );
}

export default NoteItem;
