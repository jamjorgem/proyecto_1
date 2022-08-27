import axios from "axios";

/**
 * login method to request
 * @param {string} email 
 * @param {string} password 
 */
export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }
    return axios.post('https://reqres.in/api/login', body)
}

// TODO : obtain all users

export const getAllUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}


export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.post('https://reqres.in/api/users', body)
}

export const updateUser = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}

export const deleteUser = (id) => {

    return axios.delete(`https://reqres.in/api/users/${id}`)
}