import React, { Component } from "react";
import { stock } from "../resources/stock";

class StockRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }

    applyData(data) {
        // Assuming data is in the new JSON format
        const timeSeries = data["Time Series (1min)"];
        const latestDataKey = Object.keys(timeSeries)[0];
        const latestData = timeSeries[latestDataKey];

        this.setState({
            data: {
                date: latestDataKey.split(" ")[0],
                time: latestDataKey.split(" ")[1], // Extract time from the date-time string
                high: latestData["2. high"],
                low: latestData["3. low"],
                open: latestData["1. open"],
                close: latestData["4. close"],
                average: ((parseFloat(latestData["2. high"]) + parseFloat(latestData["3. low"])) / 2).toFixed(4), // Calculate average
                volume: latestData["5. volume"],
            },
        });
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this));
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
                <td>{this.state.data.high}</td>
                <td>{this.state.data.low}</td>
                <td>{this.state.data.average}</td>
                <td>{this.state.data.close}</td>
                <td>{this.state.data.volume}</td>
            </tr>
        );
    }
}

export default StockRow;
