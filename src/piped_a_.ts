import { piped_txt_ } from './piped_txt_.js'
export async function piped_a_():Promise<string[]> {
  const piped_txt = await piped_txt_()
	return piped_txt == null ? piped_txt : piped_txt.split('\n')
}
export {
	piped_a_ as _a1__piped
}
