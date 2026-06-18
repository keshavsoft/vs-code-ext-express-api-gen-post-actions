# Developer Guide — vs-code-ext-express-api-gen-actions 🚀

## Overview

`vs-code-ext-express-api-gen-actions` is a VS Code extension for automatically generating Express.js API action methods directly from the VS Code Title Bar.

The extension focuses on rapid backend API development and reducing repetitive CRUD method coding.

---

# 🎯 Developer Purpose

When developers open endpoint files, the extension provides quick action buttons:

```bash
get
post
delete
```

Clicking a button automatically injects Express route handler code into the current file.

---

# ⚡ Current Features

✅ Generate GET methods
✅ Generate POST methods
✅ Generate DELETE methods
✅ Auto inject route handlers
✅ Express router structure support
✅ Faster CRUD development

---

# 🛠️ Action Workflow

---

# Step 1 — Run Extension

Launch extension host:

| Shortcut | Purpose                          |
| -------- | -------------------------------- |
| `F5`     | Start Extension Development Host |

---

# Step 2 — Open Endpoint File

Example:

```bash
end-points.js
```

---

# Step 3 — Title Bar Actions

Top-right title bar buttons appear:

```bash
get
post
delete
```

---

# Step 4 — Generate Method

Clicking any button injects corresponding route handler.

---

# 📄 Generated Methods

## GET

```js
router.get("/", async (req, res) => {
    res.json({
        success: true
    });
});
```

---

## POST

```js
router.post("/", async (req, res) => {
    res.json({
        success: true
    });
});
```

---

## DELETE

```js
router.delete("/", async (req, res) => {
    res.json({
        success: true
    });
});
```

---

# 📁 Project Structure

```bash
vs-code-ext-express-api-gen-actions
│
├── .vscode
├── archive
├── Docs
├── src
├── test
│
├── extension.js
├── package.json
├── README.md
├── dev.md
└── CHANGELOG.md
```

---

# 📄 Important Files

| File            | Purpose                      |
| --------------- | ---------------------------- |
| `extension.js`  | Main extension logic         |
| `package.json`  | VS Code command registration |
| `end-points.js` | Route generation target      |
| `README.md`     | User documentation           |
| `dev.md`        | Developer documentation      |

---

# ⚡ Developer Shortcuts

| Shortcut           | Purpose              |
| ------------------ | -------------------- |
| `F5`               | Run extension        |
| `Ctrl + Shift + P` | Open command palette |
| `Ctrl + R`         | Reload VS Code       |
| `Ctrl + ``         | Open terminal        |

---

# 🧠 Developer Notes

* Prevent duplicate method injection
* Validate existing router structure
* Maintain Express.js coding standards
* Keep generated methods modular
* Preserve developer-written code

---

# 🧪 Testing Workflow

## Install Dependencies

```bash
npm install
```

---

## Run Extension

```bash
F5
```

---

## Validate

Check:

* GET generation
* POST generation
* DELETE generation
* Route placement
* Duplicate prevention

---

# 🚀 Future Improvements

Planned features:

* PUT method generation
* PATCH support
* Middleware injection
* Route parameter generation
* TypeScript support
* AI-assisted endpoint generation

---

# 🧠 Technologies Used

* Node.js
* Express.js
* JavaScript
* VS Code Extension API

---

# 👨‍💻 Maintainer

Developed by **KeshavSoft**
