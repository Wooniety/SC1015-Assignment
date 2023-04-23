# SC1015 Mini-Project

**Flight Delay Analysis**

## Getting Started
> Note: All the cells have already been run and viewable on Github. It takes very long to run the whole project again including the model training
1. Clone the repository to your local machine.
2. (Optional) Activate the virtual environment with the required python packages
3. Install the required Python packages by running `pip install -r requirements.txt` in your terminal.
4. Create the folder `data` in the same directory as `Main.ipynb`
5. Download dataset into `data` folder (Refer to [#Datasets]())
6. Run `Main.ipynb`

## Dataset
The dataset used in this project contains information about flights in the United States from 2019 to 2022, including departure and arrival times, origin and destination cities, and delay times. The dataset is publicly available on Kaggle, and it contains over 20 million records.

[https://www.kaggle.com/datasets/robikscube/flight-delay-dataset-20182022]()

In the project however, not all files were used and were also renamed. This can be downloaded at [https://drive.google.com/drive/folders/11L423eF2E4aqQM66Ucd2vvKF-tdlGUMU?usp=sharing]() **HIGHLY RECOMMENDED**

## The project

### Problem Definition
- How can we predict a flight delay using variables that are within a consumers control?

### Contributors
- Krishnan Akshar Dhruv (@Akshark11)
- Koh Heng Woon (@Wooniety)
- Mulani Mythili Janak (@milimalism)

### Overview
The project starts with data cleaning, which includes categorizing columns, removing unnecessary data and checking the completeness of the dataset. The exploratory data analysis section investigates airlines, types of delays, and flights categorized by time and location.

The project also includes building a predictive model using machine learning, with the aim of improving accuracy by adding more features to the model. The machine learning section covers training, baseline models, and polynomial features.

### Conclusions
- Covid had a heavy impact on the aviation landscape
- Features that can affect delays:
    - Airline
    - Origin
    - Destination ('Dest')
    - Month
    - The day of the week ('DayOfWeek')
- Polynomial Features do not affect performance of tree models but regression models instead
- Too little features is likely to have poor accuracy and adding more features and data to the model is likely to help improve the model
- Decision Tree and Extra Tree models are very simliar

### What did we learn
- Other kinds of visualizations to communicate findings for EDA such as plotly
- How to train and evaluate machine learning models using scikit-learn
    - DecisionTreeClassifier
    - ExtraTreeClassifier
    - BernoulliNB
    - BaggingClassifier
    - RandomForestClassifier
- Polynomial features
- Concepts about Precision, Recall, and F1 Score
- Git for version control and collaborate with others on a codebase