export function GetCount(query) {
    return fetch(`https://api.countapi.xyz/hit/${query}/visits`).then(
        response => response.json()
    ).then(
        data => {
            return data.value
        }
    )
}