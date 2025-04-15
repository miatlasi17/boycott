'use client'
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [boycottData, setBoycottData] = useState([{ name: '', reason: '' }]);
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearch = async () => {
    if (input.length > 1 && input.length < 20) {
      setLoading(true); // Start loading

      // Prepare keywords

      const keywords = input
        .toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')  // remove special chars
        .split(/\s+/)
        .filter(Boolean);

      keywords.push(input.replace(/\s+/g, '')); // add 'cocacola'

      const orConditions = keywords.map(word => `name.ilike.%${word}%`).join(',');

      const { data, error } = await supabase
        .from('boycott_items')
        .select('name, reason')
        .or(orConditions);

      console.log('Data:', data);

      setLoading(false); // Stop loading

      if (error) {
        setResult('Failed to search.');
        return;
      }

      if (data.length > 0) {
        setResult('Boycott item found!');
        setBoycottData(data);
      } else {
        setResult('Boycott item not found!');
        setBoycottData([]);
      }
    } else {
      setResult('');
      setBoycottData([]);
    }
  };

  return (
    <div className='flex flex-col text-black items-center justify-center min-h-screen bg-gray-100'>
      <div className="flex justify-center items-center">
        <Image
          className="relative top-10" // Class for styling the image
          src="/logo.svg" // Path to the image in the public folder
          alt="Logo" // Alt text for accessibility
          width={250} // Desired width of the image
          height={250} // Desired height of the image
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Search Items</h1>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter item name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Search
          </button>

          {/* Display the dripping blood loader while loading */}
          {loading ? (
            <div className="blood-drip-container">
              <div className="blood-drop" style={{ animationDelay: '0s' }}></div>
              <div className="blood-drop" style={{ animationDelay: '0.2s' }}></div>
              <div className="blood-drop" style={{ animationDelay: '0.4s' }}></div>
            </div>
          ) : (
            <div>
              <p
                className={`text-center mt-4 text-xl font-semibold ${result === 'Boycott item not found!' ? 'text-green-500' : 'text-red-500'}`}
              >
                {result}
              </p>
              {(result === 'Boycott item found!') && <hr className="my-4" />}
            </div>
          )}

          {boycottData.length > 0 && (
            <div className='flex flex-col'>
              {boycottData.map((item, index) => (
                <div key={index} className="mb-4 text-center justify-center items-center">
                  {item.name && <p>Brand Name: <span className='text-red-700 font-bold'>{item.name}</span></p>}
                  {item.reason && <p>Reason: {item.reason}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
