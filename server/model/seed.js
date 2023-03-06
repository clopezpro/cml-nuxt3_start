
const APIS = [
	{
		resource: "https://system.clopezpro.com/ci/ws_identidad.php",
		status: true,
		type: {
			cod: 1,
			name: "CONSULTA DE DOCUMENTOS",
		},
	},
	{
		resource: "https://system.clopezpro.com/ci/ws_identidad_update.php",
		status: true,
		type: {
			cod: 2,
			name: "ACTUALIZA DOCUMENTO CONSULTADO",
		},
	},
	{
		resource: "https://system.clopezpro.com/whatsaap/",
		status: true,
		type: {
			cod: 3,
			name: "SEND WHATSAAP",
		},
	},
];
import { exa, M_apis } from "../model/system.js";
const ADD_API=() => {
	APIS.forEach((rs) => {
		M_apis.findOneAndUpdate(
			{ resource: rs.resource },
			rs,
			{ upsert: true },
			(err, doc) => {
				if (err) console.log(err);

			}
		);
	});
};
export default ADD_API;
