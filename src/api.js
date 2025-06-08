import axios from "axios";

const API_POSTS = "https://dummyjson.com/posts";
const API_USERS = "https://dummyjson.com/users";

export const fetchPosts = () => axios.get(API_POSTS);
export const fetchPostById = (id) => axios.get(`${API_POSTS}/${id}`);
export const fetchUsers = () => axios.get(API_USERS);
export const fetchUserById = (id) => axios.get(`${API_USERS}/${id}`);
