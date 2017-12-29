import { HttpError } from './HttpError'
import http from 'http-status'

/**
 * @typedef {{}} Request
 * @typedef {{ status: (code: number) => Response, json: (data: any) => Response }} Response
 * @typedef {(stack: any) => void} NextFunction
 */

/**
 * @param {HttpError | Error} error
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {void}
 */
function middleware (error, request, response, next) {
  if (!error) {
    next()
  }

  if (!(error instanceof HttpError)) {
    if (typeof error === 'number') {
      error = new HttpError(error)
    }

    if (typeof error === 'object') {
      error = new HttpError(error.code || error.error, error.name || error.message || error.description, error.type)
    }

    if (!(error instanceof HttpError)) {
      throw new Error('error must be an instance of Exception, number or object')
    }
  }

  response
    .status(error.code)
    .json({
      error: {
        code: error.code,
        type: error.type || http[ error.code ],
        message: error.message
      }
    })
}

export default () => middleware
