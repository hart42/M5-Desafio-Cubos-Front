import useGlobal from "./useGlobal";

function useRequests() {
    const token = useGlobal();

    async function get(route) {
        try {
            if (token) {
                const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token.token}`
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data)
                }
                return data;
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getOne(route, id) {
        try {
            const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }

            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function post(route, body, withToken) {

        const config = withToken ? {
            'Authorization': `Bearer ${token.token}`
        } : {}

        try {
            const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...config,
                },
                body: JSON.stringify(body)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }

            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function del(route, id) {
        try {
            const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token.token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }

            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    async function put(route, body) {
        try {
            const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.token}`
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }

            return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    return {
        get,
        getOne,
        post,
        del,
        put
    }
}

export default useRequests;