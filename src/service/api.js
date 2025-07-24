const URL_BASE = import.meta.env.VITE_API_URL;

export const api = {
    async get(endpoint) {
        const response = await fetch(`${URL_BASE}${endpoint}`);
        return handleResponse(response);
    },

    async post(endpoint, data) {
        const response = await fetch(`${URL_BASE}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    async put(endpoint, data) {
        const response = await fetch(`${URL_BASE}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    async delete(endpoint) {
        const response = await fetch(`${URL_BASE}${endpoint}`, {
            method: 'DELETE',
        });
        return handleResponse(response);
    },
}

const handleResponse = (response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    if (response.status === 204) {
        return null; // No content
    }
    return response.json();
}