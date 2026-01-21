// PodAi.jsx
import React, { useState } from 'react';
import './PodAi.css';

export const PodAi = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResponse('');

    //<><script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script><script src="https://files.bpcontent.cloud/2024/10/20/06/20241020062610-VVARIGXJ.js"></script></>

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response from the server.');
      }

      const data = await res.json();
      if (data.success) {
        setResponse(data.response);
      } else {
        throw new Error(data.message || 'Unexpected error occurred.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="podai-container">
      <h1>LLM Text Generator</h1>
      <form onSubmit={handleGenerate}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          rows="6"
        />
        <button type="submit" disabled={loading || prompt.trim() === ''}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      {error && <div className="error">Error: {error}</div>}
      {response && (
        <div className="response">
          <h2>AI Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default PodAi;
