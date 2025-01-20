interface IMailto {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: IMailto;
  message: IMailMessage;
}

//DTO => Data Transfer Object

class EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
