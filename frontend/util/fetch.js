export default (url_main, options, params) => {
    let url = new URL(url_main, 'http://localhost:3000');
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
   
    const headers = {
        headers: {
            "Content-Type": "application/json",
            "x-csrf-token": document.querySelector("meta[name=csrf-token]").content,
        },
    };

    const defaultOptions = Object.assign(
        {},
        headers,
        options,
    );

    return fetch(url.href.slice(21), defaultOptions).then(res => {
        return res.json();
    });
};