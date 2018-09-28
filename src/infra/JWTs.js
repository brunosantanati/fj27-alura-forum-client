class JWTs {
    static isExpired(jwt) {

        const payloadText = atob(jwt.token.split('.')[1]);
        const payload = JSON.parse(payloadText);

        const expirationDate = new Date(payload['exp'] * 1000);
        return expirationDate <= Date.now();
    }
}

export default JWTs;