---
title: "Null-Value Imputation using MICE on Framingham Heart Study dataset"
excerpt: "<img src='/images/mice.png' width='100%'>"
collection: portfolio
---

The Framingham Heart Study dataset was used, consisting of around ~4,200 patient examples with features such as age, isMale, systolic/diastolic blood pressure values, totChol (cholestrol), glucose, BMI, heartRate and more. Done as an individual project for Computer Intensive Statistics at Uppsala University (view [repo](https://github.com/adityak714/multiple-imputation-framingham)).

Datasets can be under-maintained, or there can be missed points or features during data collection.​ Patient tests may be infeasible or incomplete, leading to some points being null.​ Upon analysing the dataset, null values were found in certain crucial features (e.g. 50 null values in the totChol feature, 19 in the BMI feature, and up to 388 in the glucose feature), which could be argued that play, if not significant, a role in effectively predicting the risk of coronary heart disease.

The implementation was done in Python.