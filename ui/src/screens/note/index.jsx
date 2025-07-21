import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoteByLink } from "../../api/notes";
import { NoteWritter } from "../../components/writters/NoteWritter";
import HtmlWritter from "../../components/writters/HtmlWritter";
import MdWritter from "../../components/writters/MdWritter";

export function Note() {

  const { link } = useParams();
  const [noteInfos, setNoteInfos] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    handleNote()
  }, [link])

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
