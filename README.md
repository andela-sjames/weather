# 🌤️ Vite Weather App

A simple weather application built with [Vite](https://vitejs.dev/), HTML, CSS, and JavaScript. It uses the [OpenWeather API](https://openweathermap.org/api) to fetch current temperature data based on city input.

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:andela-sjames/weather.git
cd weather
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your OpenWeather API Key

Create a `.env` file in the root of the project:

```
VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
```

You can get a free key by signing up at [https://openweathermap.org/](https://openweathermap.org/).

---

## 🚀 Run the App Locally

```bash
npm run dev
```

Then open your browser to:

```
http://localhost:5173
```

---

## 🌐 Deploy to GitHub Pages

### 1. Set the correct `base` in `vite.config.js`

```js
export default {
  base: '/weather/', // Match your GitHub repo name
};
```

### 2. Update the deploy script in `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "vite build && gh-pages -d dist"
}
```

### 3. Set the remote URL to HTTPS (important)

```bash
git remote set-url origin https://github.com/andela-sjames/weather.git
```

### 4. Deploy

```bash
npm run deploy
```

---

## ⚠️ Common Pitfalls & Fixes

### ❌ GitHub: `Permission denied (publickey)`

> You tried to deploy using SSH without an SSH key set up.

✅ **Fix:** Switch to HTTPS:

```bash
git remote set-url origin https://github.com/yourusername/your-repo.git
```

---

### ❌ GitHub: Password authentication failed

> GitHub removed password-based HTTPS access.

✅ **Fix:** Use a **Personal Access Token**:

1. Generate it at [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Use it instead of a password when prompted.
3. Save it with:

```bash
git config --global credential.helper store
```

---

## 🧠 Optional Enhancements (Good Beginner Exercises)

These are fun, beginner-friendly features you can try adding next:

* ✅ **Show a "Loading..." message** while waiting for API response
* ✅ **Add validation** to avoid blank city searches
* ✅ **Toggle temperature unit** (Celsius/Fahrenheit)
* ✅ **Handle errors gracefully** when city is not found
* ✅ **Make the UI mobile responsive**
* ✅ **Use a weather icon** from the API response
* ✅ **Style it with Tailwind or Bootstrap**

---

## 📁 Project Structure

```
weather/
├── index.html
├── style.css
├── main.js
├── vite.config.js
├── .env            # your OpenWeather API key here
├── .gitignore
└── package.json
```

---

## 🛡️ License

This project is open-source and free to use for learning and experimentation.

