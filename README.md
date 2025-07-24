# 🌐 From the Other Side

A basic Node.js static file server that mimics core backend behavior like routing, content serving, and 404 error handling. Developed as part of a backend learning journey through the Scrimba Fullstack path.


## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or higher recommended)

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/alinazir105/From-the-Other-Side.git
cd From-the-Other-Side

# Start the server
node server.js
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🌟 Features

* Serves static HTML pages
* Dynamic MIME type resolution
* Custom 404 error page support
* Modular and beginner-friendly code

---

## 📄 Example Routes

| Route            | Description                         |
| ---------------- | ----------------------------------- |
| `/`              | Loads `index.html`                  |
| `/upload-sightings`| Loads  `upload-sightings.html`    |
| `/invalid-route` | Shows custom `404.html`             |

---

## 📚 Learnings

* How Node.js handles HTTP requests natively
* MIME types and headers
* File system operations with `fs`
* Clean modular architecture for backend logic

---

## 🙋‍♀️ Author

**Ali Nazir**
📂 GitHub: [@alinazir105](https://github.com/alinazir105)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to clone, fork, or build upon it for educational purposes!
