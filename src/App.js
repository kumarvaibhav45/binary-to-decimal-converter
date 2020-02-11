import React, { useState } from 'react';
import binaryToDecimalConverter from './services/Binary-to-decimal';
import checkError from './services/Error-handler';
import sanitizeInput from './services/sanitize-input';
import cog from './assets/cog.svg';

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const inputChangeHandler = async value => {
    setInput(sanitizeInput(value));
    setResult('');
    const { error } = await checkError(value);
    setError(error);
  };

  const formSubmitHandler = async () => {
    const { error } = await checkError(input);
    if (error === '') {
      setLoading(true);
      const value = await binaryToDecimalConverter(input);
      setTimeout(() => {
        setResult(value);
        setLoading(false);
      }, 1000);
    }
    setError(error);
  };
  return (
    <div className='App'>
      <h1>binary to decimal converter</h1>
      <div className='wrapper'>
        {loading && (
          <div className='loading-animation'>
            <img src={cog} alt='loading...' />
          </div>
        )}
        <form>
          <div className='form-control'>
            <label htmlFor='input'>numbers :</label>
            <input
              name='input'
              placeholder='Enter Here...'
              value={input}
              onChange={({ target: { value } }) => inputChangeHandler(value)}
            />
            <small className='error-subtext'>{error}</small>
          </div>
          <button
            type='submit'
            onClick={e => {
              e.preventDefault();
              formSubmitHandler();
            }}
          >
            convert
          </button>
        </form>
        <div className='result'>
          result:
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
