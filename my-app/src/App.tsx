import './App.css';
import { Currency } from './components/Currency-converter/Currency';
import { Units } from './components/Units-converter/Units';

const currencies = [
  {

    label: '$',
    value: 'USD',
  },
  {

    label: '€',
    value: 'EUR',
  },
  {

    label: '฿',
    value: 'BTC',
  },
  {

    label: '¥',
    value: 'JPY',
  },
];

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
}

function App() {
  return (
    <div>
      <Currency />
      <Units />
    </div>
  );
}

export default App;
