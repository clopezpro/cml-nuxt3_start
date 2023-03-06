
import { Schema, model } from "mongoose";
const apiSchema = new Schema({
	resource: { type: String, trim: true, unique: true },
	type: {
		cod: { type: Number, unique: true },
		name: { type: String },
	},
	status: { type: Boolean, default: true },
});

export const M_apis = model("sys.apis", apiSchema, "sys.apis");
export function exa() {
	console.log("exaaa");
}