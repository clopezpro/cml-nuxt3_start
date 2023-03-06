import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
	dayjs.extend(utc);
	dayjs.extend(timezone);
export default {

    toServerBirth(date){
        return dayjs(date).toDate();
    },
	formatoLargo(fecha) {
		return dayjs(fecha).format("DD/MM/YYYY HH:mm:ss");
	},
	formatoCorto(fecha) {
		return dayjs(fecha).format("DD/MM/YYYY");
	},
    
	// ...
};
