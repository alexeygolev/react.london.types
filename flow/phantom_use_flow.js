/* @flow */

import { make, validate, use } from './phantom_flow'

const data = make('hello')

const validatedData = validate(data)

use(data)

if (validatedData) {
  use(validatedData)
}
