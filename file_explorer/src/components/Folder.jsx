/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => setExpand(!expand)}
          style={{ marginTop: 5 }}
        >
          <span>📁 {explorer.name}</span>

          <div>
            <button>Folder +</button>
            <button>File +</button>
          </div>
        </div>

        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 25,
          }}
        >
          {explorer.items.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
        📄 {explorer.name} <br />
      </span>
    );
  }
};

export default Folder;
