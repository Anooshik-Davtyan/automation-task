# automation-task

## Code Structure

```
root
├── automation-task/
│   ├── base/
|   |   ├── base_page.ts
│   ├── pages/
|   |   ├── home_page/
|   |   |   ├── home_page_helpers.ts
|   |   |   ├── home_page_locators.ts
|   |   ├── place_order/
|   |   |   ├── place_order_helpers.ts
|   |   |   ├── place_order_locators.ts
|   |   ├── registration_login/
|   |   |   ├── registration_login_helpers.ts
|   |   |   ├── registration_login_locators.ts
|   |   |   search/
|   |   |   ├── search_helpers.ts
|   |   |   ├── search_locators.ts
|   ├── tests/
|   |   ├── test_case1.spec.ts
|   |   ├── test_case9.spec.ts
|   |   ├── test_case16.spec.ts
|   |   ├── test_case25.spec.ts
|   ├── utils/
|   |   ├── Constants.ts
├── .gitignore
├── .env.example
├── package.json
├── package-lock.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

- `automation-task/`:  Main directory containing the Playwright test automation framework files.
    - `base/`: Contains base classes and common utilities for the testing framework.
        - `base_page.ts`: Defines the BasePage class with common methods used across different page objects.
    - `pages/`: Directory containing page-specific modules.
        - `home_page/`: Contains files related to the home page.
            - `home_page_helpers.ts`: Helper functions for the home page.
            - `home_page_locators.ts`: Locators for elements on the home page.
        - `place_order/`: Contains files related to the place order.
            - `place_order_helpers.ts`: Helper functions for the place order.
            - `place_order_locators.ts`: Locators for elements related place order.
        - `registration_login/`: Contains files related to the registration and login.
            - `registration_login_helpers.ts`: Helper functions for the registration and login.
            - `registration_login_locators.ts`: Locators for elements on the registration login. 
        - `search/`: Contains files related to the search part.
            - `search_helpers.ts`: Helper functions for the search functionality.
            - `search_locators.ts`: Locators for elements related the search feature.
    - `tests/`: Contains the test files.
        - `test_case1.spec.ts`: Register User.
        - `test_case9.spec.ts`: Search Product.
        - `test_case16.spec.ts`: Place Order: Login before Checkout.
        - `test_case25.spec.ts`: Verify Scroll Up using 'Arrow' button and Scroll Down functionality.
    - `utils/`: Contains utility scripts used across the testing framework.
        - `Constants.ts`: Defines constants used across the testing framework.
- `.env.example`: Provides a template of required environment variables so developers can create their own .env file without exposing sensitive data.
- `.gitignore`: Lists files and directories that should be ignored by Git.
- `package.json`: Configuration file for npm, specifying project dependencies and scripts.
- `package-lock.json`: Automatically generated file to lock the versions of dependencies installed.
- `playwright.config.ts`: Configuration file for Playwright, defining test settings and environment.
- `README.md`: Provides an overview of the project, including structure and usage instructions.
- `tsconfig.json`: TypeScript configuration file specifying compiler options.

## How to Run

1 **Clone the repository**
```
git clone git@github.com:Anooshik-Davtyan/automation-task.git
cd automation-task
```
2 **Install Dependencies**
```
npm install
```

3 **Install Playwright browsers**
```
npx playwright install
```
4 **Run tests**

***Run all tests***
```
npx playwright test
```
***Run a specific test file***
```
npx playwright test tests/example.spec.ts
```

***Run tests in UI mode (interactive)***
```
npx playwright test --ui
```

5 **View test report**
```
npx playwright show-report
```


