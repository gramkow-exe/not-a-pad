import { useNavigate } from "react-router-dom";

function MdWritter({md = "", onChange = () => {}}) {
  const navigate = useNavigate();

  function handleChange(e) {
    onChange(e.target.value)
  }

  function mdToHtml(md) {
    let lines = md.split("\n").map((e) => e.trim());
    lines = lines.map((line) => {
      let mdLine = line;

      // Titles
      mdLine = mdLine.replace(/(# )(.+)/, "<h1>$2</h1>");
      mdLine = mdLine.replace(/(## )(.+)/, "<h2>$2</h2>");
      mdLine = mdLine.replace(/(### )(.+)/, "<h3>$2</h3>");
      mdLine = mdLine.replace(/(#### )(.+)/, "<h4>$2</h4>");
      mdLine = mdLine.replace(/(##### )(.+)/, "<h5>$2</h5>");
      mdLine = mdLine.replace(/(###### )(.+)/, "<h6>$2</h6>");

      // Emphasis
      mdLine = mdLine.replace(
        /(?<!\*)\*(?!\*)(.+)(?<!\*)\*(?!\*)/,
        "<i>$2</i>",
      );
      mdLine = mdLine.replace(/(?<!_)_(?!_)(.+)(?<!_)_(?!_)/, "<i>$2</i>");

      return mdLine;
    });
    return lines.join("\n");
  }

  function handleClose() {
    navigate("/");
  }

  return (
    <div className="md-writer-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red" onClick={handleClose}>
              X
            </span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">MD-WRITER v1.0</div>
        </div>

        <div className="terminal-content">
          <div className="command-line">
            <span className="prompt">$</span>
            <span className="command">edit --mode markdown</span>
          </div>

          <div className="md-editor-layout">
            <div className="input-section">
              <div className="input-label">Raw Markdown Input:</div>
              <textarea
                value={md}
                onChange={handleChange}
                className="md-input-textarea"
                placeholder="# Start typing your markdown here..."
              />
            </div>

            <div className="output-section">
              <div className="input-label">Rendered Output:</div>
              <div
                className="md-output-container"
                dangerouslySetInnerHTML={{ __html: mdToHtml(md) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MdWritter;
