import { createContext } from 'react';
import useCobrancasProvider from '../hooks/useCobrancasProvider';

const CobrancasContext = createContext();

export function CobrancasProvider(props) {
    const cobrancasProvider = useCobrancasProvider();

    return (
        <CobrancasContext.Provider value={cobrancasProvider}>
            {props.children}
        </CobrancasContext.Provider>
    )
}

export default CobrancasContext;