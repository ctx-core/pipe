import { Socket } from 'net'
export function _is_piped() {
	return Socket === process.stdin.constructor
}
export { _is_piped as _is__piped }
