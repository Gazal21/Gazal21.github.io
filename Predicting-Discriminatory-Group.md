---
layout: page
title: Predicting Discriminatory Group
description: Short description of the project
---

# Predicting Discriminatory Group

## Overview
In this project, I developed a machine learning model to predict the target group of discriminatory text. Using NLP techniques, I transformed raw text data into vector representations and trained a classifier to accurately identify the demographic or social group each discriminatory text was directed toward. This project involved exploring various NLP techniques, model training, and implementing model interpretability.

## Tools and Techniques
- Python
- NLTK - Text Preprocessing
- Gensim - Word2vec embeddings with Continous Bag of Words (CBOW) and Skip-gram models
- PCA
- LIME (Local Interpretable Model-Agnostic Explanations)
- Matplotlib / Seaborn

## Key Features
1. Exploratory Data Analysis (EDA):

Conducted initial EDA to understand data distributions, keyword frequencies, and common themes within discriminatory texts.
Visualized word distributions and identified patterns in text length, unique words, and group categories.

2.Data Preprocessing:

Cleaned the dataset by removing stopwords, punctuation, and unnecessary symbols.
Tokenized and normalized the text to improve model performance and reduce noise.

3.Text Vectorization:

Used Word2Vec with Continuous Bag of Words (CBOW) and Skip-gram architectures to convert words into dense vector representations.
Experimented with vector sizes ranging from 64 to 300 to optimize model performance based on word embeddings.

4.Dimensionality Reduction with PCA:

Applied Principal Component Analysis (PCA) to reduce the high-dimensional word embeddings into a more manageable number of features.
This helped to reduce computational costs and improve the interpretability of model predictions.

5.Model Development:

Developed a Support Vector Machine (SVM) classifier to predict the target group of each discriminatory text.
Tuned hyperparameters to optimize the SVM model for accuracy and recall on the test set.

6.Model Interpretability with LIME:

Implemented Local Interpretable Model-Agnostic Explanations (LIME) to explain the predictions made by the SVM classifier.
LIME helped identify which words and phrases were most influential in classifying the target group, adding transparency to the model.

## Results
Explain the main results or findings of your project. You can also include charts, tables, or example outputs if you want.
- Performance: Achieved high accuracy and recall in predicting target groups, which indicates that the model can effectively differentiate between texts targeting various groups.
- Insights: LIME interpretations provided a deeper understanding of discriminatory language patterns, revealing critical words or phrases that contribute to discrimination detection.
- Challenges Overcome: Effectively balancing model accuracy with interpretability, managing the high-dimensional embeddings, and enhancing the model’s generalization on unseen data.

## Repository Link
[View Project Code on GitHub](https://github.com/Gazal21/Predicting-Discriminatory-Group.git)
