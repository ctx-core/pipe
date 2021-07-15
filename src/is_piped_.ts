import { Socket } from 'net'
export function is_piped_():boolean {
	return Socket === process.stdin.constructor
}
export {
	is_piped_ as _is_piped,
	is_piped_ as _is__piped,
}
