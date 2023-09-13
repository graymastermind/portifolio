import streamlit as st
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

def predict_diabetes():
    # Load the diabetes dataset
    diabetes_data = pd.read_csv('diabetes.csv')

    # Separate the features and target variable
    X = diabetes_data.drop('Outcome', axis=1)
    y = diabetes_data['Outcome']

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Train a random forest classifier
    model = RandomForestClassifier()
    model.fit(X_train_scaled, y_train)

    # Evaluate the model
    accuracy = model.score(X_test_scaled, y_test)
    st.write('Accuracy:', accuracy)

    return model, scaler

def main():
    st.title('Estimate the incidence of diabetes mellitus')
    st.write('Enter the required information to predict diabetes.')

    # Create input fields for the features
    glucose = st.number_input('Glucose', min_value=0)
    bmi = st.number_input('BMI', min_value=0.0)
    age = st.number_input('Age', min_value=0, step=1)
    pregnancies = st.number_input('Pregnancies', min_value=0, step=1)
    dpgf = st.number_input('DiabetesPedigreeFunction', min_value=0)

    # Create a DataFrame with the input values
    input_data = pd.DataFrame({
        'Glucose': [glucose],
        'BMI': [bmi],
        'Age': [age],
        'Pregnancies': [pregnancies],
        'DiabetesPedigreeFunction': [dpgf]
    })

    # Load the trained model and scaler from files (replace with your own paths)
    model = joblib.load('model.pkl')
    scaler = joblib.load('scaler.pkl')

    # Preprocess the input data
    input_data_scaled = scaler.transform(input_data)

    # Make predictions
    prediction = model.predict(input_data_scaled)

    # Show the prediction result
    if prediction[0] == 0:
        st.write('The person is predicted to be diabetes-free.')
    else:
        st.write('The person is predicted to have diabetes.')

if __name__ == '__main__':
    main()
