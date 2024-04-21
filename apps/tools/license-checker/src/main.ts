import { prompt } from 'enquirer'
import { init, ModuleInfo, ModuleInfos } from 'license-checker'
import correct from 'spdx-correct'
import satisfies from 'spdx-satisfies'

const allowedLicenses: string[] = [
  'MIT',
  'Apache-2.0',
  'Ruby',
  'BSD-2-Clause',
  'BSD-3-Clause',
  'ISC',
  'CC0-1.0',
  'Unlicense',
  'JSON',
]

// SRE challenge, write your code below

console.log('Hello world!')
