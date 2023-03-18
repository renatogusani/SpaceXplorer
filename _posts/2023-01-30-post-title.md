---
layout: post
title: "Topic 1"
date: 2023-01-30 
---

## Topic 1: The number of space missions launched each year, as well as the nations or organizations that support them.

To continue with the first topic, I used Python to investigate the number of space missions launched each year, as well as the countries or organizations that support them.

Here is the code for loading the dataset and importing the required libraries:

<pre><code>

import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset into a pandas DataFrame
df = pd.read_csv("space_missions.csv", encoding='latin1') 

</code></pre>

Next, I transformed the 'Date' column to datetime type and retrieve the year to use as a new column called 'Year.'

<pre><code>

# convert the 'Date' column to datetime type
df['Date'] = pd.to_datetime(df['Date'])

# extract the year from the 'Date' column
df['Year'] = df['Date'].dt.year

</code></pre>
