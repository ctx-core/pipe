import { _piped_txt } from './_piped_txt'
export async function _piped_a1() {
  const piped_txt = await _piped_txt()
	return piped_txt == null ? piped_txt : piped_txt.split('\n')
}
export {
	_piped_a1 as _a1__piped
}
