# SauceDemo Automated Tests

This project contains automated UI tests for the [SauceDemo](https://www.saucedemo.com) website using WebdriverIO, Mocha, and Allure reporting.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm
- Java (for Allure report generation)
- Browsers: Firefox and Microsoft Edge installed

---

## Installation

Clone the repository and install dependencies:

bash
git clone <your-repo-url>
cd saucedemo-tests
npm install

---

## Running Tests

### Run tests in Firefox:

npm run test:firefox

### Run tests in MS Edge:

npm run test:edge

---

## Generating Allure Reports

After running tests, generate and open the Allure report with:

npm run allure:generate

---

## Project Structure

- test/specs/ - test files
- test/pageobjects/ - page object models
- data/ - test data
- wdio.conf.js - WebdriverIO configuration

---

## Technologies Used

- WebdriverIO (v8)
- Mocha
- Chai
- Allure Reporter
- Microsoft Edge & Firefox browsers
