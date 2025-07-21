import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../api/notes";
export function Home() {
  const [link, setLink] = useState("");
  const [type, setType] = useState("note");
  const navigate = useNavigate()

  function formatLink() {
    if (!link) return ""
    return link
        .trim()
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
        .replace(/ +/g, "_")
        .toLowerCase();
  }

  async function handleCreateNote() {
    const payload = {
      link: formatLink(),
      type: type
    }

    const response = await createNote(payload)
    if (response) { navigate(`/note/${link}`)  }
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
███╗   ██╗ ██████╗ ████████╗    █████╗       ██████╗  █████╗ ██████╗
████╗  ██║██╔═══██╗╚══██╔══╝   ██╔══██╗      ██╔══██╗██╔══██╗██╔══██╗
██╔██╗ ██║██║   ██║   ██║█████╗███████║█████╗██████╔╝███████║██║  ██║
██║╚██╗██║██║   ██║   ██║      ██╔══██║╚════╝██╔═══╝ ██╔══██║██║  ██║
██║ ╚████║╚██████╔╝   ██║      ██║  ██║      ██║     ██║  ██║██████╔╝
═╝  ╚═══╝ ╚═════╝    ╚═╝      ╚═╝  ╚═╝      ╚═╝     ╚═╝  ╚═╝╚═════╝
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="terminal-input"
                placeholder="my_awesome_note"
                onBlur={() => setLink(formatLink(link))}
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
                    checked={type === "note"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <span className="template-name">[TXT] Plain Text</span>
                  <span className="template-desc">Simple text document</span>
                </label>

                <label className="template-option">
                  <input
                    type="radio"
                    name="template"
                    value="md"
                    checked={type === "md"}
                    onChange={(e) => setType(e.target.value)}
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
                    checked={type === "html"}
                    onChange={(e) => setType(e.target.value)}
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
                disabled={!link.trim()}
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
