import React from "react";
import NoteItem from "./NoteItem";

function NotesList({
  notes,
  onDelete,
  onArchive,
  dataTestId = "notes-list",
  keyword,
}) {
  const hasNotes = notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Catatan tidak ada
        </p>
      </div>
    );
  }

  const groupedNoteByMonthYear = notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);

    const group = date.toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    });

    if (!groups[group]) {
      groups[group] = [];
    }

    groups[group].push(note);
    return groups;
  }, {});

  return (
    <div className={`notes-list notes-list--grouped`} data-testid={dataTestId}>
      {Object.keys(groupedNoteByMonthYear).map((key) => (
        <section className="notes-group" key={key} data-testid={`${key}-group`}>
          <div className="notes-group__header">
            <h3 className="notes-group__title">{key}</h3>
            <span
              className="notes-group__count"
              data-testid={`${key}-group-count`}
            >
              {groupedNoteByMonthYear[key].length} catatan
            </span>
          </div>

          <div className="notes-group__items">
            {groupedNoteByMonthYear[key].map((note) => (
              <NoteItem
                note={note}
                keyword={keyword}
                key={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default NotesList;
