# Types of tests:
- Unit Testing: Test individual components and functions in isolation. You can use tools like Jest and React Testing Library for this. Write tests to cover various scenarios, including edge cases.

- Integration Testing: Test how different components work together. This helps ensure that your components interact as expected. Tools like Jest and Enzyme can be useful for integration testing.

- End-to-End Testing: This involves testing your application as a whole, simulating user interactions. Cypress and Selenium are popular tools for end-to-end testing. These tests help catch issues that might only surface when all components are combined.

- Snapshot Testing: Jest provides snapshot testing capabilities. It allows you to capture the output of a component and compare it to a stored "snapshot." This can quickly catch unintended changes.

- Performance Testing: Consider tools like Lighthouse or WebPagetest to assess your application's performance. Performance is a crucial aspect of user experience.

- Accessibility Testing: Use tools like Axe, react-a11y, Lighthouse for accessibility testing. Ensuring your app is accessible to all users is essential.

- Load Testing: If your application is expected to handle heavy traffic, conduct load testing using tools like Apache JMeter or Gatling to ensure it can scale properly.

- Mutation Testing: This advanced technique involves making small changes (mutations) to your code and running tests to check if they catch these changes. It helps assess the quality of your tests.

## What do we use in React & NextJS for testing?
- unit & snapshot tests -> Jest, React-testing-library

- Integration &  End-to-End -> Cypress, Playwrigth

## Important notes:
- Name folders with test files: __tests__
- Name test files NameOfTheComponent.test.js or NameOfTheComponent.spec.js


## How to write tests (unit tests)?
- render - to render an element: render(<MyComponent />);
- screen - to find elements in the DOM: const element = screen.getByTestId('my-element');
- userEvent - to simulate user interactions: userEvent.click(buttonElement);
- expect - to check that the selected elements is as expected.