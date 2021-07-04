import { useEffect, useState } from 'react'
import { usePersistedStateResponseTP } from './types/usePersistedStateResponseTP'
import { usePersistedStateUtils } from './utils/usePersistedStateUtils'

/**
 * @author rafaelvictor01
 * @param "key" será o nome dado ao valor persistido nos cookies
 * @param "value" será o valor que deseja-se persistir nos cookies
 * @returns Hook personalizado para persistir dados nos cookies no browser e, também, em um state comum.
 */
export default function usePersistedState<T>(
  key: string,
  value: T
): usePersistedStateResponseTP<T> {
  const [genericState, setGenericState] = useState(
    usePersistedStateUtils.searchCookiesForInitialState<T>(key, value)
  )

  // Responsável por criar ou editar os registros existentes nos cookies!
  // Um cookie será CRIADO quando uma nova chave identificadora de cookie for passada.
  // Um cookie será EDITADO quando um genericState de uma key CONHECIDA for alterado.
  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(value)),
    [key, genericState]
  )

  // Note que o retorno dos dados é exatamente a mesma coisa que se espera de um .useState()
  // Apenas colocamos mais etapas na sua "interpretação". -> A etapa de salvar e manipular os cookies
  return [genericState, setGenericState]
}
