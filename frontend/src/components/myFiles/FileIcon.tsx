import docIcon from '../../assets/img/icons/doc.svg'
import gifIcon from '../../assets/img/icons/gif.svg'
import htmlIcon from '../../assets/img/icons/html.svg'
import jpgIcon from '../../assets/img/icons/jpg.svg'
import mp3Icon from '../../assets/img/icons/mp3.svg'
import otherIcon from '../../assets/img/icons/other.svg'
import pdfIcon from '../../assets/img/icons/pdf.svg'
import pngIcon from '../../assets/img/icons/png.svg'
import psdIcon from '../../assets/img/icons/psd.svg'
import rawIcon from '../../assets/img/icons/raw.svg'
import txtIcon from '../../assets/img/icons/txt.svg'
import videoIcon from '../../assets/img/icons/video.svg'
import xlsIcon from '../../assets/img/icons/xls.svg'
import zipIcon from '../../assets/img/icons/zip.svg'

const FileIcon = ({mimeType}: { mimeType: string }) => {

  const getFileIcon = () => {
    switch (mimeType) {
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return docIcon;
      case '':
        return gifIcon;
      case '':
        return htmlIcon;
      case '':
        return jpgIcon;
      case '':
        return mp3Icon;
      case '':
        return pdfIcon;
      case '':
        return pngIcon;
      case '':
        return psdIcon;
      case '':
        return rawIcon;
      case '':
        return txtIcon;
      case '':
        return xlsIcon;
      case '':
        return zipIcon;
      default:
        if(mimeType.indexOf('video') !== -1){
          return videoIcon;
        }
        return otherIcon;
    }
  }

  return (
    <img src={getFileIcon()}
         alt={mimeType}
         width={20}
    />
  );
};

export default FileIcon;