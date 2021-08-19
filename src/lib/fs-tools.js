import fs from 'fs-extra'
import { fileURLToPath } from "url"
import { dirname, join } from "path"


const booksJSONPath = join(dirname(fileURLToPath(
    import.meta.url)), '../data/books.json')

export const getBooksReadableStream = () => fs.createReadStream(booksJSONPath)