import { useAuthUserStore } from "@/stores/auth.js";
export default defineNuxtRouteMiddleware(async (to) => {
   
	const { isAuth, verifyToken } = useAuthUserStore();

    const value=await verifyToken()
    
    if (!value) {
					return await navigateTo("/login");
	}
});
