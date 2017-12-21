import { HttpError } from './HttpError'
import http from 'http-status'

/**
 * @param {HttpError} error
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
function middleware (error, request, response, next) {
  if (!error) {
    next()
  }

  if (!(error instanceof HttpError)) {
    if (typeof error === 'number') {
      error = new HttpError(http[ error ], error)
    }

    if (typeof error === 'object') {
      error = new HttpError(error.type || error.message || error.description, error.code, error.error)
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
        type: http[ error.code ],
        message: error.message
      }
    })
}

export default () => middleware
