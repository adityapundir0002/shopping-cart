![Login Page wrong creds](https://github.com/user-attachments/assets/b83571b6-67ce-4d22-b3c6-6c8c7516f5b1)🛒 Shopping Cart This is my submission for the Radiant Online Assignment. Built using React (Vite) + Redux Toolkit + Tailwind CSS, this project features a shopping cart with authentication and a product listing page.

🚀 Live Demo 🔗 Deployed on Netlify=> https://67c7f08eca628be38e6cfdbc--cozy-piroshki-afd09d.netlify.app/

📸 Screenshots I've added all the screenshots in the GitHub repository. Check them out to get a better idea of the UI and functionality.

**Login Page Image ![Login Page Image](https://github.com/user-attachments/assets/14ddc0bc-95ab-4a6e-933f-63586f91c3b3)


Login Page wrong creds ![Login Page wrong creds](https://github.com/user-attachments/assets/2889302b-45a8-49b1-8782-8fda40b5e558)



Login correct creds![Login correct creds](https://github.com/user-attachments/assets/373898bb-e239-4f6e-ac6c-8f193da458ee)


Product Listing Page(Home) PLP![Product Listing Page(Home) PLP](https://github.com/user-attachments/assets/4789c415-4932-4c76-b75c-9ebef252231c)


Product Detail Page (PDP)![Product Detail Page (PLP)](https://github.com/user-attachments/assets/93d2400e-6210-4d43-9db7-e32738e770bd)


Cart Page Buy success webhook![Cart Page Buy success webhook](https://github.com/user-attachments/assets/2b597dee-72fb-4764-a7ff-7a55023f3cc6)


Webhook api success![Webhook api success](https://github.com/user-attachments/assets/665e86dc-3ba9-40c5-b355-09dcfac0a572)


🔧 Tech Stack React (Vite) – Fast and optimized development experience Redux Toolkit – For state management Tailwind CSS – For styling React Router – For navigation Axios – For API calls LocalStorage – For persisting cart data ReqRes API – Used for authentication ✨ Features ✅ User Authentication (Login) ✅ Product Listing with Search ✅ Add/Remove Items from Cart ✅ Increase/Decrease Quantity ✅ LocalStorage Persistence for Cart ✅ Private Routes (Only logged-in users can access certain pages)

📂 Folder Structure Copy Edit shopping-cart/ │── dist/ # Build files (for deployment) │── node_modules/ # Dependencies │── public/ # Static assets │── src/ │ ├── components/ # Reusable UI components │ ├── pages/ # Different pages (Login, Cart, etc.) │ ├── redux/ # Redux store and slices │ ├── App.jsx # Main app component │ ├── main.jsx # Entry point │── .gitignore # Ignoring unnecessary files │── index.html # Main HTML file │── package.json # Dependencies and scripts │── README.md # You are here!
│── vite.config.js # Vite configuration ⚡ Getting Started 1️⃣ Clone the Repository bash Copy Edit git clone https://github.com/adityapundir0002/shopping-cart.git cd shopping-cart 2️⃣ Install Dependencies bash Copy Edit npm install 3️⃣ Run Locally bash Copy Edit npm run dev Now open http://localhost:5173/ in your browser.

4️⃣ Build for Production bash Copy Edit npm run build 🌍 Deployment The app is deployed on Netlify. To deploy your own version, run:

bash Copy Edit npm run build Then, upload the dist/ folder to Netlify or any other hosting service.

📌 API Used ReqRes API (https://reqres.in) → Used for login authentication Dummy JSON API → Used for fetching product data 🎯 To-Do / Improvements 🔹 Add backend integration for real authentication 🔹 Implement a checkout page 🔹 Add unit tests

**
