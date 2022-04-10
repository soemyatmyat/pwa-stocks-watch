const axios=require('axios')
const axios_options={
    method: 'GET',
    url: '',
    headers: {
        'x-api-key': 'vyKTz75f6X207sGXz4Ia42kKHGO1V1F39KLo2uOy'
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
