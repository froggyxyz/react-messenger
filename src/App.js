import './App.css';
import Message from './components/Message/Message';

const text = 'Hello World!';

function App() {
  return (
    <div>
      <Message message={text} />
    </div>
  );
}

export default App;
