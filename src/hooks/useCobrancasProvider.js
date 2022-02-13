import { useEffect, useState } from "react";
import useRequests from "./useRequests";
import useGlobal from "./useGlobal";

function useCobrancasProvider() {
  const requisicao = useRequests();
  const [ cobrancas, setCobrancas ] = useState([]);
  const { token } = useGlobal();

  useEffect(() => {
    if (token) {
      carregarCobrancas();
    }
  }, []);

  async function carregarCobrancas() {
    const result = await requisicao.get('cobrancas');
    setCobrancas(result);
  };

  return {
    cobrancas,
    carregarCobrancas
  };
}

export default useCobrancasProvider;