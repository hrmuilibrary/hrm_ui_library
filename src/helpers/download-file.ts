export const downloadFile = (url: string, fileName: string): void => {
  const a = document.createElement('a')
  a.href = url
  a.download = fileName // Specify the file name for download
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
