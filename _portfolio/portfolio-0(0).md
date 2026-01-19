---
title: "Stochastic/Deterministic Simulations for Modelling Circadian-Rhythm Genetic Oscillators"
excerpt: "<img src='/images/sc-1.png' width='100%'>"
collection: portfolio
---

A collection of scientific computing experiments (view [repo](https://github.com/adityak714/scientific-computations/tree/main)), held as part of the course "Scientific Computing for Data Analysis - 1TD352" at Uppsala University.

Reproduced from original study ["Mechanisms of noise-resistance in genetic oscillators"](https://www.pnas.org/doi/abs/10.1073/pnas.092133899): Stochastic and Deterministic simulations conducted, to model circadian rhythms, and creation/binding processes of different involved proteins, in mammals and organisms. 
- An ODE model was used for the deterministic experiment, with the rates of change of all involved variables. 
- A Random Walk (Monte Carlo Markov Process) was done for the stochastic experiment, given initial values of the parameters involved, state-change values and propensity functions per reaction type. 

The simulations were conducted in **Python**, and **NumPy** as the numerical computation library. 