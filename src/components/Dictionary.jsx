import React, { useState } from "react";

const locationData = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Austin", "Dallas"],
    Florida: ["Miami", "Orlando", "Tampa"],
  },
  Australia: {
    Victoria: ["Melbourne", "Geelong"],
    Queensland: ["Brisbane", "Gold Coast"],
    "New South Wales": ["Sydney", "Newcastle"],
  },
};

function CountryStateCity() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleSubmit = () => {
    if (selectedCountry && selectedState && selectedCity) {
      console.log("Selected Location:");
      console.log("Country:", selectedCountry);
      console.log("State:", selectedState);
      console.log("City:", selectedCity);
    } else {
      console.log("Please select a valid Country, State, and City.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Select Location</h1>
      <div className="flex flex-col items-center space-y-4">
        {/* Country Dropdown */}
        <div>
          <label className="block mb-2 text-lg font-medium">Country:</label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {Object.keys(locationData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div>
          <label className="block mb-2 text-lg font-medium">State:</label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedState}
            onChange={handleStateChange}
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {selectedCountry &&
              Object.keys(locationData[selectedCountry]).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div>
          <label className="block mb-2 text-lg font-medium">City:</label>
          <select
            className="p-2 border border-gray-300 rounded"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {selectedState &&
              locationData[selectedCountry][selectedState].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={handleSubmit}
          disabled={!selectedCountry || !selectedState || !selectedCity}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CountryStateCity;
