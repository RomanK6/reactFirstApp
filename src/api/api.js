import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY
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

export const savePhotoAPI = (photos) => {
    const formData = new FormData();
    formData.append("image", photos)
    return instance.put(`profile/photo`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}