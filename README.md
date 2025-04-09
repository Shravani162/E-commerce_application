```markdown
# E-commerce_application

Welcome to **E-commerce_application**! ✨
This project is a superhero-themed T-shirt store with a Starry Night UI, smooth shopping experience, admin control, and a secure checkout system.

---

## 📑 Table of Contents

1. [🚀 Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation Steps](#installation-steps)
2. [🛠️ Development Setup](#development-setup)
   - [Running the Application](#running-the-application)
   - [Health Checks](#health-checks)
3. [📝 Contributing Process](#contributing-process)
   - [Branch Management](#branch-management)
   - [Making Changes](#making-changes)
   - [Submitting PRs](#submitting-prs)
4. [🚀 Coding Standards](#coding-standards)
   - [General Guidelines](#general-guidelines)
   - [Naming Conventions](#naming-conventions)
   - [Git Commit Standards](#git-commit-standards)
5. [⚡ Quick Start Commands](#quick-start-commands)
6. [💡 Support](#support)

---

## 🚀 Getting Started

### Prerequisites

Make sure these are installed:

-   **Node.js (LTS)** → [Download](https://nodejs.org/)
-   **MongoDB** → [Download](https://www.mongodb.com/try/download/community)
-   **Git** → [Download](https://git-scm.com/)
-   **Stripe Account** → [Setup](https://stripe.com)

---

### Installation Steps

#### 1. Fork the Repository

1.  Visit the [Main Repository](https://github.com/your-org/E-commerce_application)
2.  Click **Fork** → Select **all branches** → Click **Create Fork**

#### 2. Clone Your Fork

```bash
git clone <your-forked-repo-url>
cd E-commerce_application
```

## 🛠️ Development Setup

### Running the Application

To start both client and server together (recommended):

```bash
npm install
npm run dev
```

This uses `concurrently` to run both:

  - **Client:** `cd client && npm run dev`
  - **Server:** `cd server && npm run dev`

✅ You can still run them individually by navigating into `/client` or `/server`.

### Health Checks

Test backend connection:

```bash
curl -X GET http://localhost:5000/api/health
```

Expected Response:

```json
{"status": "ok"}
```

## 📝 Contributing Process

### Branch Management

🚨 **Never push directly to `main` or `develop`**

**Step 1:** Always pull the latest `develop` branch

```bash
git checkout develop
git pull origin develop
```

**Step 2:** Create your feature branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1.  Write your code.

2.  Stage your changes:

    ```bash
    git add .
    ```

3.  Commit with a clear message:

    ```bash
    git commit -m "feat(cart): add add-to-cart functionality"
    ```

4.  Push your feature branch:

    ```bash
    git push origin feature/your-feature-name
    ```

### Submitting PRs

1.  Go to GitHub → Click **“Compare & Pull Request”**
2.  Set:
      * **Base branch** → `develop`
      * **Compare** → `feature/your-feature-name`
3.  Add a description, screenshots (if applicable), and linked issues.
4.  Click **Create Pull Request**.

## 🚀 Coding Standards

### General Guidelines

  - Follow MVC/component-based architecture.
  - Keep logic, UI, and styles clean and separate.
  - Secure backend (input validations, auth checks).
  - Remove unused code, avoid `console.log` statements in production code.

### Naming Conventions

| Element           | Style        | Example             |
| ----------------- | -------------| ------------------- |
| Files & Folders   | `camelCase`  | `orderList.js`      |
| Variables/Funcs   | `camelCase`  | `fetchUserDetails()`|
| React Components  | `PascalCase` | `OrderDetails.jsx`  |
| DB Fields         | `snake_case` | `product_price`     |
| Constants         | `UPPER_CASE` | `MAX_CART_ITEMS`    |

### Git Commit Standards

Use [Conventional Commits](https://www.conventionalcommits.org/):

  - `feat`: new feature → `feat(login): add JWT auth`
  - `fix`: bug fix → `fix(cart): fix quantity update bug`
  - `refactor`: code improvement (no feature change)
  - `style`: CSS/UI changes only
  - `docs`: README or documentation changes
  - `chore`: project setup or tooling changes
  - `test`: adding/updating tests

## ⚡ Quick Start Commands

```bash
# Clone and go into project
git clone [https://github.com/your-username/E-commerce_application.git](https://github.com/your-username/E-commerce_application.git)
cd E-commerce_application

# Install dependencies and run both frontend & backend
npm install
npm run dev

# To create a feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Commit and push your work
git add .
git commit -m "feat: describe your work"
git push origin feature/your-feature-name
```

## 💡 Support

For any issues or questions, please open a new issue on the [GitHub repository](https://www.google.com/search?q=https://github.com/your-org/E-commerce_application/issues).

-----

```

**Remember to replace:**

* `https://github.com/your-org/E-commerce_application` with the actual URL of your main repository.
* `<your-forked-repo-url>` with the URL of the repository you forked.
* `https://github.com/your-username/E-commerce_application` in the Quick Start Commands with your actual GitHub username and repository name.
* `<your_concurrently_version>` in the root `package.json` with the actual version of `concurrently` that was installed (if applicable, though not mentioned in this README).
* `your_database_name` in the `.env` example with your actual MongoDB database name (if you add an `.env` section later).

### Verification
The Table of Contents now uses proper Markdown link syntax (e.g., `[Getting Started](#getting-started)`), and these will work as clickable links when viewed on platforms like GitHub, GitLab, or any Markdown renderer that supports anchor links. The section IDs match the headers exactly as they are processed (lowercase, spaces as hyphens).

Let me know if you need further tweaks or additions!
