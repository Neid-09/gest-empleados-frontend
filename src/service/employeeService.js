import { api } from "./api";

const URL_BASE = "/empleados";

export const employeeService = {
    async getAll() {
        return api.get(URL_BASE);
    },

    async getById(id) {
        return api.get(`${URL_BASE}/${id}`);
    },

    async create(data) {
        return api.post(URL_BASE, data);
    },

    async update(id, data) {
        return api.put(`${URL_BASE}/${id}`, data);
    },

    async delete(id) {
        return api.delete(`${URL_BASE}/${id}`);
    },
}
