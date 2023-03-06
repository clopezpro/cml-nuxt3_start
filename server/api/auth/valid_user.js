/* const { M_apis } = require("../..model/system");
const { M_person } = require("../..model/person");

export default defineEventHandler("test",async (event) => {
    try {
        c
        const {identity} = await readBody(event);

        if(!identity){
            throw "No se recibe el documento de Identidad ";
        }
        const personaDB = await M_person.findOne({identity});
        console.log(personaDB);
	    return { result:1 };
    } catch (err) {
        return {
            result:0,
            error: `${typeof err == "string" ? err : err.toString()} `
        }
    }
    
});
 */