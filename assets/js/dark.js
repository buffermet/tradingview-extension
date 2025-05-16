(async () => {
	const sleep = ms => new Promise(ok => setTimeout(ok, ms));
	const css = `
		html[buffermet-dark=true] {
			background-color: white;
			filter: invert() hue-rotate(180deg) !important;
		}
		html[buffermet-dark=true] video,
		html[buffermet-dark=true] img {
			filter: invert() hue-rotate(180deg) !important;
		}
		html[buffermet-dark=true] div.chart-container {
			filter: invert() hue-rotate(180deg) !important;
		}
	`;
	while (document === undefined) await sleep(0);
	const stylesheet = document.createElement("style");
	stylesheet.innerHTML = css;
	document.documentElement.append(stylesheet);
	const html = document.documentElement;
	html.setAttribute("buffermet-dark", "true");
})();

