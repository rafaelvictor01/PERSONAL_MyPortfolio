import { setCookie } from 'nookies'
import { useEffect, useState } from 'react'
import { SettingsConstants } from '../../constants/SettingsConstants'
import { usePersistedStateResponseTP } from './types/usePersistedStateResponseTP'
import { usePersistedStateUtils } from './utils/usePersistedStateUtils'

/**
 * @author rafaelvictor01
 * @param "key" será o NOME dado ao valor persistido nos cookies
 * @param "value" será o valor que deseja-se persistir nos cookies
 * @returns Hook personalizado para persistir dados nos cookies no browser e, também, em um state comum.
 * @todo - Estudar alguma forma de fazer com que este hook seja capaz persistir de persistir mais do
 * que apenas strings nos cookies. (usar tipos genéricos)
 * - tentativa 1) usar JSON.stringify() -> falhou
 *
 * OBS: Lembrar que se um dia esse hook precisar ser adaptado para uso no React puro (sem o next)
 * é mais fácil e conveniente usar o localStorage do browser.
 * @see https://www.youtube.com/watch?v=ngVU74daJ8Y
 */
export default function usePersistedState(
  key: string,
  value: string
): usePersistedStateResponseTP {
  const [genericState, setGenericState] = useState(
    usePersistedStateUtils.searchCookiesForInitialState(key, value)
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
