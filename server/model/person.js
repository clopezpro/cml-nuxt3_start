import { Schema, model } from "mongoose";
const roles = {
	values: ["ADMIN", "USER"],
	message: "{VALUE} no es un rol válido",
};

const personSchema = new Schema(
	{
		full_name: { type: String, trim: true },
		name: { type: String, trim: true },
		lastname: { type: String, trim: true },
		identity: {
			type: String,
			trim: true,
			unique: true,
			required: [true, "EL NUMERO DE IDENTIDAD ES necesario"],
		},
		email: { type: String, trim: true }, //email primary
		phone: { type: String, trim: true },
		birthdate: { type: Date, trim: true },
		gender: { type: String, trim: true, default: "1" },
		adress: { type: String, trim: true },
		typeId: { type: String, trim: true } /* cedula o ruc */,
		img: { type: String, trim: true },
		tradename: { type: String, trim: true } /* nombre comercial */,
		config_telegram: {
			type: Object,
			default: { active: false, token_bot: "", chat_id: "" },
		},
		user: {
			name: {
				type: String,
				trim: true,
				required: [true, "El nombre es necesario"],
			},
			password: {
				type: String,
				trim: true,
				required: [true, "El password es necesario"],
			},
			active: { type: Boolean, default: true },
			role: { type: String, default: "USER", enum: roles },
		},
	},
	{ timestamps: true }
);


export const M_person = model("persons", personSchema);