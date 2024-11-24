import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add an interceptor to handle errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized error (e.g., redirect to login)
            console.log("Unauthorized - redirecting to login");
        }
        return Promise.reject(error);
    }
);