module.exports = class HttpError {
  /**
   * @param {number} code
   * @param {string} [message]
   * @param {string} [type]
   */
  constructor (code, message, type) {
    this.code = code
    this.message = message
    this.type = type
  }
}
