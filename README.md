🛒 Shopping Cart This is my submission for the Radiant Online Assignment. Built using React (Vite) + Redux Toolkit + Tailwind CSS, this project features a shopping cart with authentication and a product listing page.

🚀 Live Demo 🔗 Deployed on Netlify=> https://67c7f08eca628be38e6cfdbc--cozy-piroshki-afd09d.netlify.app/

📸 Screenshots I've added all the screenshots in the GitHub repository. Check them out to get a better idea of the UI and functionality. **Login Page Image

Login Page wrong creds

Login correct creds

Product Listing Page(Home) PLP

Product Detail Page (PLP)

Cart Page Buy success webhook

Webhook api success

🔧 Tech Stack React (Vite) – Fast and optimized development experience Redux Toolkit – For state management Tailwind CSS – For styling React Router – For navigation Axios – For API calls LocalStorage – For persisting cart data ReqRes API – Used for authentication ✨ Features ✅ User Authentication (Login) ✅ Product Listing with Search ✅ Add/Remove Items from Cart ✅ Increase/Decrease Quantity ✅ LocalStorage Persistence for Cart ✅ Private Routes (Only logged-in users can access certain pages)

📂 Folder Structure Copy Edit shopping-cart/ │── dist/ # Build files (for deployment) │── node_modules/ # Dependencies │── public/ # Static assets │── src/ │ ├── components/ # Reusable UI components │ ├── pages/ # Different pages (Login, Cart, etc.) │ ├── redux/ # Redux store and slices │ ├── App.jsx # Main app component │ ├── main.jsx # Entry point │── .gitignore # Ignoring unnecessary files │── index.html # Main HTML file │── package.json # Dependencies and scripts │── README.md # You are here!
│── vite.config.js # Vite configuration ⚡ Getting Started 1️⃣ Clone the Repository bash Copy Edit git clone https://github.com/adityapundir0002/shopping-cart.git cd shopping-cart 2️⃣ Install Dependencies bash Copy Edit npm install 3️⃣ Run Locally bash Copy Edit npm run dev Now open http://localhost:5173/ in your browser.

4️⃣ Build for Production bash Copy Edit npm run build 🌍 Deployment The app is deployed on Netlify. To deploy your own version, run:

bash Copy Edit npm run build Then, upload the dist/ folder to Netlify or any other hosting service.

📌 API Used ReqRes API (https://reqres.in) → Used for login authentication Dummy JSON API → Used for fetching product data 🎯 To-Do / Improvements 🔹 Add backend integration for real authentication 🔹 Implement a checkout page 🔹 Add unit tests

**