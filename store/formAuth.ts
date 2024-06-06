'use client'

import { create } from 'zustand'
import { auth, endpoints } from '../utils/auth'


type FormAuthStore = {
	isOpen: boolean
	type: 'login' | 'register'

	username: string
	firstName: string
	lastName: string
	password: string
	repeatPassword: string
	email: string

	setIsOpen: (isOpen: boolean) => void
	setType: (type: 'login' | 'register') => void

	setUsername: (username: string) => void
	setFirstName: (firstName: string) => void
	setLastName: (lastName: string) => void
	setPassword: (password: string) => void
	setRepeatPassword: (repeatPassword: string) => void
	setEmail: (email: string) => void

	submit: () => void
}

export const useFormAuthStore = create<FormAuthStore>((set) => ({
	isOpen: false,
	type: 'login',

	username: '',
	firstName: '',
	lastName: '',
	password: '',
	repeatPassword: '',
	email: '',

	setIsOpen: (isOpen) => set(() => ({ isOpen })),
	setType: (type) => set(() => ({ type })),

	setUsername: (username) => set(() => ({ username })),
	setFirstName: (firstName) => set(() => ({ firstName })),
	setLastName: (lastName) => set(() => ({ lastName })),
	setPassword: (password) => set(() => ({ password })),
	setRepeatPassword: (repeatPassword) => set(() => ({ repeatPassword })),
	setEmail: (email) => set(() => ({ email })),

	submit: () =>
		set(({ type, username, password, repeatPassword, email, firstName, lastName }) => {
			const data = {
				email,
				password,
				...(type === 'register'
					? {
							re_password: repeatPassword,
							username,
							first_name: firstName,
							last_name: lastName,
					  }
					: {}),
			}

			const fetch = async () => {
				const { res, json } = await auth(endpoints.email[type], data)

				if (type === 'login' && res && res.status < 400) {
					const { access, refresh } = json
					localStorage.setItem('refresh', refresh)
					localStorage.setItem('access', access)
					document.cookie = `access=${access}`
				}
			}
			fetch()
			return { isOpen: false }
		}),
}))
