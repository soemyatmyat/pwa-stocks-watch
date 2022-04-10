const config=require('./config')//load the configuration from config > config.js
const axios=require('axios')
const axios_options={
    method: 'GET',
    url: '',
    headers: {
        'x-api-key': config.axiosKey
    }
}

/*
axios.request(axios_options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
})
*/
module.exports = {
    axios:axios,
    options:axios_options
}
