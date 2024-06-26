const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { from, senderName, text } = data;

    const message = {
      to: "ahmad-jaffal1@outlook.com",
      from: "ahmad-jaffal1@outlook.com",
      subject: `New message from ${senderName} ${from}`,
      text,
    };

    await sendgrid.send(message);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send email",
        details: error.message,
      }),
    };
  }
};
