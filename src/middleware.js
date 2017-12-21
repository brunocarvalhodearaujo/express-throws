import { HttpError } from './HttpError'

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
      error = new HttpError(error)
    }

    if (typeof error === 'object') {
      error = new HttpError(error.name || error.message || error.description, error.code, error.error, error.type)
    }

    if (!(error instanceof HttpError)) {
      throw new Error('error must be an instance of Exception, number or object')
    }
  }

  response
    .status(error.code)
    .json({ error: error.toJSON() })
}

export default () => middleware
