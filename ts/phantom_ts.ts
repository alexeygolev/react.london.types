class Data<M> {
  value: string;
  constructor(value: string) {
    this.value = value
  }
}

class Validated {}
class Unvalidated {}

// since we don’t export the constructor itself,
// users with a string can only create Unvalidated values
export function make(input: string): Data<Unvalidated> {
  return new Data(input)
}
const checkLength = (length: number, str: string): boolean => {
  return str.length <= length
}
// returns null if the data doesn’t validate
export function validate(data: Data<Unvalidated>): Data<Validated> | null {
  return checkLength(3, data.value) ? new Data(data.value) : null
}
// can only be fed the result of a call to validate!
export function use(data: Data<Validated>): void {
  console.log('using ' + data.value)
}
