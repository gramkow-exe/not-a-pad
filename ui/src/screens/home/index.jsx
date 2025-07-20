import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Home() {
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("note");
  const navigate = useNavigate()

  const handleCreateNote = () => {
    if (title.trim()) {
      navigate(`/${template}`)
    }
  };

  return (
    <div className="home-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-title">NOT-A-PAD v1.0</div>
        </div>

        <div className="terminal-content">
          <div className="ascii-logo">
            <pre>{`
███╗   ██╗ ██████╗ ████████╗      █████╗       ██████╗  █████╗ ██████╗
████╗  ██║██╔═══██╗╚══██╔══╝     ██╔══██╗      ██╔══██╗██╔══██╗██╔══██╗
██╔██╗ ██║██║   ██║   ██║        ███████║█████╗██████╔╝███████║██║  ██║
██║╚██╗██║██║   ██║   ██║        ██╔══██║╚════╝██╔═══╝ ██╔══██║██║  ██║
██║ ╚████║╚██████╔╝   ██║███████╗██║  ██║      ██║     ██║  ██║██████╔╝
╚═╝  ╚═══╝ ╚═════╝    ╚═╝╚══════╝╚═╝  ╚═╝      ╚═╝     ╚═╝  ╚═╝╚═════╝
            `}</pre>
          </div>

          <div className="command-section">
            <div className="command-line">
              <span className="prompt">$</span>
              <span className="command">create_note --title</span>
            </div>

            <div className="input-group">
              <label className="input-label"> Enter note title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="terminal-input"
                placeholder="my_awesome_note"
                autoFocus
              />
            </div>

            <div className="template-section">
              <div className="template-label"> Select template type:</div>
              <div className="template-options">
                <label className="template-option">
                  <input
                    type="radio"
                    name="template"
                    value="note"
                    checked={template === "note"}
                    onChange={(e) => setTemplate(e.target.value)}
                  />
                  <span className="template-name">[TXT] Plain Text</span>
                  <span className="template-desc">Simple text document</span>
                </label>

                <label className="template-option">
                  <input
                    type="radio"
                    name="template"
                    value="md"
                    checked={template === "md"}
                    onChange={(e) => setTemplate(e.target.value)}
                  />
                  <span className="template-name">[MD] Markdown</span>
                  <span className="template-desc">
                    Formatted text with markdown
                  </span>
                </label>

                <label className="template-option">
                  <input
                    type="radio"
                    name="template"
                    value="html"
                    checked={template === "html"}
                    onChange={(e) => setTemplate(e.target.value)}
                  />
                  <span className="template-name">[HTML] Web Document</span>
                  <span className="template-desc">Rich HTML document</span>
                </label>
              </div>
            </div>

            <div className="action-section">
              <button
                onClick={handleCreateNote}
                className="create-button"
                disabled={!title.trim()}
              >
                <span className="button-text">[ CREATE_NOTE.exe ]</span>
              </button>
            </div>

            <div className="footer-info">
              <div className="system-info">System ready. Awaiting input...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
