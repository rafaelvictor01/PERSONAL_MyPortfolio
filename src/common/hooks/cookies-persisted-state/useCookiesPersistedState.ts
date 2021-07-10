import { setCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { SettingsConstants } from '../../constants/SettingsConstants'
import { useCookiesPersistedStateResponseTP } from './types/useCookiesPersistedStateResponseTP'
import { useCookiesPersistedStateUtils } from './utils/useCookiesPersistedStateUtils'

/**
 * @author rafaelvictor01
 * @param "key" será o NOME dado ao valor persistido nos cookies
 * @param "value" será o valor que deseja-se persistir nos cookies
 * @returns Hook personalizado para persistir dados nos cookies no browser e, também, em um state comum.
 * @todo - Estudar alguma forma de fazer com que este hook seja capaz persistir de persistir mais do
 * que apenas strings nos cookies. (usar tipos genéricos)
 * - tentativa 1) usar JSON.stringify() -> falhou
 */
export default function useCookiesPersistedState(
  key: string,
  value: string
): useCookiesPersistedStateResponseTP {
  const [genericState, setGenericState] = useState(
    useCookiesPersistedStateUtils.searchCookiesForInitialState(key, value)
  )

  // Responsável por criar ou editar os registros existentes nos cookies!
  // Um cookie será CRIADO quando uma nova chave identificadora de cookie for passada.
  // Um cookie será EDITADO quando um genericState de uma key CONHECIDA for alterado.
  useEffect(() => {
    setCookie(null, key, genericState, {
      path: SettingsConstants.FIRST_VALID_ROUTE_FOR_COOKIES,
      maxAge: SettingsConstants.MAXIMUM_AGE_FOR_ALL_APPLICATION_COOKIES
    })
  }, [key, genericState])

  // Note que o retorno dos dados é exatamente a mesma coisa que se espera de um .useState()
  return [genericState, setGenericState]
}
