import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})

async function register(email, name, password) {
    try {
        const response = await api.post("/register", { email, name, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function login(email, password) {
    try {
        const response = await api.post("/login", { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function logout() {
    try {
        const response = await api.get("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
}
async function getMe() {
    try {
        const response = await api.get("/get-me");
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { register, login, logout, getMe };