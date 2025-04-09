import ReactDOM from 'react-dom/client'

import App from '@/app/App'
import '@/app/index.css'
import { RootProvider } from '@/app/providers/root-provider'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<RootProvider>
			<App />
		</RootProvider>
	)
}
