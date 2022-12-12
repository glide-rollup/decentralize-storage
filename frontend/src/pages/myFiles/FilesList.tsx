import {Dropzone, FileItem} from "@dropzone-ui/react";
import {useState} from "react";
import ListItem from "../../components/myFiles/ListItem";
import {Breadcrumbs, Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import NewDirectoryPopup from "../../components/myFiles/NewDirectoryPopup";

export default function FilesList() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    console.log(`incommingFiles`, incommingFiles);
    setFiles(incommingFiles);
  };

  return (
    <>
      {/*<Dropzone onChange={updateFiles} value={files}>*/}
      {/*  {files.map((file) => (*/}
      {/*    <FileItem {...file} preview/>*/}
      {/*  ))}*/}
      {/*</Dropzone>*/}

      <div className={"flex flex-row justify-between mb-3"}>
        <Breadcrumbs className={"mt-1"}>
          <Link to={"/my"}>My Files</Link>
          <Link to={"/my"}>Docs</Link>
        </Breadcrumbs>

        <div className={"flex gap-3"}>
          <NewDirectoryPopup/>
          <Button variant="gradient">Upload Files</Button>
        </div>
      </div>

      <div className={"flex flex-row justify-between border-t border-b py-2.5 font-semibold text-sm bg-gray-50 px-4 gap-2"}>
        <div className={"w-10"}></div>
        <div className={"flex-1"}>Name</div>
        <div className={"w-32"}>Size</div>
        <div className={"w-32"}>Version</div>
        <div className={"w-32"}>Date</div>
        <div className={"w-48 text-right"}>Actions</div>
      </div>

      <ListItem/>
      <ListItem/>
    </>
  )
}
