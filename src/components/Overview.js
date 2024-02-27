import React, { useState } from 'react';
import StockRow from './StockRow';

export default function Overview() {
    const [searchQuery, setSearchQuery] = useState('');
    const [newTicker, setNewTicker] = useState('');
    const [stocks, setStocks] = useState(['AAPL', 'GOOG', 'MSFT', 'TSLA']);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddNewTicker = (e) => {
        e.preventDefault();
        if (newTicker.trim() !== '') {
            setStocks([...stocks, newTicker]);
            setNewTicker('');
        }
    };

    return (
        <div className="container">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Ticker..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <form onSubmit={handleAddNewTicker} className="mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add New Ticker..."
                        value={newTicker}
                        onChange={(e) => setNewTicker(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Add
                    </button>
                </div>
            </form>
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
                    {stocks
                        .filter((ticker) =>
                            ticker.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((ticker) => (
                            <StockRow key={ticker} ticker={ticker} />
                        ))}
                </tbody>
            </table>
        </div>
    );
}
