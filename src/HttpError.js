export class HttpError extends Error {
  /**
   * @param {string} message
   * @param {number} code
   */
  constructor (message, code) {
    super(message)
    this.code = code
  }
}
