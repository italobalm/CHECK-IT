# Check It: AI-Powered Misinformation Detection Extension 
> A Chrome extension that automatically analyzes online news content using Artificial Intelligence and instantly alerts users about the credibility of the information through an intuitive traffic light system. Developed as a Capstone Project (*Projeto Integrador*) for the **Systems Analysis and Development Program** at **Senac College**.

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[![Institution](https://img.shields.io/badge/Institution-Senac%20College-blue)](https://www.senac.br/)

[![AI](https://img.shields.io/badge/AI-Gemini-purple)]()

[![Backend](https://img.shields.io/badge/Backend-Render-blue)]()

[![Testing](https://img.shields.io/badge/Testing-Jest%20%7C%20K6-orange)]()

---

## Project Overview 

**Check It** is a Chrome extension developed to help users identify potentially misleading news and misinformation while browsing the internet.

Unlike traditional fact-checking tools that require users to manually submit articles or claims, Check It automatically analyzes the news content and provides immediate feedback through a simple and accessible visual interface.

Using Artificial Intelligence, the extension classifies information according to its credibility level, encouraging critical thinking and helping users make more informed decisions about the content they consume online.

### Key Features

* **Automatic News Analysis:** News content is analyzed without requiring users to manually submit information.

* **Traffic Light Classification:** Results are presented through an intuitive visual system:

  * 🟢 Reliable information.

  * 🟡 Information that requires caution and further verification.

  * 🔴 Information with strong indicators of misinformation.

* **AI-Powered Detection:** Gemini evaluates patterns associated with credibility and misinformation.

* **Seamless Browser Experience:** Users receive feedback while browsing without interrupting their normal navigation.

* **Fast Responses:** Caching mechanisms help reduce processing time and unnecessary AI requests.

---

## Responsible AI & Privacy 

Because Check It uses Artificial Intelligence to support information evaluation, responsible use principles guided the development process.

### Implemented Principles

* **Transparency:** The credibility level is communicated clearly through visual indicators.

* **Critical Thinking Support:** The extension assists users in evaluating information but does not replace human judgment.

* **Data Minimization:** Only the information required to perform analyses is processed.

* **Secure Development Practices:** The application follows secure communication practices between the extension and the backend services.

* **Responsible AI Usage:** The generated classifications should be interpreted as support tools rather than definitive statements of truth.

---

## Tech Stack 

### Browser Extension

* JavaScript

* Chrome Extension API

### Backend

* Node.js

* Fastify

* TypeScript

* MongoDB

* Mongoose

* Render

### Artificial Intelligence

* Gemini API

* Prompt Engineering

### Testing

* Jest, Unit Testing

* K6, Performance Testing

---

## Getting Started 

Follow these steps to run the extension locally for development purposes.

### 1. Prerequisites

Ensure you have installed:

* Git

* Node.js (v18.0.0 or higher)

* Google Chrome

* npm

---

### 2. Clone the Repository

```bash

git clone https://github.com/italobalm/CHECK-IT.git

cd CHECK-IT

```

---

### 3. Install Dependencies

```bash

npm install

```

---

### 4. Load the Extension in Chrome

1. Open Google Chrome.

2. Navigate to:

```

chrome://extensions

```

3. Enable **Developer Mode**.

4. Click **Load unpacked**.

5. Select the extension folder from the project.

---

## Deployment 

The backend API is deployed on Render and connected to a cloud database, allowing the extension to function without requiring local backend execution.

### Production API

```
https://check-it-0abb.onrender.com

```

---

## Core API Endpoints 

| Method | Endpoint | Description |

|----------|----------|-------------|

| POST | `/analyze` | Receives news data from the extension and returns the AI-generated credibility classification. |

---

## Testing Strategy 

To ensure software quality and reliability, multiple testing approaches were adopted.

### Unit Testing

* **Jest** was used to validate isolated functionalities and backend behaviors.

### Performance Testing

* **K6** was used to assess API performance under load conditions.

* Stress scenarios were created to evaluate response time and system stability.

---

## Future Improvements 

If additional development time were available, future versions of Check It could include:

* Support for additional browsers.

* Integration with external fact-checking databases.

* Improved credibility scoring models.

* Administrative dashboard and usage analytics.

* Multilingual support.

* Enhanced caching strategies to further optimize AI costs and response times.

* User customization options for alerts and notifications.

---

## Authors & Project Team 

* Ítalo Breno

* Heytor Pimentel

* Maria Gabriella

* Rafaella Marques

* Renan Humberto

---

## Academic Information 

**Institution:** Senac College

**Program:** Systems Analysis and Development

**Capstone Project (Projeto Integrador)**

**Academic Advisor / Professor:** Prof. Rodrigo Larrazábal

**Tech English Course Professor:** Prof. Leonardo Trevas

---

## Disclaimer

Check It is an academic project developed for educational purposes. The classifications generated by the extension are intended to support information evaluation and encourage critical thinking. They should not be interpreted as definitive proof of truth or falsehood.
 
