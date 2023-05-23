import { useState } from "react";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>
      <div>
        <Folder explorer={explorerData} />
      </div>
    </>
  );
}

export default App;
