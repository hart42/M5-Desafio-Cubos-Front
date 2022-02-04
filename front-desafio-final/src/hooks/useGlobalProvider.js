import { useState } from 'react';

function useGlobalProvider() {
    const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false)

    return {
        abrirModalAddCliente,
        setAbrirModalAddCliente
    }
}

export default useGlobalProvider;