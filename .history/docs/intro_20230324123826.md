---
slug: /
sidebar_position: 1
---

# ChatGPT Job Search Guide

This guide will introduce how to use ChatGPT or similar chatbots to improve the efficiency of software engineers' interview preparation. In addition to utilizing ChatGPT to obtain answers, we will also learn its methods for solving complex problems and answering questions within a structured framework. Concrete prompt examples and usage samples will be provided in the following chapters.

> **Note:** Sometimes ChatGPT may provide seemingly correct but inaccurate answers. Please take ChatGPT's responses as reference opinions, especially when you are unable to verify their correctness through other channels.

## prompt engineering

Prompt engineering refers to the process of designing appropriate prompts and workflows to interact with ChatGPT. The emergence of ChatGPT is like that of a search engine like Google. Learning how to use it can greatly improve our daily work or life efficiency. However, while it can save you a lot of time, it cannot replace your own thinking and exploration.

> **Note:** The DIKW model explains the relationship between data, information, knowledge, and wisdom. Search engines collect data and organize it into information for users. ChatGPT goes further by integrating information to present knowledge, and even wisdom.

Regarding the study of prompt engineering, We strongly recommend two official guides from OpenAI:

- [Best practices for prompt engineering with OpenAI API](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)
- [Techniques to improve reliability - openai](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md)

This guide will construct prompts based on the suggestions provided in the official guides, among which several important methods include:

- **Prompt the model to explain before answering：**Use prompts such as `Let's think step by step` to provide an analysis process, which has increased accuracy from 18% to 79%! [Example - OpenAI](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md#why-gpt-3-fails-on-complex-tasks)
- **Split complex tasks into simpler tasks: **Break complex tasks into several smaller ones, guiding ChatGPT to solve each sub-tasks step by step, and ultimately solve the bigger problem. [Example - OpenAI](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md#split-complex-tasks-into-simpler-tasks)
- **Least-to-most prompting: **Gradually increase the complexity of prompts from simple ones to more complex ones, thus improving the accuracy of ChatGPT's responses. [Example - OpenAI](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md#least-to-most-prompting)

You can also make minor adjustments for the prompts based on your own situation.
