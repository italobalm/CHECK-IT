# CHECK-IT - Backend

Information Credibility Verification and Fact-Checking System.

## About the Project

CHECK-IT is a backend application developed to support the analysis and verification of information credibility, using scoring services and utilities for cleaning AI-generated responses.

## Technologies Used

- Node.js
- Jest (Unit Testing)
- JavaScript

## Installation and Execution

### Prerequisites

- Node.js (version 18 or higher)

### Steps

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/check-it.git

# Navigate to the backend folder
cd check-it/backend

# Install dependencies
npm install

# Run unit tests
npm test
```

## Unit Test Results

### Test Suites

```bash
Test Suites: 2 passed, 2 total
```

### Executed Tests

```bash
Tests: 9 passed, 9 total
```

### cleanJson Utility

```bash
✓ Should remove ```json markers
✓ Should work correctly with raw JSON
✓ Should remove leading and trailing whitespace
✓ Should return "{}" for invalid values
```

### Score Service, CHECK-IT Credibility System

```bash
✓ Should return High Credibility with maximum score (8)
✓ Should return High Credibility with minimum score (6)
✓ Should return Medium Credibility (5 points)
✓ Should return Low Credibility (0 points)
✓ Should treat undefined/null values as false
```

---

# Test Coverage

```bash
------------------|---------|----------|---------|---------|
File              | % Stmts | % Branch | % Funcs | % Lines |
------------------|---------|----------|---------|---------|
All files         |   100   |   100    |   100   |   100   |
services          |   100   |   100    |   100   |   100   |
scoreService.js   |   100   |   100    |   100   |   100   |
utils             |   100   |   100    |   100   |   100   |
cleanJson.js      |   100   |   100    |   100   |   100   |
------------------|---------|----------|---------|---------|
```

## Coverage Summary

- 100% statement coverage
- 100% branch coverage
- 100% function coverage
- 100% line coverage
- All tests executed successfully

## Project Structure

```text
backend/
├── services/
│   └── scoreService.js
├── utils/
│   └── cleanJson.js
├── tests/
│   ├── scoreService.test.js
│   └── cleanJson.test.js
├── package.json
└── README.md
```

## Main Features

- Information credibility scoring
- Classification into credibility levels
- AI response cleaning and normalization
- Automated unit testing with Jest
- Full test coverage (100%)
- Modular and maintainable architecture

## Credibility Levels

| Score Range | Classification |
|------------|---------------|
| 6 - 8 | High Credibility |
| 5 | Medium Credibility |
| 0 - 4 | Low Credibility |

## Testing

To run the test suite:

```bash
npm test
```

To generate a coverage report:

```bash
npm test -- --coverage
```

## License

This project was developed for academic and educational purposes as part of the CHECK-IT initiative.
