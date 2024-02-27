import { api } from "../config/api"

export const stock = {


    latestPrice: (ticker, callback) => {

        fetch(stock.latestPriceURL(ticker))
            .then((response) => response.json())
            .then((data) => callback(stock.formatPriceData(data)))

    },

    latestPriceURL: (ticker) => {
        return `${api.base_url}/data/CORE/INTRADAY_PRICES/${ticker}?token=${api.api_token}`
        //https://api.iex.cloud/v1/data/CORE/INTRADAY_PRICES/MSFT?token=pk_bbc67826bbaf4fc9922f1bea4c84fdcc
        //https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=V09HNKNYM1Q2QLY7
    },

    formatPriceData: (data) => {
        const stockData = data[data.length - 2]
        const formattedData = {}
        formattedData.date = stockData.date
        formattedData.time = stockData.label
        formattedData.high = stockData.high
        formattedData.low = stockData.low
        formattedData.average = stockData.average
        formattedData.close = stockData.close
        formattedData.volume = stockData.volume
        return formattedData
    }


}