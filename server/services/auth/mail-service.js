const nodemailer = require('nodemailer')

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_SECURE,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD,
			},
		})
	}

	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Account activation of ' + process.env.API_URL,
			text: '',
			html: `
                <div>
                
                <h2>You've just created a new toPlot account. Please confirm your email address to let us know you're the rightful owner of this account.</h2>
                <a href="${link}" target="_blank">${link}</a>
                
                </div>
            `,
		})
	}
}

module.exports = new MailService()