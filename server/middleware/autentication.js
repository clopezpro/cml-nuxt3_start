
import  jwt from "jsonwebtoken";
const { PASS_TOKEN } = useRuntimeConfig();

export default defineEventHandler(async (event) => {



	 const isApiProted = /^\/api\//.test(event.node.req.url);
	 const isApiFree = /^\/api\/auth\//.test(event.node.req.url);

	if (isApiProted && !isApiFree) {
		if (!event.node.req.headers?.authorization) {
			throw new Error("No logueado");
		}
		const token = event.node.req.headers.authorization?.split(" ")[1];
		const decoded = verifyJWT(token, PASS_TOKEN);
		event.node.req.user = decoded;
	}
})
const verifyJWT = (token, password) => {
	try {
		const decoded = jwt.verify(token, password);
		return decoded;
	} catch (err) {
		throw new Error("Invalid token");
	}
};
let verificaRol = (req, res) => {
	let rol = req.usuario.role;
	console.log(rol);
	if (rol !== "ADMIN") {
		return res.status(401).json({
			result: 0,
			mensaje: "Rol no autorizado!",
		});
	}
};

/* export default defineNitroPlugin((nitroApp) => {

	 console.log("Nitro plugin", nitroApp);
	 return;
	if (!req.headers?.authorization) {
		return res.json({
			result: 401,
			error: "NO ESTA LOGUEADO",
		});
	}
	const token = req.headers.authorization?.split(" ")[1];
	const decoded = verifyJWT(token, PASS_TOKEN);
	req.user = decoded;
	next();
});

const verifyJWT = (token,password) => {
    try {
        const decoded = jwt.verify(token, password);
        return decoded;
    } catch (err) {
        throw new Error('Invalid token');
    }
};
let verificaRol = (req, res, next) => {
	let rol = req.usuario.role;
	console.log(rol);
	if (rol !== "ADMIN") {
		return res.status(401).json({
			result: 0,
			mensaje: "Rol no autorizado!",
		});
	}
	next();
}; */