import { useState } from 'react';

function useGlobalProvider() {
    const [abrirModalAddCliente, setAbrirModalAddCliente] = useState(false)
    const [abrirModalFeedbackAddCliente, setAbrirModalFeedbackAddCliente] = useState(false)

    return {
        abrirModalAddCliente,
        setAbrirModalAddCliente,
        abrirModalFeedbackAddCliente,
        setAbrirModalFeedbackAddCliente
    }
}

export default useGlobalProvider;