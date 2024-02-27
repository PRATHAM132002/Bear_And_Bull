# Stock Price and News Tracker

This project is a React application that tracks the latest stock prices using the Alpha Vantage API and provides related news using the News API.

## Features

- Displays the latest stock price data for a given ticker symbol.
- Updates the data periodically to provide real-time information.
- Utilizes the Alpha Vantage API to fetch stock price data.
- Integrates the News API to fetch relevant news articles related to the selected stock.

## Installation

1. Clone the repository to your local machine:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd stock-price-news-tracker
```

3. Install dependencies:

```
npm install
```

## Usage

1. Obtain API keys from [Alpha Vantage](https://www.alphavantage.co/) and [News API](https://newsapi.org/) if you haven't already.

2. Update the API configuration in `config/api.js` with your API keys:

```javascript
export const api = {
    alpha_vantage: {
        base_url: 'https://www.alphavantage.co',
        api_token: 'YOUR_ALPHA_VANTAGE_API_KEY_HERE'
    },
    news_api: {
        base_url: 'https://newsapi.org/v2',
        api_key: 'YOUR_NEWS_API_KEY_HERE'
    }
};
```

3. Start the development server:

```
npm start
```

4. Access the application in your browser at `http://localhost:3000`.

5. Enter a valid stock ticker symbol in the search bar to view the latest price data and related news articles.

## Credits

- This project uses the [Alpha Vantage API](https://www.alphavantage.co/) to fetch stock price data.
- This project integrates the [News API](https://newsapi.org/) to fetch relevant news articles.
