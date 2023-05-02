import { NextApiRequest, NextApiResponse } from "next";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey("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");

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { to, body } = req.body;

    const msg: MailDataRequired = {
        to,
        from: "info@alumeltech.com",
        subject: "This Email Coming from Search My Expert",
        text: body,
    };

    try {
        await sgMail.send(msg);
        console.log("Email sent successfully");
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while sending the email" });
    }
}
