import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list' }) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = notes.length > 0; // update dengan nilai yang sesuai

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >Catatan tidak ada</p>
      </div>
    );
  }

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} onDelete={onDelete} onArchive={onArchive} />
      ))}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
    </div>
  );
}

export default NotesList;
