const CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const powerOf62 = new Array<bigint>(1n, 62n, 3844n, 238328n, 14776336n, 916132832n, 56800235584n, 3521614606208n)

export function base10To62(n: bigint): string {
    let result = ""
    let i = 7;
    while (n > 0) {
        if (n >= powerOf62[i - 1] && n < powerOf62[i]) {
            result = result + CHARSET[Math.floor(Number((n / powerOf62[i - 1])))];
            n = n % powerOf62[i - 1];
        }
        i--;
    }
    return result;
}

export function base62To10(shortUrl: string): bigint {
    let result = 0n;
    for (let i = 0; i < shortUrl.length; i++) {
        result = result + BigInt(CHARSET.indexOf(shortUrl[i])) * powerOf62[shortUrl.length - (i + 1)];
    }
    return result;
}