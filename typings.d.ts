export declare class HttpError extends Error {
  constructor(message: string, code?: number)

  toJSON(): {
    code: number,
    message: string,
    type: string
  }
}

export default function (): void
