function getAccessCardNum(counterPath, webCounterName) {
    fetch(`https://api.counterapi.dev/v1/jvhubifro2024/${webCounterName}/`)
        .then(async (res) => {
            const responseContent = await res.json();

            let resNum = responseContent.count;

            let resStr = `${"0".repeat(4 - (JSON.stringify(resNum).length))}${resNum}`;

            document.getElementById(counterPath).innerHTML = resStr;
        })
}

function accessCard(webCounterName, webPath) {
    fetch(`https://api.counterapi.dev/v1/jvhubifro2024/${webCounterName}/up`)

    window.location.href = webPath;
}