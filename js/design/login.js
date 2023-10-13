import { apiPostLogin } from "/js/API/post/login.js";

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

apiPostLogin();