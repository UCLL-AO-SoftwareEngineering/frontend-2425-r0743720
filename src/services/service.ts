const url = "http://localhost:8080/hello";

export const getGreeting = async() => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch api");
        }
        return await response.json();
    } catch (error) {
        console.error("Error: could not fetch api", error);
        throw error;
    }
};