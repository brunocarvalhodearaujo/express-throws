// @flow

import { HttpError } from './HttpError'
import http from 'http-status'
import type { Request, Response } from 'express'

/**
 * @param {HttpError} error
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
export function middleware (error: Error | HttpError | any, request: Request, response: Response, next: (stack: any) => void) {
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

  error = {
    code: error.code,
    type: error.type || http[ error.code ],
    description: error.description
  }

  response
    .status(error.code)
    .json({ error })
}
