# Website
In conjunction with our comprehensive data analysis, we have developed a user-friendly website to share our findings, statistics, and engage with a broader audience. The website serves as a platform for individuals to contribute to our ongoing survey, promoting a collaborative approach to understanding student well-being and academic success.

Data Analysis and Statistics:
• Our website presents in-depth data analysis and statistics derived from the survey responses.
• Users can explore visualizations, trends, and correlations to gain insights into the complex interplay of factors influencing student well-being and academic results.
Open-Source Collaboration:
• As part of our commitment to openness, we envision making our statistical models and analyses open source.
• This initiative encourages collaboration, allowing researchers and developers to contribute to the project’s growth and improvement.
Interactive Survey Participation:
• The website includes an interactive survey form where individuals can contribute their responses.
• We encourage participants to share their experiences, providing valuable data to enhance the richness of our analyses.
Personalized Tips for Academic Improvement:
• A dedicated feature offers personalized tips for academic improvement based on user-provided information.
• For future enhancement : Users can input key details, and our system, powered by an OpenAI API, generates tailored recommendations to enhance academic performance).
• For future enhancement : Implementing the model to predict future grades.

Real-time Updates (Future Enhancement):
• In future iterations, we plan to implement real-time updates for statistics, ensuring users have access to the latest insights.
• This feature aims to create a dynamic and evolving platform, reflecting the changing landscape of student experiences and well-being.

4.2 Future Roadmap
Our future roadmap includes refining the website’s interface, expanding the range of statistical analyses, and integrating more real-time features. By incorporating OpenAI’s API for personalized tips, we aim to offer users actionable recommendations to support their academic journey.
In essence, our website is designed to be a dynamic hub for data-driven insights, community collaboration, and continuous improvement in understanding and enhancing student well-being and academic success.

# Notebook

Data Preprocessing
Data Encoding
Exploratory Data Analysis Story:
Understanding Student Well-being
Corrolation
Features analysis

Machine Learning
1. Creating X, and Y matrices and applying oneHotEncoding for categorical Data.

2. Applying Scaling, we will convert our numerical numbers into ratios between 1 and 0, so then when we will apply ADASYN oversampling we will give extra room For the algorithm to generate more synthetic rows without duplicates.

3. Since our data is unbalanced and we have very few data points for classes like 1 (Which is the lowest Academic results level), we will use a synthetic Data Generation ADASYN, to help us generate more data so our machine learning model could learn from those extra data points.
Before moving Further we will use a dimensionality reduction technique, to compact our 68 features into a 2 dimensional matrix without sacrificing too much information using TSNE, and this will help us to visualize the scatter plot of our target variable before and after the data generation algorithm.
We could see now that the ADASYN Generated some data points which look quite reasonable especially for class 1.
As Expected thanks to scaling the ADASYN method generated 0 duplicate rows in our data.

4. We will split and train our data using StratifiedKfold technique, for a more robust evaluation and as metrics we will use accuracy and f1 score

# Dataset

We did a survey to get information. The survey assesses various life dimensions, mental, physical, and social, to summarize overall well-being. It examines mental health, stress, lifestyle, social interactions, and academics. Our Survey contains 26 questions

How would you rate your overall mental well-being?
• Type : Integer
• Description : This feature captures the respondent’s self-assessment of their overall mental well-being. It serves as a subjective measure of mental health, potentially influencing academic performance.

How often do you feel stressed on a typical week?
• Type : Integer
• Description : This feature quantifies the frequency of stress experienced by respondents in a typical week. Stress levels can impact academic performance, and this information provides insight into the respondents’ stress patterns.

How frequent have you experienced feelings of excessive worry or anxiety in the past month?
• Type : Object
• Description : This categorical feature indicates the frequency of excessive worry or anxiety in the past month. It provides additional context to understand the mental state of the respondents.

Over the past month, how frequent have you experienced a persistent low mood or a lack of interest in activities you usually enjoy?
• Type : Object
• Description : Similar to the previous feature, this one assesses the frequency of low mood or lack of interest. It can offer insights into emotional well-being and potential links to academic engagement.

2
2.1. The Survey 3

How would you rate your overall physical health?
• Type : Integer
• Description : This feature provides a self-assessment of overall physical health. Physical well-being can impact cognitive function and, consequently, academic performance.

Do you have any existing medical conditions that you think may impact your physical health?
• Type : Object

How many times do you exercise with moderate to high intensity in a week?
• Type : Integer

On average, how many hours of sleep do you get per night?
• Type : Object

Have you noticed any changes in your sleep patterns that may be related to your mood?
• Type : Object

How frequently do you engage in substance use (e.g., alcohol, tobacco, recre-ational drugs)?
• Type : Object

How much water do you typically drink in a day?
• Type : Object

Do you notice any physical symptoms (e.g., headaches, muscle tension) when you are stressed?
• Type : Object

How would you rate the contribution of your physical health to your overall well-being?
• Type : Integer

How satisfied are you with your current social life?
• Type : Integer
• Description : Social satisfaction is a subjective measure of the respondents’ contentment with their social connections. Social well-being can influence mental health and, consequently, academic performance.

2.1. The Survey 4

How often do you participate in group activities or gatherings?
• Type : Object
• Description : This categorical feature provides information about the frequency of participation in group activities. Social engagement can contribute to overall well-being and academic success.

In challenging times, how comfortable do you feel seeking support from your peers?
• Type : Object
• Description : This feature gauges the comfort level of seeking support from peers during challenging times, reflecting the importance of social support in coping with stressors.

Have you experienced any feelings of loneliness or isolation recently?
• Type : Object

Are you a member of any clubs or organizations within your school or community?
• Type : Object
• Description : This categorical feature indicates whether respondents are part of any clubs or organizations. Involvement in extracurricular activities can influence social connections and overall well-being. 

How would you rate how involvement in such groups influenced your social connections?
• Type : Object
• Description : This feature assesses the perceived impact of group involvement on social connections. It provides insights into how extracurricular activities contribute to the respondents’ social well-being.

How would you describe your relationship with your family members?
• Type : Object
• Description : This subjective feature captures respondents’ descriptions of their relationships with family members. Family dynamics can play a role in both mental health and academic performance.

Do you feel that family dynamics impact your social life?
• Type : Object
• Description : This categorical feature explores the perceived impact of family dynamics on social life. It provides insights into the interconnectedness of family relationships and social well-being.

