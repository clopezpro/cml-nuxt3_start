export const useFunctions = () => {
    const roundTo=(n, digits, dollar = false)=>{
				if (digits === "undefined") {
					digits = 0;
				}
				let multiplicator = Math.pow(10, digits);
				n = parseFloat((n * multiplicator).toFixed(11));
				if (!dollar) {
					return Math.round(n) / multiplicator;
				} else {
					let data = Math.round(n) / multiplicator;
					return data.toFixed(2).replace(/./g, function (c, i, a) {
						return i && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
					});
				}
	}
    return {roundTo}
};