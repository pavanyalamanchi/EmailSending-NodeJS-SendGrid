import express from 'express'
import { pipeline } from 'stream'
import json2csv from 'json2csv'
import { sendMail } from '../../lib/email.js'

const mailRouter = express.Router();

mailRouter.post('/SendMail', async(req, res, next) => {
    try {
        const { email } = req.body

        await sendMail(email)
        res.send('Email Sent!!!')
    } catch (error) {
        next(error)
    }
})

export default mailRouter