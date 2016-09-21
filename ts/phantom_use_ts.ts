import { make, validate, use } from './phantom_ts'

const data = make('hello')

const validatedData = validate(data)

use(data)

if (validatedData) {
  use(validatedData)
}
