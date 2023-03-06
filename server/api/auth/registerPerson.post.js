import { M_person } from "~~/server/model/person";
import UTIL_DATE from "~~/server/utils/date"
import bcrypt from "bcrypt";
export default defineEventHandler(async (event) => {
	try {
		const form = await readBody(event);
		if (!form) {
			throw "No se recibe el formulario ";
		}
        const full_name=form.lastname+' '+form.name;
        let personDB = await M_person.findOne({
            identity: form.identity
        });
        const birthdate = UTIL_DATE.toServerBirth(form.birthdate);
        let password=null;
        if(form.user.password){
		     password = bcrypt.hashSync(form.user.password, 10);  
        }
        if(personDB){
            let save={
                        full_name,
                        name: form.name,
                        lastname: form.lastname,
                        email: form.email,
                        phone: form.phone || "",
                        address: form.address || "",
                        birthdate,
                    }
            if(password){
                save["user.password"]=password;
            }
            await M_person.updateOne(
                    { _id: personDB._id },
                    { 
                        $set: save
                     }
                );
        }else{
          personDB=  await M_person.create({
                full_name,
                name: form.name,
                lastname: form.lastname,
                email: form.email,
                phone: form.phone || "",
                address: form.address || "",
                identity: form.identity,
                birthdate,
                "user.password": password,
                "user.name": form.user.name,
            });
        }
		return { result: 1, error: "USUARIO CREADO CON EXITO", _id: personDB._id };
	} catch (err) {
        console.log(err)
		return {
			result: 0,
			error: `${typeof err == "string" ? err : err.toString()} `,
		};
	}
});