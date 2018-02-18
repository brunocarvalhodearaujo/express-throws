const middleware = require('./middleware')
const HttpError = require('./HttpError')

Object.defineProperty(exports, '__esModule', { value: true })

Object.defineProperty(exports, 'HttpError', {
  enumerable: true,
  get: () => interopRequireDefault(HttpError).default
})

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: () => interopRequireDefault(middleware).default
})

function interopRequireDefault (obj) {
  return obj && obj.__esModule
    ? obj
    : { default: obj }
}
