import { Directory } from '../types';
import { BreadcrumbItem } from "../assets/css/common.style";
import { Breadcrumbs } from "@material-tailwind/react";

type Props = {
  directory: Directory|undefined,
  openDirectory: Function
}

const BreadcrumbsPath = ({directory, openDirectory}: Props) => {

  return (
    <>
      {directory && directory.id > 0 ? (
        <Breadcrumbs className={"mt-1.5 text-gray-600 font-medium"}>
          <BreadcrumbItem onClick={() => openDirectory(0)}>My Files</BreadcrumbItem>
          {directory?.id && directory.parentDir !== 0 && (
            <BreadcrumbItem onClick={() => openDirectory(directory.parentDir)}>
              ...
            </BreadcrumbItem>
          )}
          {directory?.id && (
            <span className={`opacity-60 pointer-events-none`}>
              {directory.name}
            </span>
          )}
        </Breadcrumbs>
      ) : (
        <p className={`mt-1.5 flex text-gray-600 flex-wrap items-center bg-blue-gray-50 bg-opacity-60 py-2 px-4 rounded-md`}>
          <BreadcrumbItem>My Files</BreadcrumbItem>
        </p>
      )}
    </>
  );
};

export default BreadcrumbsPath;