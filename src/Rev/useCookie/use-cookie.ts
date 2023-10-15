import { useState } from 'react'
import Cookies from 'universal-cookie'

export const useCookieForGatsby = (
  key: string,
  value: string,
  options: any
) => {
  const cookies = new Cookies()
  const [cookie, setCookie] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key)
    }
    cookies.set(key, value, options)
  })

  const updateCookie = (value: string, options: any) => {
    setCookie(value)
    removeItem(value)
    cookies.set(key, value, options)
  }

  const removeItem = (key: any) => {
    cookies.remove(key)
  }

  return [cookie, updateCookie, removeItem]
}
