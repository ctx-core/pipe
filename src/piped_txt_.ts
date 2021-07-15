import { is_piped_ } from './is_piped_'
export async function piped_txt_():Promise<string> {
	let piped_file_txt = '.js'
	return new Promise(resolve => {
		if (is_piped_()) {
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
	piped_txt_ as _txt__piped
}
