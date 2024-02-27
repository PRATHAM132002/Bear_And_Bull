import React from 'react'
import StockRow from './StockRow'
export default function Overview() {
  return (
    
      <div className="container">
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Average</th>
                        <th>Close</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    <StockRow ticker="AAPL"></StockRow>
                    <StockRow ticker="GOOG"></StockRow>
                    <StockRow ticker="MSFT"></StockRow>
                    <StockRow ticker="TSLA"></StockRow>
                </tbody>
            </table>
        </div>
    
  )
}





        
       