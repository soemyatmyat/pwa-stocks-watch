const axios=require('../../config/axios')
exports.render = async function(req, res) {

    axios.options.url='https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=APPS,SOFI,RBLX,AVGO,PYPL,AAPL,SE,IIPR,MSFT'
    // fetch from yahoo finance api
    let dataQuote=await axios.axios.request(axios.options)
        .then((response)=> {
            return response.data['quoteResponse']['result']  
        })
        .catch((error)=> {
            console.error(error);
    })

    axios.options.url='https://alpha.financeapi.net/market/get-realtime-prices?symbols=APPS,SOFI,RBLX,AVGO,PYPL,AAPL,SE,IIPR,MSFT'

    let alphaQuote=await axios.axios.request(axios.options)
    .then((response)=> {
        return response.data['data']
    })
    .catch((error)=> {
        console.error(error);
    })
    //console.log(alphaQuote.length)
    //console.log(data.length)
    //pass the data
    res.render('index',{title:'Stock Price',dataQuote:dataQuote,alphaQuote:alphaQuote})
    
}




