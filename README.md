# Customer Management Web Application

Welcome to the frontend project of the customer management application. This README provides essential information about the project, including requirements, scripts, libraries, and design patterns used.

## Table of Contents

- [Customer Management Web Application](#customer-management-web-application)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation And Usage](#installation-and-usage)
      - [Credentials](#credentials)
  - [Libraries Used](#libraries-used)
    - [React Hook Form](#react-hook-form)
    - [Ant Design (Antd)](#ant-design-antd)
    - [Axios](#axios)
    - [Zod Validation](#zod-validation)
      - [Why Zod?](#why-zod)
  - [Data Management Approaches](#data-management-approaches)
    - [Context API for Authentication](#context-api-for-authentication)
      - [Why Context API Is Utilized for Authentication](#why-context-api-is-utilized-for-authentication)
    - [Custom Hooks for Customer Data](#custom-hooks-for-customer-data)
      - [Why Custom Hooks Are Employed for Customer Data](#why-custom-hooks-are-employed-for-customer-data)
  - [Atomic Design](#atomic-design)
  - [Gitmoji Commit Convention](#gitmoji-commit-convention)
    - [Gitmoji vs. Semantic Commits](#gitmoji-vs-semantic-commits)
      - [Gitmoji](#gitmoji)
      - [Semantic Commits](#semantic-commits)
      - [Advantages of Gitmoji](#advantages-of-gitmoji)
  - [License](#license)
  - [Next Steps](#next-steps)

## Getting Started

To get your project up and running, follow these steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/en/download>)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [Customer Management API (.NET 7)](https://github.com/MiguelMDSDP/CustomerManagementAPI)

### Installation And Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/MiguelMDSDP/CustomerManagementWeb
   ```

2. Change to the project directory:

   ```bash
   cd CustomerManagementWeb
   ```
  
3. Install project dependencies:

   ```bash
    yarn install
    ```

4. Before running the application, create a .env file inside the project with the same content of the .env.example file.

    ```.env
    REACT_APP_API_URL=http://localhost
    REACT_APP_API_PORT=5000
    ```

5. Run the application:

   ```bash
   yarn start
   ```

6. The application will be available at <http://localhost:3000>.

#### Credentials

The application has two users: the manager and the sales.

1. Manager credentials:
   - **Username**: admin
   - **Password**: admin

2. Sales credentials:
   - **Username**: sales
   - **Password**: sales

## Libraries Used

### React Hook Form

React Hook Form is a library used for form handling in the application. It simplifies form management and validation with React hooks. React Hook Form has been chosen for the following reasons:

- **Simplicity and Performance**: React Hook Form provides a simple and efficient way to manage form state and validation without the need for complex abstractions or additional components. It leverages React's hook system to minimize re-renders, resulting in better performance.

- **Minimal Boilerplate**: Unlike some other form libraries, React Hook Form minimizes the amount of code you need to write to achieve form functionality. This reduces boilerplate code and makes the codebase cleaner and more maintainable.

- **Validation**: React Hook Form offers built-in validation support, allowing us to define validation rules easily. It supports both synchronous and asynchronous validation, making it versatile for various use cases.

### Ant Design (Antd)

Ant Design, or Antd, is a comprehensive design system and set of high-quality UI components that are used in the project. Here's why Antd has been chosen:

- **Consistency and Cohesion**: Antd provides a cohesive and visually appealing design system, ensuring that the application's user interface remains consistent across different components and screens. This consistency helps create a polished and professional user experience.

- **Rich Component Library**: Antd offers a vast library of pre-designed UI components, including buttons, forms, modals, tables, and more. These components are highly customizable and save development time, as they don't need to be built from scratch.

- **Accessibility**: Antd emphasizes accessibility best practices, which aligns with the commitment to creating inclusive and user-friendly applications. This ensures that the application is accessible to all users, including those with disabilities.

### Axios

Axios is used for data fetching and making API calls in the application. Axios has been chosen due to the following advantages:

- **Simplicity**: Axios provides a straightforward and easy-to-use API for making HTTP requests. Its syntax is clear and concise, making it accessible to developers with various levels of experience.

- **Flexibility**: Axios supports a wide range of request methods (GET, POST, PUT, DELETE, etc.) and allows us to customize request headers, data, and parameters. This flexibility is essential when working with diverse APIs.

- **Error Handling**: Axios offers robust error handling capabilities, including interceptors for global error handling. It allows us to handle HTTP errors gracefully and provide meaningful feedback to users.

Comparison with Alternatives:

- **Fetch API**: While the Fetch API is built into modern browsers and offers basic functionality for making HTTP requests, Axios provides a more developer-friendly and feature-rich experience. Axios simplifies common tasks like error handling and request cancellation.

- **Other HTTP Libraries**: Axios competes with other popular HTTP libraries like superagent and request-promise. Axios stands out for its simplicity, promise-based API, and widespread adoption in the JavaScript community.

### Zod Validation

The Zod library is utilized for input validation and schema management in the project. Zod provides a simple and type-safe way to define data validation schemas in TypeScript.

#### Why Zod?

Zod offers several advantages when it comes to data validation:

- **Type Safety:** Zod allows us to define validation schemas as TypeScript types, ensuring that the validation logic is type-safe and integrated seamlessly with the codebase.

- **Declarative Syntax:** Zod uses a declarative and intuitive syntax to define validation rules, making it easy to understand and maintain the validation logic.

- **Custom Error Messages:** Zod enables us to specify custom error messages for different validation failures, improving the clarity of error reporting to the users.

- **Rich Validation Features:** Zod supports a wide range of validation features, including required fields, data transformations, and complex data structures.

## Data Management Approaches

Two distinct approaches are utilized for data management: Context API for authentication and custom hooks for customer data. Each approach serves a specific purpose and benefits the overall structure and functionality of the application.

### Context API for Authentication

#### Why Context API Is Utilized for Authentication

The decision to use Context API for authentication is grounded in several considerations:

1. **Global State Management:** Authentication state is a global concern that impacts various aspects of the application. The Context API enables centralized and efficient management of this state.

2. **Simplicity:** The Context API streamlines the process of passing authentication-related data (e.g., user information, login/logout functions) down the component tree, making it accessible to any component that requires it.

3. **State Persistence:** The Context API facilitates the persistence of authentication state across different routes and components without the complexity of prop drilling.

4. **Integration with Axios:** The Context API seamlessly integrates with Axios, allowing unified management of authentication and data fetching.

### Custom Hooks for Customer Data

#### Why Custom Hooks Are Employed for Customer Data

Custom hooks, a flexible and reusable pattern in React for encapsulating logic, are chosen for handling customer data for the following reasons:

1. **Modularity:** Custom hooks promote separation of concerns and encapsulation of logic related to customer data retrieval. This results in a more modular and maintainable codebase.

2. **Reusability:** The same logic for fetching and managing customer data can be easily reused in multiple components throughout the application by creating custom hooks.

3. **Simplified Components:** Custom hooks help maintain clean and focused components, as data-fetching logic is abstracted away from rendering and user interaction.

4. **Testing:** Custom hooks can be tested in isolation, simplifying the testing process for data-fetching and state management.

5. **Decoupling from Context API:** While the Context API is employed for authentication, customer data is more specific to certain parts of the application. Using custom hooks allows decoupling customer data management from the authentication context, providing improved separation of concerns.

In summary, the utilization of Context API for authentication and custom hooks for customer data is driven by the aim for a modular, maintainable, and efficient approach to data management. These choices contribute to a well-organized and scalable codebase, enhancing the development experience and user interaction in the application.

## Atomic Design

The project is inspired by the principles of Atomic Design when structuring the components. Atomic Design is a design methodology that breaks down user interfaces into smaller, reusable building blocks. These building blocks are categorized into five levels: atoms, molecules, organisms, templates, and pages. Each level represents a different level of complexity and abstraction.

- **Atoms:** These are the smallest and most fundamental building blocks of a user interface. Examples include buttons, input fields, labels, and icons. At the atomic level, components are simple and focused on a single function.

- **Molecules:** Molecules are composed of multiple atoms. They represent small, functional units within a UI, such as form fields with labels or a navigation bar with buttons. Molecules combine atoms to create more complex UI elements.

- **Organisms:** Organisms are larger components that combine molecules and atoms to form discrete sections of a UI. Examples include header bars, product cards, or user profiles. Organisms encapsulate specific sections of a page with their own logic and layout.

- **Templates:** Templates define the overall structure and layout of a page or section. They establish a consistent grid and arrangement for organisms, molecules, and atoms. Templates serve as a blueprint for creating pages with a consistent design.

- **Pages:** Pages represent complete screens or views within an application. They are the highest-level components and are built using templates, organisms, and other smaller components. Pages represent the final user experience and serve as the entry points for user interaction.

While the application follows the spirit of Atomic Design by dividing the UI into components, containers, and pages, it does not adhere strictly to the original Atomic Design definitions. Instead, it is adapted for specific needs, aiming to achieve reusability and maintainability in the codebase.

**Atomic Design and SOLID Principles:**

The Atomic Design methodology aligns well with the SOLID principles of software design, specifically the Single Responsibility Principle (SRP) and the Open/Closed Principle (OCP).

- **Single Responsibility Principle (SRP):** Atomic Design encourages the creation of small, focused components (atoms) that have a single responsibility. This corresponds to the SRP, which states that a class or component should have only one reason to change.

- **Open/Closed Principle (OCP):** Atomic Design's modular structure makes it easier to extend the UI without modifying existing components.

In summary, while it may not strictly adhere to every aspect of Atomic Design, it is guided by its principles to create a maintainable and extensible UI.

## Gitmoji Commit Convention

The Gitmoji commit convention is used to provide a visual representation of the purpose and content of each commit. This convention helps to understand changes at a glance and maintain a clean commit history.

- :sparkles: `:sparkles:: Introducing new features
- :bug: `:bug:: Fixing a bug
- :art: `:art:: Improving code structure or format
- :rocket: `:rocket:: Deploying something
- :construction: `:construction:: Work in progress
- :memo: `:memo:: Writing documentation
- :fire: `:fire:: Removing code or files
- :tada: `:tada:: Initial commit
- and many more...

### Gitmoji vs. Semantic Commits

Both Gitmoji and Semantic Commits are commit message conventions that aim to provide a structured and informative commit history. Let's compare Gitmoji to Semantic Commits and discuss some advantages of using Gitmoji:

#### Gitmoji

- **Visual Representation:** Gitmoji uses emojis to visually represent the type of change made in a commit. For example, `:bug:` represents a bug fix, `:sparkles:` represents the introduction of a new feature, and so on. This visual representation makes it easy to quickly grasp the nature of a commit.

- **Rich Set of Emojis:** Gitmoji offers a wide range of emojis, each associated with a specific type of change. This richness allows for precise categorization of commits, such as `:construction:` for work in progress or `:memo:` for documentation changes.

- **Intuitive and Fun:** The use of emojis adds an element of fun to commit messages, making the commit history more engaging. It also makes it easier for team members to remember and adhere to the convention.

- **Customization:** Gitmoji is highly customizable, allowing teams to define their own emojis and meanings if needed. This flexibility ensures that the convention can be adapted to fit the project's specific requirements.

#### Semantic Commits

- **Semantic Meaning:** Semantic Commits use a predefined structure in commit messages, such as `<type>(<scope>): <description>`. The `<type>` typically represents the category of the change (e.g., `feat` for a new feature or `fix` for a bug fix).

- **Widely Adopted:** Semantic Commits have gained popularity and are widely adopted in the software development community. Many tools and platforms support semantic commit messages.

- **Consistency:** The structured format of Semantic Commits promotes consistency in commit messages, making it easier to automate tasks like version bumping and release notes generation.

#### Advantages of Gitmoji

1. **Visual Clarity:** Gitmoji provides a clear visual indication of the commit's purpose. This is especially valuable when quickly scanning commit logs or pull requests.

2. **Expressive and Playful:** Emojis add a touch of expressiveness and playfulness to commit messages, which can enhance collaboration and make the commit history more engaging.

3. **Easy Adoption:** Gitmoji is easy to adopt and remember, even for team members who may not be familiar with commit conventions. The emojis themselves convey meaning.

4. **Customization:** Teams can customize Gitmoji to align with their project's unique needs, allowing for flexibility in categorizing commits.

In summary, while both Gitmoji and Semantic Commits serve the purpose of providing structured commit messages, Gitmoji stands out for its visual clarity, expressiveness, and ease of adoption. It adds an enjoyable and informative layer to the commit history, making it a popular choice for teams looking to maintain a clean and meaningful version control history.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Next Steps

1. **Token Verification:** Implement token verification to ensure that each time a user accesses the application, their stored token is checked for validity. This step enhances security and maintains user authentication.

2. **User Management Module:** Create a dedicated user management module within the application. This module will empower administrators to manage user accounts, roles, and permissions efficiently.

3. **CSS Style Enhancements:** Continue to refine and improve the CSS styles throughout the application. A polished and visually appealing interface enhances the overall user experience.

4. **Automated Testing:** Implement automated testing to ensure the reliability and robustness of the application. Comprehensive test suites help catch and prevent potential issues early in the development process.

5. **CI/CD Pipeline:** Establish a Continuous Integration/Continuous Deployment (CI/CD) pipeline to automate the deployment and delivery of new application versions. CI/CD streamlines the release process, improving deployment speed and reliability.

These steps represent the ongoing commitment to building a secure, feature-rich, and user-friendly application.
