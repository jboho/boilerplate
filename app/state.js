import * as storage from './persistence/storage'

export const initialState = {
  application: {
    locale: storage.get('locale') || 'en'
  }
}
