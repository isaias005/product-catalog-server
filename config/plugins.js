module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.gmail.com"),
      port: env("SMTP_PORT", 465),
      auth: {
        user: env("SMTP_USERNAME", "isaias0005@gmail.com"),
        pass: env("SMTP_PASSWORD", "Josukehigashikata4"),
      },
    },
    settings: {
      defaultFrom: "isaias0005@gmail.com",
      defaultReplyTo: "isaias0005@gmail.com",
    },
  },
});
