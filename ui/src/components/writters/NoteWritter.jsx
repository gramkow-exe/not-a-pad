import { useNavigate } from "react-router-dom";

export function NoteWritter({ note = "", onChange = () => {} }) {
  const navigate = useNavigate();

  function handleClose() {
    navigate("/");
  }

  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="note-writer-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red" onClick={handleClose}>X</span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">NOT-A-PAD - EDITOR</div>
        </div>
        <div className="terminal-content">
          <div className="editor-section">
            <div className="command-line">
              <span className="prompt">$</span>
              <span className="command">nano document.txt</span>
            </div>
            <textarea
              className="note-writer-textarea"
              value={note}
              onChange={handleChange}
              placeholder="Start typing your note..."
              autoFocus
            />
            <div className="editor-status">
              <span className="status-text">
                Lines: {note.split("\n").length} | Chars: {note.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
