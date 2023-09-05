
const trackBtn = async () => {
    showLoader()
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
            const res = await response.json();
            console.log(res);
            document.getElementById("containe1").style.display = 'none';
            document.getElementById("containe2").style.display = 'flex';
            document.getElementById('longUrl1').value = document.getElementById("longUrl").value;
            document.getElementById("shortUrl").value = res.data.ShortUrl
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
    hideLoader()
}

// Show the loader
function showLoader() {
    document.querySelector('.loader-wrapper').style.display = 'flex'; // Use 'flex' or 'block' to show
}

// Hide the loader
function hideLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
}

function reload() {
    window.location.reload()
}