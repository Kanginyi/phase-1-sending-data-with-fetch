const BASE_URL = "http://localhost:3000/users";

const submitData = (userName, userEmail) => {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(resp => resp.json())
    .then(data => {
        document.body.innerHTML = data.id;
    })
    .catch(error => {
        document.body.innerHTML = error.message;
    })
}

