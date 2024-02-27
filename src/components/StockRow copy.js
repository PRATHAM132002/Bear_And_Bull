import React, { Component } from "react";
import { stock } from "../resources/stock";

class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {

            }
        }
    }



    applyData(data) {
        this.setState({
            data: data
        })
    }


    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
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
        )
    }
}

export default StockRow;