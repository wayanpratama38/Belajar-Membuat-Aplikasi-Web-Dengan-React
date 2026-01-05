import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      errorMessage: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      const charCount = event.target.value.length;
      if (charCount <= 50) {
        return {
          title: event.target.value,
        };
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.body.length < 10) {
      this.setState({ errorMessage: "Isi catatan minimal harus 10 karakter." });
      return;
    }
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState(() => {
      return {
        title: "",
        body: "",
        errorMessage: "",
      };
    });
  }

  render() {
    const remainingChars = 50 - this.state.title.length;
    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {this.state.errorMessage && (
          <p className="note-input__feedback--error">
            {this.state.errorMessage}
          </p>
        )}
        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          <p
            className={`note-input__title__char-limit ${
              remainingChars <= 10 ? "note-input__title__char-limit--warn" : ""
            }`}
            data-testid="note-input-title-remaining"
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
