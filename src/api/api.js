import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2edd2819-b0ad-485e-8b5e-32cdb06a691f'
    },
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(
        `users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
};

export const unfollowOnUser = (id) => {
    return instance.delete(
        `follow/${id}`).then(response => response.data);
};

export const followOnUser = (id) => {
    return instance.post(
        `follow/${id}`).then(response => response.data);
};

export const getOnUserProfile = (id) => {
    return instance.get(
        `profile/${id}`).then(response => response.data);
};

export const getOnMe = () => {
    return instance.get(
        `auth/me`).then(response => response.data);
};

export const login = () => {
    return instance.get(
        `auth/login`).then(response => response.data);
};

export const loginPost = (email, password, rememberMe = false) => {
    return instance.post(
        `auth/login`, {email, password, rememberMe}).then(response => response.data);
};

export const logout = () => {
    return instance.delete(
        `auth/login`).then(response => response.data);
};

export const getProfile = (id) => {
    return instance.get(`profile/${id}`);
}

export const getStatus = (id) => {
    return instance.get(`profile/status/${id}`);
}

export const updateStatus = (status) => {
    return instance.put(`profile/status/`, {status: status});
}