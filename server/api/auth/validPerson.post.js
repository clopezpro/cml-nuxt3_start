
import { M_person } from "~~/server/model/person";
import { M_apis } from "~~/server/model/system";
import axios from "axios";
export default defineEventHandler(async (event) => {
	try {
		const { identity } = await readBody(event); 
		if (!identity) {
			throw "No se recibe el documento de Identidad ";
		}
		const personDB = await M_person.findOne({ identity });
        if(!personDB){
            const API = await M_apis.findOne({"type.cod": 1});
            if(!API) throw "No hay API para validar Documento de indentidad" 
            
            const { data } = await axios.get(`${API.resource}?documento=${identity}&3541`);
            return data;
        }else{
            delete personDB._doc.user.password;

            return { result: 2,...personDB._doc };
        }
		return { result: 1 };
	} catch (err) {
		return {
			result: 0,
			error: `${typeof err == "string" ? err : err.toString()} `,
		};
	}
});


/* const myHandler = (req, res) => {
    console.log(req.headers, res);
	return { result: 1 };
};

export default eventHandler(myHandler); */

/* const express = require("express");
const { M_apis } = require("../..model/system");
const { M_person } = require("../..model/person");
router.post("/", async (req, res) => {
	
	try {
		const { identity } = req.body;

		if (!identity) {
			throw "No se recibe el documento de Identidad ";
		}
		const personaDB = await M_person.findOne({ identity });
		console.log(personaDB);
		return res.json(  { result: 1 });
	} catch (err) {
		return res.json( {
			result: 0,
			error: `${typeof err == "string" ? err : err.toString()} `,
		});
	}
});

export default router; */