import express from 'express'
import { pipeline } from 'stream'
import json2csv from 'json2csv'

import { getBooksReadableStream } from '../../lib/fs-tools.js'

const filesRouter = express.Router()

filesRouter.get('/CSVDownload', async(req, res, next) => {
    try {
        const filename = 'test.csv'
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
        const source = getBooksReadableStream()
        const transform = new json2csv.Transform({ fields: ['asin', 'title', 'category', 'img'] })
        const destination = res

        pipeline(source, transform, destination, err => {
            if (err) console.log(err)
        })
    } catch (error) {
        next(error)
    }
})

export default filesRouter