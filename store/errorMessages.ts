import { create } from 'zustand'

type ErrorMessagesStore = {
	isOpen: boolean
	messages: string[]

	setIsOpen: (isOpen: boolean) => void
	setMessages: (messages: string[]) => void
}

export const useErrorMessagesStore = create<ErrorMessagesStore>((set) => ({
	isOpen: false,
	messages: [],

	setIsOpen: (isOpen) => set({ isOpen }),
	setMessages: (messages) => set({ messages }),
}))
