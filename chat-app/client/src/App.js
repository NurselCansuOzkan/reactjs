import {ErrorBoundary} from 'react-error-boundary'
import './App.css';
import {ChatProvider} from './context/ChatContext';
import Container from './components/Container';

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  return (
    
    <ChatProvider>
			<Container />
		</ChatProvider>
    
  );
}

export default App;
