
const trackBtn = async () => {
    showLoader()
    const postData = {
        shortUrl: document.getElementById("shortUrl").value,
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    };
    try {
        const response = await fetch("/api/matric", requestOptions)
        if (response.status == 200) {
            const res = await response.json();
            console.log(res);
            document.getElementById("containe1").style.display = 'none';
            document.getElementById("containe2").style.display = 'flex';
            document.getElementById('longUrl').value = res.data.longUrl;
            document.getElementById("shortUrl1").value = res.data.shortUrl;
            document.getElementById("count").textContent =`Visits: ${res.data.visitCount}`;
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
