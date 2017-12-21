// @flow

export class HttpError {
  code: number
  description: string | void
  type: string | void

  /**
   * @param {number} code
   * @param {string} [description]
   * @param {string} [type]
   */
  constructor (code: number, description?: string, type?: string) {
    this.code = code
    this.description = description
    this.type = type
  }
}
