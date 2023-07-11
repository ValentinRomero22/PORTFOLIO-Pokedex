import { AppRouter } from "./AppRouter"
import { PokemonProvider } from "./context/PokemonProvider"
import { NotificationProvider } from "./context/NotificactionProvider"

function App() {

	return (
		<div id="app">
			<NotificationProvider>
			<PokemonProvider>
				<AppRouter />
			</PokemonProvider>
			</NotificationProvider>
		</div>
	)
}

export default App