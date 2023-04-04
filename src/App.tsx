import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { setupStore } from './store'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={setupStore()}>
          <Router />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
