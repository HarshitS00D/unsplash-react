import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID d2b9567c82dbcec608b004eb931926f63798e225f4aa5eeab9b7224f971cc534'
	}
});
