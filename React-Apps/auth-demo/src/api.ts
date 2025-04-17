export async function login(email: string, password: string) {
    const response: any = await fetch('http://localhost:3000/user/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    });
    if(!response.ok){
        const message = `Request failed with status ${response.status}`;
        throw new Error(message);
    }
    return response.json();
}