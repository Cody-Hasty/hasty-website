export default interface NoteType {
  header: string
  body: string[]
  pictures?: PictureType[]
  date: string
}

interface PictureType {
  src: string
  alt: string
}