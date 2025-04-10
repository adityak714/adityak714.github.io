---
title: "Stochastic/Deterministic Simulations, SVD for Low-Rank Approximation and Pattern Recognition"
excerpt: "<img src='/images/sc-1.png' width='30%'><img src='/images/sc-2.png' width='30%'><img src='/images/sc-3.png' width='40%'><img src='/images/sc-5.png' width='35%'><br/><img src='/images/sc-4.png' width='65%'>"
collection: portfolio
---

A collection of scientific computing experiments (view [repo](https://github.com/adityak714/scientific-computations/tree/main)), held as part of the course "Scientific Computing for Data Analysis - 1TD352" at Uppsala University.

From ["Mechanisms of noise-resistance in genetic oscillators"](https://www.pnas.org/doi/abs/10.1073/pnas.092133899): Stochastic and Deterministic simulations conducted, to model circadian rhythms, and creation processes of different involved proteins, in mammals and organisms. 
- An ODE model was used for the deterministic experiment, with the rates of change of all involved variables. 
- A Random Walk (Monte Carlo Markov Process) was done for the stochastic experiment, given initial values of the parameters involved, state-change values and propensity functions per reaction type. 

The second part is the usage of **Singular Value Decomposition** in approximating a matrix representation, e.g. a handwritten image from the MNIST dataset, and conducting further analysis using the *U* component from the SVD of training data. A pattern recognition problem was tackled, where varying k-rank approximations were done, and using those k columns from the *U* matrix, a matrix of test examples of digits were tested on the *U* of training data. 
- The behaviour of the classification accuracy while improving the degree of approximation (k) was investigated, and most of the features could be captured with k=20, with substantial accuracy. 
- Interestingly, the **handwriting complexity (number of curves, edges, strokes)** of the digits is, arguably, **also a factor in how well the k number of columns** from U suffice in classifying accurately for unseen test images.
