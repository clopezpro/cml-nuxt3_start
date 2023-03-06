export default defineEventHandler( async (event) => {
	try {
		const {op}=event.context.params;
		switch(op){
		   case "verify":return verifyLogin(event);
		   case "access":return createLogin(event);
		}
		return { result: 1 };
	} catch (err) {
		return {
			result: 0,
			error: `${typeof err == "string" ? err : err.toString()} `,
		};
	}
});
import { M_person } from "~~/server/model/person";
import bcrypt from "bcrypt";
const verifyLogin = async (event) => {
	const { password, user } = await readBody(event);
	if (!user) {
		throw "No se recibe el usuario";
	}
	if (!password) {
		throw "No se recibe la clave de acceso";
	}
	const userDB = await M_person.findOne({ "user.name": user });
	if (!userDB) {
		throw "No existe el usuario";
	}
	const isValid = await bcrypt.compare(password, userDB.user.password);
	if (!isValid) {
		throw "Usuario o contraseña! inválidos";
	}

	delete userDB._doc.user.password;

	const otherData = [];
	// apply code to search another data relation when user for show in login, example, enterpryses asing 

	return { result: 1, otherData }; 
};
const { PASS_TOKEN } = useRuntimeConfig();
import jwt from "jsonwebtoken";
const createLogin = async (event) => {
	const { password, user, zone } = await readBody(event);
	if (!user) {
		throw "No se recibe el usuario";
	}
	if (!password) {
		throw "No se recibe la clave de acceso";
	}
	const userDB = await M_person.findOne({ "user.name": user });
	if (!userDB) {
		throw "No existe el usuario";
	}
	const isValid = await bcrypt.compare(password, userDB.user.password);
	if (!isValid) {
		throw "Usuario o contraseña! inválidos";
	}

	delete userDB._doc.user.password;

	const otherData = [];
	// apply code to search another data relation when user for show in login, example, enterpryses asing 
	let obj = userDB.toObject();
	obj.zone = zone;
	obj.otherData = otherData;

	let token = jwt.sign(
		{
			data: obj,
		},
		PASS_TOKEN,
		{ expiresIn: 60 * 60 * 24 * 30 }
	);
	setCookie(event, "token", token);
	return { result: 1}; 
};