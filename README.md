# 🎟️ Ticketentra – AI-Powered Ticket Support System

**Ticketentra** is a full-stack AI-driven support ticketing system built using the **MERN stack** and powered by **Inngest** for background workflows. It provides seamless ticket creation, real-time updates, and intelligent async processing with clean separation between client, server, and workflow logic.

---

## 🚀 Tech Stack

| Frontend        | Backend          | Workflow / Queue | Database  | Auth       | Styling      |
|-----------------|------------------|------------------|-----------|------------|--------------|
| React.js (Vite) | Node.js + Express| Inngest           | MongoDB   | JWT Tokens | Tailwind CSS |

---

## 📦 Features
- 👤 User authentication (JWT + bcrypt)
- 🎫 Submit support tickets with smart prompts
- 🔄 Async status updates using Inngest workflows
- 📩 Email Notification System
  - Email sent to users when ticket is created or resolved  
  - Email sent to admin when a new ticket is submitted  
  - Supports **Nodemailer**
- 🛠️ Admin dashboard for managing and resolving tickets
- 💾 MongoDB for storing user and ticket data
- 💡 Clean and modular folder structure
- 🚀 Ready for scaling and deployment

---
## 🛠 Tech Stack

### Frontend
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black)
- ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

### Backend
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)

### Database
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?style=flat)

### Authentication
- ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)
- ![bcryptjs](https://img.shields.io/badge/-bcryptjs-orange?style=flat)

### Email Services
- ![Nodemailer](https://img.shields.io/badge/-Nodemailer-yellow?style=flat)
- ![SendGrid](https://img.shields.io/badge/-SendGrid-0080FF?style=flat&logo=sendgrid&logoColor=white)

---

## 📧 Email Notification System

- ✉️ User is notified when a ticket is created or resolved.
- 📢 Admin is alerted when a new ticket is submitted.
- Implemented using `Nodemailer` (can be easily extended to use SendGrid for production).

---

## 📦 Future Enhancements

- 📊 Ticket Analytics Dashboard
- 🔄 Real-Time Updates (Socket.IO)
- 👤 Profile Management
- 🏷️ Priority & Category Filters
- 📝 WYSIWYG Rich Text Editor for ticket descriptions

---


## ⚙️ Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/SomiyaRana/Ticketentra.git
cd Ticketentra
```

### 2. Set up the Backend
```bash
cd server
npm install
npm run dev
```
### 3. Set up Frontend
```bash
cd ../client
npm install
npm run dev
```
### 4. Set up Inngest
```bash
cd ../inngest
npm install
# Run Inngest dev server or deploy
```
---


### 🧑‍💻 Author

Made with ❤️ by [Somiya Rana](https://github.com/SomiyaRana)  
Special thanks to [Hitesh Choudhary](https://github.com/hiteshchoudhary) for project inspiration.


### 📄 License
This project is licensed under the MIT License.
