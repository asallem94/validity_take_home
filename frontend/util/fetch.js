import { validateToken } from "./../actions/session_actions";

export default (url_main, options, params, new_headers, auth) => {
    let url = new URL(url_main, 'http://localhost:3000');
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    let headers;
    if (new_headers){
        headers = new_headers;
    } else {
        const token = sessionStorage["muzsphere:userToken"] ? JSON.parse(sessionStorage["muzsphere:userToken"]) : null;
        
        
        if (token && token.client) {
            headers = {
                headers: {
                    "Content-Type": "application/json",
                    'access-token': token.accessToken,
                    'expiry': token.expiry,
                    'token-type': token.Type,
                    'uid': token.uid,
                    'client': token.client
                },
            };

        } else {
            headers = {
                headers: {
                    "Content-Type": "application/json",
                    "x-csrf-token": document.querySelector("meta[name=csrf-token]").content,
                },
            };
        }
    }

    console.log(headers);
    // debugger
    const defaultOptions = Object.assign(
        {},
        headers,
        options,
    );

    return fetch(url.href.slice(21), defaultOptions).then(res => {
        saveToken(res.headers, auth);
        return res.json();
    });
};

const saveToken =  (headers, auth)=>{
    if (parseInt(headers.get('expiry')) && new Date().getTime() > (parseInt(headers.get('expiry')) + 300) * 1000) {
        validateToken();
    }
    if (auth){
        const token = {
            'client': headers.get('client'),
            'uid': headers.get('uid'),
            'accessToken': headers.get('access-token'),
            'Type': headers.get('token-type'),
            'expiry': parseInt(headers.get('expiry')),
        };
        // console.log(token)
        sessionStorage.setItem('muzsphere:userToken',
            JSON.stringify(token)
        );
    }
};