import { create } from 'zustand'

interface ProfileState {
  profileSettings: { [key: string]: any };
  winQuote: string;
  loseQuote: string;
  drawQuote: string;
    selectedAvatar: string;
    aboutMe: string; 
  updateProfileSetting: (key: string, value: any) => void;
  updateWinQuote: (quote: string) => void;
  updateLoseQuote: (quote: string) => void;
  updateDrawQuote: (quote: string) => void;
   updateSelectedAvatar: (avatar: string) => void; 
    updateAboutMe: (text: string) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  profileSettings: {},
  winQuote: '',
  loseQuote: '',
  drawQuote: '',
   selectedAvatar: '', 
   aboutMe: '',
  updateProfileSetting: (key, value) =>
    set((state) => ({
      profileSettings: { ...state.profileSettings, [key]: value },
    })),
  updateWinQuote: (quote) =>
    set(() => ({
      winQuote: quote,
    })),
  updateLoseQuote: (quote) =>
    set(() => ({
      loseQuote: quote,
    })),
  updateDrawQuote: (quote) =>
    set(() => ({
      drawQuote: quote,
    })),
      updateSelectedAvatar: (avatar) =>
    set(() => ({
      selectedAvatar: avatar,
    })),
      updateAboutMe: (text) =>
    set(() => ({
      aboutMe: text,
    })),
}));

export default useProfileStore;
