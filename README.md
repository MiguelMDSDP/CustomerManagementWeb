# Customer Management API Web Application

Welcome to the frontend project of our customer management application. This README provides essential information about the project, including requirements, scripts, libraries, and design patterns used.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation-and-usage)
- [Libraries Used](#libraries-used)
- [License](#license)

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
   cd frontend
   ```
  
3. Install project dependencies:

   ```bash
    yarn install
    ```

4. Run the application:

   ```bash
   yarn start
   ```

5. The application will be available at <http://localhost:3000>.

## Libraries Used

### React Hook Form

React Hook Form is a library used for form handling in our application. It simplifies form management and validation with React hooks. We chose React Hook Form for the following reasons:

- **Simplicity and Performance**: React Hook Form provides a simple and efficient way to manage form state and validation without the need for complex abstractions or additional components. It leverages React's hook system to minimize re-renders, resulting in better performance.

- **Minimal Boilerplate**: Unlike some other form libraries, React Hook Form minimizes the amount of code you need to write to achieve form functionality. This reduces boilerplate code and makes the codebase cleaner and more maintainable.

- **Validation**: React Hook Form offers built-in validation support, allowing us to define validation rules easily. It supports both synchronous and asynchronous validation, making it versatile for various use cases.

### Ant Design (Antd)

Ant Design, or Antd, is a comprehensive design system and set of high-quality UI components that we use for our project. Here's why we chose Antd:

- **Consistency and Cohesion**: Antd provides a cohesive and visually appealing design system, ensuring that our application's user interface remains consistent across different components and screens. This consistency helps create a polished and professional user experience.

- **Rich Component Library**: Antd offers a vast library of pre-designed UI components, including buttons, forms, modals, tables, and more. These components are highly customizable and save development time, as we don't need to build them from scratch.

- **Accessibility**: Antd emphasizes accessibility best practices, which aligns with our commitment to creating inclusive and user-friendly applications. This ensures that our application is accessible to all users, including those with disabilities.

### Axios

We use Axios for data fetching and making API calls in our application. Axios has been chosen due to the following advantages:

- **Simplicity**: Axios provides a straightforward and easy-to-use API for making HTTP requests. Its syntax is clear and concise, making it accessible to developers with various levels of experience.

- **Flexibility**: Axios supports a wide range of request methods (GET, POST, PUT, DELETE, etc.) and allows us to customize request headers, data, and parameters. This flexibility is essential when working with diverse APIs.

- **Error Handling**: Axios offers robust error handling capabilities, including interceptors for global error handling. It allows us to handle HTTP errors gracefully and provide meaningful feedback to users.

Comparison with Alternatives:

- **Fetch API**: While the Fetch API is built into modern browsers and offers basic functionality for making HTTP requests, Axios provides a more developer-friendly and feature-rich experience. Axios simplifies common tasks like error handling and request cancellation.

- **Other HTTP Libraries**: Axios competes with other popular HTTP libraries like superagent and request-promise. Axios stands out for its simplicity, promise-based API, and widespread adoption in the JavaScript community.

By choosing React Hook Form, Ant Design, and Axios, we aim to streamline our development process, ensure a polished user interface, and simplify data management and API interactions. These libraries have proven to be reliable, efficient, and well-maintained, making them excellent choices for our project.

## Atomic Design

We are inspired by the principles of Atomic Design when structuring our components. Atomic Design is a design methodology that breaks down user interfaces into smaller, reusable building blocks. These building blocks are categorized into five levels: atoms, molecules, organisms, templates, and pages. Each level represents a different level of complexity and abstraction.

- **Atoms:** These are the smallest and most fundamental building blocks of a user interface. Examples include buttons, input fields, labels, and icons. At the atomic level, components are simple and focused on a single function.

- **Molecules:** Molecules are composed of multiple atoms. They represent small, functional units within a UI, such as form fields with labels or a navigation bar with buttons. Molecules combine atoms to create more complex UI elements.

- **Organisms:** Organisms are larger components that combine molecules and atoms to form discrete sections of a UI. Examples include header bars, product cards, or user profiles. Organisms encapsulate specific sections of a page with their own logic and layout.

- **Templates:** Templates define the overall structure and layout of a page or section. They establish a consistent grid and arrangement for organisms, molecules, and atoms. Templates serve as a blueprint for creating pages with a consistent design.

- **Pages:** Pages represent complete screens or views within an application. They are the highest-level components and are built using templates, organisms, and other smaller components. Pages represent the final user experience and serve as the entry points for user interaction.

While our application follows the spirit of Atomic Design by dividing our UI into components, containers, and pages, we do not adhere strictly to the original Atomic Design definitions. Instead, we adapt these concepts to our specific needs, aiming to achieve reusability and maintainability in our codebase.

**Atomic Design and SOLID Principles:**

The Atomic Design methodology aligns well with the SOLID principles of software design, specifically the Single Responsibility Principle (SRP) and the Open/Closed Principle (OCP).

- **Single Responsibility Principle (SRP):** Atomic Design encourages the creation of small, focused components (atoms) that have a single responsibility. This corresponds to the SRP, which states that a class or component should have only one reason to change. By keeping our atoms and molecules small and focused, we adhere to SRP.

- **Open/Closed Principle (OCP):** Atomic Design's modular structure makes it easier to extend the UI without modifying existing components. When we create new molecules or organisms, we're following the OCP, which states that software entities (components, in this case) should be open for extension but closed for modification.

In summary, while we may not strictly adhere to every aspect of Atomic Design, we are guided by its principles to create a maintainable and extensible UI. We use the concepts of atoms, molecules, organisms, templates, and pages to structure our code in a way that promotes reusability and separation of concerns, aligning with both Atomic Design and SOLID principles.

## Gitmoji Commit Convention

We use the Gitmoji commit convention to provide a visual representation of the purpose and content of each commit. This convention helps us understand changes at a glance and maintain a clean commit history.

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
