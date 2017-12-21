import pickBy from 'lodash.pickby'
import http from 'http-status'

export class HttpError extends Error {
  /**
   * @param {number} code
   * @param {string} message
   * @param {string} [type]
   */
  constructor (code, message, type) {
    super(message)
    this.code = code
    this.type = type || http[ this.code ]
  }

  toJSON () {
    return pickBy({
      code: this.code,
      type: this.type,
      message: this.message
    })
  }
}
