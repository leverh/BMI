import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BmiCalculator from './BmiCalculator';
import BmiChart from './BmiChart';
import Footer from './Footer';
import BmiInfoPage from './BmiInfoPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [calculatedBmi, setCalculatedBmi] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [displayHeight, setDisplayHeight] = useState('');

  // Load BMI from local storage on initial load
  useEffect(() => {
    const storedBmi = localStorage.getItem('userBMI');
    if (storedBmi) {
      setCalculatedBmi(storedBmi);
    }
  }, []);

  // Update local storage whenever BMI changes
  useEffect(() => {
    if (calculatedBmi) {
      localStorage.setItem('userBMI', calculatedBmi);
      setShowSummary(true);
    }
  }, [calculatedBmi]);

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  return (
    <Router>
        <div className={darkMode ? 'App dark-mode' : 'App light-mode'}>
            <button
                className="mode-toggle-button"
                onClick={() => setDarkMode((prevMode) => !prevMode)}
            >
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>

            <Routes>
            <Route exact path="/" element={
                        <>
                    <BmiCalculator
                        weight={weight}
                        setWeight={setWeight}
                        height={height}
                        setHeight={setHeight}
                        feet={feet}
                        inches={inches}
                        setFeet={setFeet}
                        setInches={setInches}
                        setCalculatedBmi={setCalculatedBmi}
                        unit={unit}
                        setUnit={setUnit}
                        setDisplayHeight={setDisplayHeight}
                    />

                    {showSummary && (
                        <div className="summary-section">
                            {/* ... summary section ... */}
                            <h3 className="summary-text">For the information you entered:</h3>
                            <p className="summary-detail">
                                Height: {unit === 'metric' ? `${displayHeight} cm` : displayHeight}
                            </p>
                            <p className="summary-detail">
                                Weight: {weight} {unit === 'metric' ? 'kg' : 'lbs'}
                            </p>
                            <p className="summary-result">
                                Your BMI is {calculatedBmi}, indicating your weight is in the{' '}
                                {getBmiCategory(calculatedBmi)} category for adults of your height.
                            </p>
                        </div>
                    )}
                    <Link to="/about-bmi" className="link">About your BMI</Link>

                    {calculatedBmi && <BmiChart userBmi={calculatedBmi} />}
                    <Footer />
                    </>
}/>
<Route path="/about-bmi" element={<BmiInfoPage />} />
</Routes>
</div>
</Router>
);
}

export default App;