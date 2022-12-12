import {Dropzone, FileItem} from "@dropzone-ui/react";
import {useState} from "react";

export default function FilesList() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    console.log(`incommingFiles`, incommingFiles);
    setFiles(incommingFiles);
  };

  return (
    <>
      <Dropzone onChange={updateFiles} value={files}>
        {files.map((file) => (
          <FileItem {...file} preview/>
        ))}
      </Dropzone>
    </>
  )
}
