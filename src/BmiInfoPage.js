import React from 'react';
import Footer from './Footer';
import styles from './BmiInfoPage.module.css';
import { Link } from 'react-router-dom';

function BmiInfoPage() {
    return (
        <div className={styles.bmiInfoPage}>
            <h2>Understanding BMI</h2>
            <p>
                Body Mass Index (BMI) is a widely used screening tool to assess a person's body weight relative to their height. While not a direct measurement of body fat, BMI offers a simple and quick method to categorize weight status, which can indicate health risks.
            </p>
            <h3>How Is BMI Calculated?</h3>
            <p>
                BMI is calculated by dividing an individual's weight in kilograms by the square of their height in meters. This formula provides a number that helps health professionals categorize a person's weight as underweight, normal weight, overweight, or obese.
            </p>
            <h3>BMI Categories</h3>
            <ul>
                <li><strong className={styles.underweight}>Underweight:</strong> A BMI below 18.5 suggests that a person may be underweight, potentially indicating malnutrition or other health issues.</li>
                <li><strong className={styles.normal}>Normal Weight:</strong> A BMI between 18.5 and 24.9 falls within the normal or healthy weight range.</li>
                <li><strong className={styles.overweight}>Overweight:</strong> A BMI between 25 and 29.9 suggests that a person is overweight and may face an increased risk of various health issues.</li>
                <li><strong className={styles.obesity}>Obesity:</strong> A BMI of 30 or above is categorized as obese. Obesity significantly increases the risk of chronic diseases such as heart disease, diabetes, and high blood pressure.</li>
            </ul>
            <h3>Limitations of BMI</h3>
            <p>
                While BMI is a useful tool, it has its limitations. For example, it may not accurately represent the body fat percentage of athletes, pregnant women, the elderly, or those with a particularly muscular build. Therefore, BMI should be considered alongside other measurements and health indicators.
            </p>
            <h3>Conclusion and Body-Positivity</h3>
            <p className={styles.conclusion}>
                At BMI Calculator, we believe in celebrating body positivity and recognizing the uniqueness of every individual. It's essential to remember that BMI is just a number and doesn't define your worth or health in its entirety. Happiness and self-acceptance are paramount. While BMI can offer insights into certain health aspects, it's far from the complete picture of well-being. </p>
            <p>
                We encourage everyone to focus on holistic health, including physical, mental, and emotional well-being. Your happiness and how you feel in your body are what truly matter. Always consult with healthcare professionals for comprehensive health advice and remember to take every health metric, including BMI, with a pinch of salt.
            </p>

            <Link to="/" className={styles.back}>Back to Home</Link>

            <Footer />
        </div>
    );
}

export default BmiInfoPage;
