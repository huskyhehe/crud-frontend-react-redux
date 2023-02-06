import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

const getAll = () => {
    return instance.get("/tutorials");
};

const get = id => {
    return instance.get(`/tutorials/${id}`);
};

const create = data => {
    return instance.post("/tutorials", data);
};

const update = (id, data) => {
    return instance.put(`/tutorials/${id}`, data);
};

const remove = id => {
    return instance.delete(`/tutorials/${id}`);
};

const removeAll = () => {
    return instance.delete(`/tutorials`);
};

const findByTitle = title => {
    return instance.get(`/tutorials?title=${title}`);
};

const tutorialServices = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default tutorialServices;
