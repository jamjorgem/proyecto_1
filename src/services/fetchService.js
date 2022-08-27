export const getAllUsers = async (page) => {

    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    //we return de JSON 
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    //we return de JSON 
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}

export const login = async (email, password) => {
    let details = {
        email: email,
        password: password
    }

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        // cache: 'no-cache',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // },
        body: formBody,
        // mode: 'no-cors',
        // credentials: "omit"
    })
    console.log(response);
    console.log(response.status);
    console.log(response.ok);
    return response.json();
} 