---
title: "Electric Power Consumption Forecasting using ARIMA-based Time-Series Modelling"
excerpt: "<img src='/images/ts.png' width='100%'>"
collection: portfolio
---

For the real-world use-case of electric power consumption analysis, patterns are observed using non-seasonal and seasonal Autoregressive Integrated Moving Average (ARIMA) models (view [repo](https://github.com/adityak714/analysis-time-series/tree/main)). This was held as part of the advanced-level course "Analysis of Time Series - 1MS014" at Uppsala University.

This project, done with a peer, is focused on analyzing the electrical power consumption in Tetouan city, Morocco ([Kaggle](https://www.kaggle.com/datasets/fedesoriano/electric-power-consumption)). The feature that is of focus for this project is the power consumption across 3 geographical zones aggregated w.r.t time. Each data-point corresponds to a recorded value, captured every 10 minutes. For this study we chose one month of Power Consumption data (corresponding to 4380 data points, i.e. 43,800 minutes). As a last step, we used the better model out of the ones tried, to forecast the power consumption for the next 2 days, or 288 future timesteps. 

The implementation was done in R as the statistical-computing programming language.