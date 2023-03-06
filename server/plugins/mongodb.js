import mongoose from "mongoose";
import SEED_DB from "~~/server/model/seed";
export default defineNitroPlugin(async (nitroApp) => {
	const { mongo, NODE_ENV,SEED } = useRuntimeConfig();
	if (NODE_ENV === "production") {
		var url_conection = `mongodb://${mongo.USER}:${mongo.PASS}@${mongo.IP}:${mongo.PORT}/${mongo.DB}?authSource=admin&readPreference=primary&appname=NODEJS`;
		mongoose
			.connect(url_conection, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
			.then((db) => {
				if(SEED){
					SEED_DB();
				}
				console.log("conectado al db mongo...");
			})
			.catch((err) => console.log(err));
	} else {
		var url_conection = `mongodb://${mongo.IP}:${mongo.PORT}/${mongo.DB}`;
		mongoose
			.connect(url_conection, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			})
			.then((db) => {
				/* mongoose.set("strictQuery", true); */
				if (SEED) {
					SEED_DB();
				}
				console.log("conectado al db " + mongo.DB + " EN " + mongo.IP + " mongo...");
			})
			.catch((err) => console.log("ERRROR AL CONECTAR CON MONGO", err));
	}
});
