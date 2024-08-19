function accessCard() {
    fetch("https://api.counterapi.dev/v1/jvhubifro2024/pcpecas/")
        .then(async (res) => {
            const responseContent = await res.json();

            console.log(responseContent.count)
            return responseContent.count
        })
}