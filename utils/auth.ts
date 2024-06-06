'use client'

import { useErrorMessagesStore } from "../store/errorMessages"

const { setIsOpen, setMessages } = useErrorMessagesStore.getState()
const apiAuthGoogleRedirectUri = process.env.NEXT_PUBLIC_API_AUTH_GOOGLE_REDIRECT_URI;
const apiAuthHost = process.env.NEXT_PUBLIC_API_AUTH_HOST;

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const endpoints = {
  email: {
    register: '/users/',
    login: '/jwt/create/',
    activate: '/users/activation/',
    update: '/users/update/', 
  },
  google: {
    redirect: `/o/google-oauth2/?redirect_uri=${apiAuthGoogleRedirectUri}`,
    login: '/o/google-oauth2/',
  },
} as const;

type FlattenValues<T> = T extends { [key: string]: infer U } ? (U extends object ? FlattenValues<U> : U) : T
type Endpoint = FlattenValues<typeof endpoints>


export const fetchApiAuth = async (endpoint: Endpoint, params?: any, method: Method = 'POST') => {
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
  const body = JSON.stringify(params);
  const data = { method, headers, ...(method === 'POST' ? { body } : {}) };

  return await fetch(`${apiAuthHost}${endpoint}`, data);
};
export const auth = async (endpoint: Endpoint, params?: any, method: Method = 'POST') => {
	let res, json
	try {
		res = await fetchApiAuth(endpoint, params, method)
		json = await res.json()
		if (res.status >= 400) {
			const messages = Object.values(json).flat() as string[]
			setIsOpen(true)
			setMessages(messages)
		}
	} catch (e) {
		console.error(e)
	}
	return { res, json }
}
