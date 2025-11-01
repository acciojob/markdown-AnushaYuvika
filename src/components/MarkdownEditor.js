// import React, { useState, useEffect } from "react";

// const MarkdownEditor = () => {
//   const [text, setText] = useState("# Hello world");
//   const [preview, setPreview] = useState("");

//   useEffect(() => {
//     let html = text;
//     if (html.startsWith("# ")) {
//       html = "<h1>" + html.slice(2) + "</h1>";
//     }

//     setPreview(html);
//   }, [text]);


//   return (
//     <div className="editor-container">
//       <textarea
//         className="textarea"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       ></textarea>

//       <div
//         className="preview"
//         dangerouslySetInnerHTML={{ __html: preview }}
//       ></div>
//     </div>
//   );

// };

// export default MarkdownEditor;
