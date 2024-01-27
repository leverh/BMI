import React, { useState } from 'react';
import styles from './BmiCalculator.module.css';

function BmiCalculator({ weight, setWeight, setCalculatedBmi, unit, setUnit, setDisplayHeight }) {
    const [height, setHeight] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');

    const calculateBMI = () => {
        if (weight > 0 && (unit === 'metric' ? height > 0 : (feet > 0 || inches > 0))) {
            let bmiValue;
            if (unit === 'metric') {
                const heightInMeters = height / 100;
                bmiValue = weight / (heightInMeters * heightInMeters);
                setDisplayHeight(height); // For metric, displayHeight is just height
            } else {
                const totalHeightInInches = parseInt(feet) * 12 + parseInt(inches);
                bmiValue = 703 * weight / (totalHeightInInches * totalHeightInInches);
                setDisplayHeight(`${feet} feet ${inches} inches`); // For imperial, combine feet and inches
            }
            setCalculatedBmi(bmiValue.toFixed(2));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            calculateBMI();
        }
    };

    return (
        <div className={styles.bmiCalculator}>
            <h2 className={styles.calculatorTitle}>BMI Calculator</h2>
            <div className={styles.unitSelector}>
                <label className={styles.labelMetric}>
                    <input 
                        type="radio" 
                        value="metric" 
                        checked={unit === 'metric'} 
                        onChange={() => setUnit('metric')}
                        onKeyDown={handleKeyDown}
                    />
                    Metric
                </label>
                <label className={styles.labelImperial}>
                    <input 
                        type="radio" 
                        value="imperial" 
                        checked={unit === 'imperial'} 
                        onChange={() => setUnit('imperial')} 
                        onKeyDown={handleKeyDown}
                    />
                    Imperial
                </label>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.weightLabel}>Weight ({unit === 'metric' ? 'kg' : 'lbs'}): </label>
                <input 
                    type="number" 
                    className={styles.weightInput}
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.heightLabel}>
                    Height ({unit === 'metric' ? 'cm' : 'feet/inches'}): 
                </label>
                {unit === 'metric' ? (
                    <input 
                        type="number" 
                        className={styles.heightInput}
                        value={height} 
                        onChange={(e) => {
                            setHeight(e.target.value);
                            setDisplayHeight(e.target.value + ' cm');
                        }} 
                        onKeyDown={handleKeyDown}
                    />
                ) : (
                    <div className={styles.imperialInputs}>
                        <input 
                            type="number" 
                            className={`${styles.heightInput} ${styles.feetInput}`}
                            placeholder="feet"
                            value={feet} 
                            onChange={(e) => {
                                setFeet(e.target.value);
                                setDisplayHeight(e.target.value + ' feet ' + inches + ' inches');
                            }} 
                            onKeyDown={handleKeyDown}
                        />
                        <input 
                            type="number" 
                            className={`${styles.heightInput} ${styles.inchesInput}`}
                            placeholder="inches"
                            value={inches} 
                            onChange={(e) => {
                                setInches(e.target.value);
                                setDisplayHeight(feet + ' feet ' + e.target.value + ' inches');
                            }} 
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                )}
            </div>
    
            <button className={styles.calculateButton} onClick={calculateBMI}>Calculate</button>
        </div>
    );
}    

export default BmiCalculator;