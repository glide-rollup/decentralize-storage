export const secondsToDate = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return new Intl.DateTimeFormat().format(date);
}

export const formatBytes = (bytes: number, decimals: number = 2) => {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}