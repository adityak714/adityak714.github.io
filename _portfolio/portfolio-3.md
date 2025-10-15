---
title: "Training Advanced Convolutional Architectures on the MNIST-2D Dataset"
excerpt: "<img src='/images/dl-ha2-1.png'><br/><img src='/images/dl-ha2-2.png'><br/><img src='/images/dl-ha2-3.png'>"
collection: portfolio
---

A series of deep neural network models were trained to identify the digit labels for handwritten digits from the MNIST-2D dataset, and their accuracies and loss statistics were analyzed and compared. The implementation was done in PyTorch, and the models consisted of the following architectures:

- **Feed-forward CNN**, with Stochastic Gradient Descent + Adaptive Moment Estimation (ADAM - quicker convergence), as well as trying with *regularization using L2 and Dropout*
- **CNN with residual blocks** (of varying layers per residual "block")
- **CNN with *bottleneck* residual blocks** (re-transformation of channel dimension after pass through the residual block)
- **DenseNet** - a concatenation-based channel summation of previous layers, as data is passed along the network. 

These experiments were held as part of the course "Deep Learning - 1RT720" at Uppsala University.
