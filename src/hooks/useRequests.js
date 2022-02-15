import useGlobal from "./useGlobal";

function useRequests() {
    const { token } = useGlobal();

    async function get(route) {
        try {
            if (token) {
                const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
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
                    'Authorization': `Bearer ${token}`
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
            'Authorization': `Bearer ${token}`
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
                    'Authorization': `Bearer ${token}`
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

    async function put(route, body, id) {
        try {
            const response = await fetch(`https://desafio-modulo-5.herokuapp.com/${route}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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


    async function getCEP(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data)
            }
            return data;

        } catch (error) {
            console.log('error.message');
            return false
        }
    }

    return {
        get,
        getOne,
        getCEP,
        post,
        del,
        put
    }
}

export default useRequests;