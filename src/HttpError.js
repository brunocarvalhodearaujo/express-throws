export class HttpError {
  /**
   * @param {number} code
   * @param {string} [description]
   * @param {string} [type]
   */
  constructor (code, description, type) {
    this.code = code
    this.description = description
    this.type = type
  }
}
