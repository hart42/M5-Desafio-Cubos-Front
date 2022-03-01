import { useContext } from "react";
import CobrancasContext from "../context/CobrancasContext";

function useCobrancas() {
  return useContext(CobrancasContext);
}

export default useCobrancas;
