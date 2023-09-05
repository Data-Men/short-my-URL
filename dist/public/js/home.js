
const BtnClick=async () => {
    console.log(document.getElementById("longUrl").textContent);
    const postData = {
        longUrl: document.getElementById("longUrl").value,
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };
    try {
        const response = await fetch("/api/", requestOptions)
        if (response.status == 201) {
            console.log(await response.json());
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}