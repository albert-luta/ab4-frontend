import axios from "axios";

export default axios.create({
	baseURL: "https://5e70de5b667af7001631751a.mockapi.io",
	timeout: 5000
});
