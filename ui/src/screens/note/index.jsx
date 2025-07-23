import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoteByLink, updateNoteContent } from "../../api/notes";
import { NoteWritter } from "../../components/writters/NoteWritter";
import HtmlWritter from "../../components/writters/HtmlWritter";
import MdWritter from "../../components/writters/MdWritter";

export function Note() {

  const { link } = useParams();
  const [noteInfos, setNoteInfos] = useState(null);
  const [content, setContent] = useState("");
  const [lastContent, setLastContent] = useState(null);
  const [saveContent, setSaveContent] = useState(false);

  useEffect(() => {
    handleNote()
  }, [link])

  useEffect(() => {
    const interval = setInterval(() => { setSaveContent(true) }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (saveContent) {
      handleUpdateContent()
      setSaveContent(false)
    }
  }, [saveContent])

  async function handleUpdateContent() {
    if (lastContent == content) return
    const payload = {
      id: noteInfos.id,
      content: content
    }
    await updateNoteContent(payload)
    setLastContent(content)
    setSaveContent(false)
  }

  async function handleNote() {
    if (!link) return
    const data = await getNoteByLink(link)
    setNoteInfos(data)
    setContent(data?.content ?? "")
  }

  if (!noteInfos) return <></>

  function renderWritter() {
    if (noteInfos.type == "note") return <NoteWritter note={content} onChange={(e) => setContent(e)}/>
    if (noteInfos.type == "html") return <HtmlWritter html={content} onChange={(e) => setContent(e)}/>
    if (noteInfos.type == "md") return <MdWritter md={content} onChange={(e) => setContent(e)}/>
    return <></>
  }

  return (
    <div>
      {renderWritter()}
    </div>
  );
}
