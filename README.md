# vs-code-ext-express-api-gen-actions 🚀

AI-assisted Express API action generator extension for Visual Studio Code.

Quickly create Express.js API methods like **GET**, **POST**, and **DELETE** directly from the VS Code Title Bar with a single click.

---

# ✨ Overview

**vs-code-ext-express-api-gen-actions** is a Visual Studio Code extension developed by **KeshavSoft** to simplify Express.js endpoint action generation.

Instead of manually writing repetitive API methods, the extension automatically generates route handlers and boilerplate code directly inside your endpoint files.

---

# 🎯 Main Purpose

This extension helps developers instantly create:

* GET methods
* POST methods
* DELETE methods
* Route boilerplate
* Express router structure

directly from the **VS Code Title Bar actions menu**.

---

# ⚡ Features

✅ One-click GET method generation
✅ One-click POST method generation
✅ One-click DELETE method generation
✅ Auto-generate Express route handlers
✅ Works directly inside endpoint files
✅ Faster backend API development
✅ Clean Express.js architecture
✅ Beginner-friendly workflow

---

# 🖼️ API Actions

When opening an endpoint file, the following actions appear on the VS Code Title Bar:

```bash id="n2x8pa"
get
post
delete
```

Clicking any action automatically generates the selected API method inside the current file.

---

# 🚀 Generated GET Method Example

```js id="m7q4jd"
router.get("/", async (req, res) => {
    res.json({
        success: true,
        message: "GET method generated"
    });
});
```

---

# 🚀 Generated POST Method Example

```js id="k8t2ye"
router.post("/", async (req, res) => {
    res.json({
        success: true,
        message: "POST method generated"
    });
});
```

---

# 🚀 Generated DELETE Method Example

```js id="v4m9ac"
router.delete("/", async (req, res) => {
    res.json({
        success: true,
        message: "DELETE method generated"
    });
});
```

---

# 📁 Folder Structure

```bash id="r9u3lk"
vs-code-ext-express-api-gen-actions
│
├── .vscode
├── archive
├── Docs
├── node_modules
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
├── READMEv1.md
└── CHANGELOG.md
```

---

# 🛠️ How It Works

## Step 1

Open any endpoint file.

Example:

```bash id="q7p2fd"
end-points.js
```

---

## Step 2

Use the VS Code Title Bar buttons:

```bash id="d5m8zs"
get
post
delete
```

---

## Step 3

The extension automatically injects the selected method into the current router file.

---

# 📄 Example Endpoint File

```js id="x3t7wn"
import express from "express";

const router = express.Router();

export { router };
```

After clicking action buttons, methods are automatically added to the file.

---

# 💡 Why Use This Extension?

* Avoid repetitive API coding
* Quickly generate Express actions
* Improve backend productivity
* Maintain clean route structure
* Speed up CRUD API development

---

# 🧠 Built With

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 📄 License

MIT License

---

# 👨‍💻 Author

Developed by **KeshavSoft**

---

# ⭐ Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share with developers
