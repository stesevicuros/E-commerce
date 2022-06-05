import axios from 'axios';

const BASE_URL =
	process.env.NODE_ENV === 'production'
		? 'https://lama-store.herokuapp.com/api'
		: 'http://localhost:5000/api';
const TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTBlZDJmOGUyZTRkNjcwZTI1MjZiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA3MTkxMSwiZXhwIjoxNjU0MzMxMTExfQ.yg2OQ3ZFA1-OEnbacKhhvUgOHxyhgdm7eNcNgpbLtVs';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
