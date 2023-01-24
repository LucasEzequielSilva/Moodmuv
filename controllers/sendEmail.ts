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
		<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex justify-center items-center my-4">
  <div class="w-96 h-56 bg-white rounded-3xl shadow-sm">
    <div class="w-full h-[40%] bg-gradient-to-r from-[#573E81] to-[#6E5D8B] rounded-t-3xl flex justify-center items-center">
      <img class="w-20" src="https://i.ibb.co/dWTTRPp/logo-MOOD-MUV-ok-1-1.png" alt="logo-MOOD-MUV-ok-1-1" border="0">
    </div>
    <div class="flex flex-col gap-1 px-4 py-2">
      <h4 class="font-bold text-xl">Verifica tu correo electrónico</h4>
      <p class="text-sm">Hola Muv, verifica tu correo para tener acceso a mas funcionalidades de Moodmuv</p>
      <a class="rounded text-center bg-gradient-to-r from-[#573E81] to-[#6E5D8B] w-full p-2 text-white font-bold" href='http://moodmuv-back-production.up.railway.app/api/auth/${verify}/${uniqueString}'>Verificar</a>
    </div>
  </div>
</body>
</html>
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
