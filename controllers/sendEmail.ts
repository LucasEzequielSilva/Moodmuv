const nodemailer = require("nodemailer");

const sendEmail = async (email:string, uniqueString:string, verify:string) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
		user: "thiagochiesa444@gmail.com",
		pass: "ctgpiwkypiuchwsl",
		},
	});

	let sender = "gameover.mindhub@gmail.com";
	let mailOptions = {
		from: sender,
		to: email,
		subject: "Hello, friend! Let's verify your email!",
		html: `
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <script src="https://cdn.tailwindcss.com"></script>
		</head>
		<body style="display: flex; justify-content: center; align-items: center; margin: 1rem;">
		  <div style="background-color: invisible;display:flex; justify-content: start; align-items: center;flex-direction: column;border-radius: 1rem; width: 30rem; height: 15rem; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;">
			<div style="width: 100%; height: 40%; background: linear-gradient(88.35deg, #573E81 0.84%, #6E5D8B 98.46%);
			border-radius: 1rem  1rem 0 0; display: flex; justify-content: center; align-items: center;">
			  <img style="width:4.5rem;" src="https://i.ibb.co/dWTTRPp/logo-MOOD-MUV-ok-1-1.png" alt="logo-MOOD-MUV-ok-1-1" border="0">
			</div>
			<div style="display: flex; flex-direction: column; gap: .5rem; padding: .5rem 1rem;">
			  <h4 style="font-weight: bold; font-size: large;">Verifica tu correo electrónico</h4>
			  <p style="font-size:small">Hola Muv, verifica tu correo para tener acceso a mas funcionalidades de Moodmuv</p>
			  <a style="background: linear-gradient(88.35deg, #573E81 0.84%, #6E5D8B 98.46%); border-radius: .1rem; text-align: center; font-weight: bold; color: #fff; padding: .5rem;" href='http://moodmuv-back-production.up.railway.app/api/auth/${verify}/${uniqueString}'>Verificar</a>
			</div>
		  </div>
		</body>
		`
	}

	await transporter.sendMail(mailOptions, function (error:Error, response:Response) {
		if (error) {
			console.log(error);
		} else {
			console.log("Message sent succesfully");
		}
	});
};

export default sendEmail
