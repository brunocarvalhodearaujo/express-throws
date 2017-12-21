import pickBy from 'lodash.pickby'
import http from 'http-status'

export class HttpError extends Error {
  /**
   * @param {number} code
   * @param {string} [message]
   * @param {string} [type]
   */
  constructor (code, message, type) {
    super(message)
    this.code = code
    this.type = type
  }

  toJSON () {
    return pickBy({
      code: this.code,
      type: this.type || http[ this.code ],
      message: this.message
    })
  }
}
