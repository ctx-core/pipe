import { _is_piped } from './_is_piped'
export async function _piped_txt():Promise<string> {
	let piped_file_txt = ''
	return new Promise(resolve => {
		if (_is_piped()) {
			process.stdin.on('readable', () => {
				let chunk
				while ((chunk = process.stdin.read()) !== null) {
					piped_file_txt += chunk
				}
			})
			process.stdin.on('end', () => {
				resolve(piped_file_txt.trim())
			})
		} else {
			resolve('')
		}
	})
}
export {
	_piped_txt as _txt__piped
}
