import axios from "axios";

const instance = axios.create({
	baseURL: "https://mashape-community-urban-dictionary.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "262cf58710mshc375870cb9ea1f3p1d34d9jsnb2243f9c22d9",
		"X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
	},
});

export default instance;
