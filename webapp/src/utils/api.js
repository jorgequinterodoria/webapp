const api = async () => {
    try {
        const res = await fetch("https://localhost:7104/api/SalesCustomerPrediction", {
            method: 'GET',
            mode: 'cors', // Habilita CORS
            headers: {
                'Accept': 'application/json', // Especifica el tipo de contenido que esperas recibir
                // Agrega cualquier otra cabecera requerida aquí
            },
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default api;