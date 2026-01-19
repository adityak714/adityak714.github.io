---
title: "Investigating Bias in Facial Recognition with Representation on the LFW Dataset"
excerpt: "<img src='/images/bias-in-fr.png' width='100%'>"
collection: portfolio
---

My research stages on analyzing bias on the Labelled Faces in the Wild (LFW) dataset:
- Headpose Estimation​
- Facial Image Representation Analysis in 2D using t-SNE based approximation​
- Race/Gender Misclassification Rates​
- Intra- and Inter-Similarity Density of Facial Images (Bhattacharyya coefficient)​

​Done as a Project in Data Science at Uppsala University. (view [repo](https://github.com/adityak714/impact-of-bias-in-fr)). 

With filtering, a subset was obtained which contains images of individuals that have at least 20 images to their name. ​62 different individuals were obtained from the original dataset, and 20 images were taken for consistency, having 1,240 images total. We use the Deepface toolkit for running the experimentation for this project. We try different facial detector backends: ​dlib​, RetinaFace​, and MTCNN​. 

Gaussian KDE is used for estimating the inter- and intra-distributions, and calculation of the Bhattacharyya Coefficient done using Monte-Carlo based approximation techniques.​ Uncertainties on the received BC value are also estimated with Bootstrapping, at 95% C.I. 

The implementation was done in Python.