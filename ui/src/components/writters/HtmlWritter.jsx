import { useNavigate } from "react-router-dom";

function HtmlWritter({ html="", onChange = () => {} }) {
  const navigate = useNavigate();

  function handleClose() {
    navigate("/");
  }

  function handleChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="html-writer-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red" onClick={handleClose}>X</span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">HTML-WRITER v1.0</div>
        </div>

        <div className="terminal-content">
          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">edit --mode html</span>
          </div>

          <div className="html-editor-layout">
            <div className="input-section">
              <div className="input-label">Raw HTML Input:</div>
              <textarea
                value={html}
                onChange={handleChange}
                className="html-input-textarea"
                placeholder="<h1>Start typing your HTML here...</h1>"
              />
            </div>

            <div className="output-section">
              <div className="input-label">Rendered Output:</div>
              <div
                className="html-output-container"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlWritter;
