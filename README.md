# Deepfake-News-Shield

##  Overview

This project aims to combat the spread of **misinformation** by detecting both **fake news (text-based)** and **deepfake images (visual-based)** in a single, unified system.

* **Text Analysis:** Uses NLP + ML (TF-IDF with Linear SVC) to classify news articles as *Real* or *Fake*.
* **Image Analysis:** Uses a **Vision Transformer (ViT)** to detect manipulated or deepfake images.
* **Fact Verification:** Integrates **Google FactCheck API** for real-time claim validation.
* **User Interface:** Provides a **web app** (Flask + Streamlit) for seamless interaction.

---

##  Features

* Fake news detection using **NLP + ML**
* Deepfake detection using **Vision Transformers (ViT)**
* Real-time **fact-checking API integration**
* Interactive **frontend (Streamlit)** for text input & image upload
* Visualization with **word clouds, sentiment charts, confidence scores**

---

##  Tech Stack

**Languages & Frameworks**

* Python 3.10+
* Flask (backend APIs)
* Streamlit (frontend dashboard)
* PyTorch (deep learning models)
* scikit-learn (ML models)
* Transformers (Hugging Face)

**Database (Optional)**

* MongoDB for logging results and storing user history

**External API**

* Google FactCheck API

**Versioning**

* Git + GitHub for source control

---

##  Datasets

* **Fake News Detection:** Kaggle – *Fake and Real News Dataset* (Title, Text, Subject, Date, Label)
* **Deepfake Detection:** Kaggle – *Deepfake Detection Challenge* (Real/Fake labeled images)

---

##  Current Progress

*  Reviewed **15+ research papers** to select best models & tools
*  Finalized **datasets** (fake news + deepfake images)
*  Set up **Git repository & frontend prototype**
*  Next: Implement backend APIs, train models, and integrate fact-checking

---

##  Team Roles

* **Member 1:** Research lead (literature review, dataset curation)
* **Member 2:** Backend developer (Flask APIs, model integration)
* **Member 3:** Frontend developer (Streamlit dashboards)
* **Member 4:** Model training (TF-IDF + ViT, evaluation)

---

## 📅 Work Plan (Oct–Dec 2025)

* **Oct 2025:** Finalize architecture, preprocessing, repo setup
* **Nov 2025:** Implement pipelines, build APIs, train fake news model
* **Dec 2025:** Train deepfake model, integrate API, testing + visualization

--- 
##  References

1. K. Shu et al., *Fake News Detection on Social Media: A Data Mining Perspective*, ACM SIGKDD, 2017.
2. A. Dosovitskiy et al., *An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale*, arXiv, 2020.
3. J. Kietzmann et al., *Deepfakes: Trick or Treat?*, Business Horizons, 2020.
4. Kaggle Datasets: *Fake and Real News*, *Deepfake Detection Challenge*.
5. OpenAI, *ChatGPT (Sep 2025 version)*, [https://chat.openai.com/](https://chat.openai.com/).


