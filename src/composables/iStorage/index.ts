import { MaybeComputedRef, RemovableRef, useStorage as useVueUseStorage, UseStorageOptions } from '@vueuse/core'
import { useIStorageCookie } from './cookies'
import { I_STORAGE } from '~/config/constant'

const storageTypes = ['cookies', 'localStorage', 'sessionStorage'] as const
type StorageType = (typeof storageTypes)[number]
type StorageKey = (typeof I_STORAGE.KEYS)[number]

export const useIStorage = <T>(
  key: StorageKey,
  defaults: MaybeComputedRef<T>,
  storage: StorageType = I_STORAGE.DEFAULT_STORAGE as StorageType,
  options: UseStorageOptions<T> = {}
): RemovableRef<T> => {
  let newStorage
  if (storage === 'localStorage') {
    newStorage = undefined
  } else if (storage === 'sessionStorage') {
    newStorage = sessionStorage
  } else if (storage === 'cookies') {
    newStorage = useIStorageCookie()
  }

  return useVueUseStorage<T>(I_STORAGE.PREFIX + key, defaults, newStorage, {
    ...options,
    mergeDefaults: true,
  })
}
