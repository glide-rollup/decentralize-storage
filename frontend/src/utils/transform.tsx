import { DirectoryInput, Directory, FileInput, File } from "../types";

export const transformDir = (dir: DirectoryInput): Directory => {
  return {
    ...dir,
    id: dir.id.toNumber(),
    parentDir: dir.parentDir.toNumber(),
    updatedAt: dir.updatedAt.toNumber(),
  }
}

export const transformFile = (file: FileInput): File => {
  return {
    ...file,
    parentDir: file.parentDir.toNumber(),
    version: file.version.toNumber(),
    updatedAt: file.updatedAt.toNumber(),
    size: file.size.toNumber(),
  }
}