import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		rules: {
			// 'no-restricted-imports': [
			// 	'error',
			// 	{
			// 		patterns: [
			// 			{
			// 				group: ['../*'],
			// 				message: 'Use absolute imports with @/ prefix instead'
			// 			},
			// 			{
			// 				group: ['@/modules/*/*'],
			// 				message: 'Import from module index.ts instead'
			// 			}
			// 		]
			// 	}
			// ],
			// 'import/no-relative-parent-imports': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unused-vars': 'off'
		}
	}
]

export default eslintConfig
