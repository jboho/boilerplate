/**
 * Test for Local Storage
 *
 * Evaluates whether or not local storage is available
 *
 * @returns {bool}
 */
export const hasStorage = (function () {
  if (typeof localStorage === 'object') {
    try {
      localStorage.setItem('localStorage', 1)
      localStorage.removeItem('localStorage')
    }
    catch (e) {
      if (window.console) {
        console.warn('Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some settings may not save or some features may not work properly for you.')
      }
      return false
    }
  } else {
    return false
  }
  return true
}())
