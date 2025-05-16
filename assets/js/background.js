/* Remove TV logo. */
chrome.webRequest.onBeforeRequest.addListener(function() {
    return {cancel:true};
  },
  {urls: ["https://static.tradingview.com/static/bundles/branding-source.*"]},
  ["blocking"]);

const openNewChart = (symbol, interval) => {
	chrome.windows.create({
		type: "popup",
		url: `https://tradingview.com/chart?symbol=${symbol}&interval=${interval}`,
	});
};

openNewChart("CRYPTO:BTCUSD", "D");

