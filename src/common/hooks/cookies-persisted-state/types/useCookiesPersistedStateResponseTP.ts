import { Dispatch, SetStateAction } from 'react'

/**
 * @author rafaelvictor01
 * @returns - type personalizado para ser o retorno do hook usePersistedState
 * - O retorno deste hook personalizado precisa NECESSÁRIAMENTE simular O MESMO
 * retorno de um useState.
 */
export type useCookiesPersistedStateResponseTP = [
  string,
  Dispatch<SetStateAction<string>>
]
