import { Router } from 'express'

export declare class HttpError extends Error {
  constructor(code: number, message: string, type?: string)
}

export default function (): Router
