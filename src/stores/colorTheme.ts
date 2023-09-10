import {persistentAtom} from '@nanostores/persistent'
import { colorThemeKey } from '../lib/key';

export const colorThemeStore = persistentAtom<'dark' | 'light' |  ''>(colorThemeKey, '');
