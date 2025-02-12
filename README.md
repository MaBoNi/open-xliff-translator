# Open XLIFF Translator

![Build Status](https://img.shields.io/github/actions/workflow/status/MaBoNi/open-xliff-translator/build-and-push.yml?branch=main&style=for-the-badge)
![License](https://img.shields.io/github/license/MaBoNi/open-xliff-translator?style=for-the-badge)
![Repo Size](https://img.shields.io/github/repo-size/MaBoNi/open-xliff-translator?style=for-the-badge)

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-open--xliff--translator--frontend-blue?logo=docker&style=for-the-badge)](https://hub.docker.com/r/maboni82/open-xliff-translator-frontend) [![Docker Pulls](https://img.shields.io/docker/pulls/maboni82/open-xliff-translator-frontend?style=for-the-badge)](https://hub.docker.com/r/maboni82/open-xliff-translator-frontend)

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-open--xliff--translator--backend-blue?logo=docker&style=for-the-badge)](https://hub.docker.com/r/maboni82/open-xliff-translator-backend) [![Docker Pulls](https://img.shields.io/docker/pulls/maboni82/open-xliff-translator-backend?style=for-the-badge)](https://hub.docker.com/r/maboni82/open-xliff-translator-backend)

A **Dockerized web-based XLIFF translation tool** using Flask, Nginx, and LibreTranslate. It allows users to **upload XLIFF files**, automatically translate them, and download the translated files.

---

## **Features**
✅ **XLIFF Translation** – Automatically translate `.xlf` files to different languages.  
✅ **Simple Web UI** – Upload, process, and download files via a web interface.  
✅ **Dockerized** – Quick deployment with **Docker Compose**.  
✅ **LibreTranslate Integration** – Uses **LibreTranslate**, an open-source translation engine.  

---

## **Getting Started**

### **Prerequisites**
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### **Installation**

1. **Clone the repository**:
    ```sh
    git clone https://github.com/MaBoNi/open-xliff-translator.git
    cd open-xliff-translator
    ```

2. **Run the application**:
    ```sh
    docker-compose up -d --build
    ```

3. **Access the Web Interface**:
    - **Frontend**: [http://localhost:5173](http://localhost:5173)
    - **Backend API**: [http://localhost:5002](http://localhost:5002)

---

## **Usage**
1. Open **http://localhost:5173** in your browser.
2. Upload an `.xlf` file.
3. The file is automatically translated.
4. Click the **Download** button to get the translated file.

---

## **Docker Hub Repositories**
- **Backend**: <a href="https://hub.docker.com/r/maboni82/open-xliff-translator-backend" target="_blank">open-xliff-translator-backend</a>
- **Frontend**: <a href="https://hub.docker.com/r/maboni82/open-xliff-translator-frontend" target="_blank">open-xliff-translator-frontend</a>

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contributing**
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## **Repobeats Analytics**
![Alt](https://repobeats.axiom.co/api/embed/2fcd3882961c68b0fe6569e570ad8778c83ffa87.svg "Repobeats analytics image")

---