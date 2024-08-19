import request from 'request';

function accessCard() {
    let res = request.get("https://api.counterapi.dev/v1/jvhubifro2024/pcpecas/").response;

    console.log(res);
}