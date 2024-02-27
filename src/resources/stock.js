import axios from "axios";
import { api } from "../config/api";

const stock = {

    latestPrice: async (ticker, callback) => {
        try {
            const response = await axios.get(`${api.base_url}query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${api.api_token}`);
            callback(response.data);
        } catch (error) {
            console.error("Error fetching latest price:", error);
        }
    },
};

export { stock };
