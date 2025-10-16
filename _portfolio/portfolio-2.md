---
title: "SVD for Low-Rank Approximation and Pattern Recognition"
excerpt: "<img src='/images/sc-4.png' width='100%'><img src='/images/sc-3.png' width='53.75%'><img src='/images/sc-5.png' width='46.25%'>"
collection: portfolio
---

A collection of scientific computing experiments (view [repo](https://github.com/adityak714/scientific-computations/tree/main)), held as part of the course "Scientific Computing for Data Analysis - 1TD352" at Uppsala University.

In this project, the usage of **Singular Value Decomposition** is demonstrated, in approximating a matrix representation, e.g. a collection of handwritten images from the MNIST-2D dataset, and conducting further analysis using the *U* component from the SVD of training data. A pattern recognition problem was tackled, where varying k-rank approximations were done, and using those k columns from the *U* matrix, a matrix of test examples of digits were tested on the *U* of training data. 
- The behaviour of the classification accuracy while improving the degree of approximation *k* was investigated, and most of the features could be captured with k=20, with substantial accuracy. 
- Interestingly, the **handwriting complexity (number of curves, edges, strokes)** of the digits is, arguably, **also a factor in how well the k number of columns** from U suffice in classifying accurately for unseen test images.

The numerical computations were done using the **NumPy** library, in **Python**.