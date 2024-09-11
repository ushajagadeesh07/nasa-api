import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'daisyui/dist/full.css'; // Import DaisyUI CSS

function App() {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date

  const API_KEY = 'd344Xrq5ruqdXdeNSazTeV7TwxETB7aM170QYYAO';

  // Function to fetch APOD data based on selected date
  const fetchAPOD = async (date) => {
    try {
      setLoading(true); // Set loading to true when fetching new data
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`);
      
      setApodData(response.data);
      setLoading(false);
      setError(null); // Reset error in case of successful fetch
    } catch (err) {
      setError('Error Fetching Data from NASA API');
      setLoading(false);
    }
  };

  // Fetch today's APOD by default on component mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    setSelectedDate(today); // Set default selected date to today's date
    fetchAPOD(today); // Fetch today's data initially
  }, []);

  // Handler for date change
  const handleDateChange = (event) => {
    const date = event.target.value; // Capture the selected date
    setSelectedDate(date); // Update the state with the new selected date
    
    // Fetch data for the selected date
    fetchAPOD(date);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-screen text-center">
      <p className="text-red-500 font-semibold text-lg">{error}</p>
    </div>
  );

  return (
    <div className="h-screen bg-brown-300 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-pink shadow-lg rounded-lg p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2 text-blue-900 text-center">NASA Astronomy Picture of the Day</h1>

        <div className="mb-6 w-full max-w-xs">
          <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Select Date:</label>
          <input
            type="date"
            id="date"
            className="input input-bordered w-full"
            value={selectedDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]} // Ensure the date does not exceed today
          />
        </div>

        {apodData && (
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden max-h-[80vh] w-full">
            <figure className="relative">
              <img src={apodData.url} alt={apodData.title} className="w-full h-auto object-cover max-h-[50vh]" />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-lg font-bold">
                {apodData.title}
              </div>
            </figure>
            <div className="card-body p-4 overflow-auto">
              <p className="text-gray-800 text-base">{apodData.explanation}</p>
              <p className="text-right text-lg text-brown-700 mt-4">Date: {apodData.date}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
