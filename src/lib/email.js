import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendMail = async(recipient) => {
    const msg = {
        to: recipient,
        from: 'pavan.yalamanchi@gmail.com',
        subject: 'Test Mail',
        text: 'Hey!!!',
    }

    await sgMail.send(msg)
}