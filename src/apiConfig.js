let apiUrl;
const expressPort = 5000;
const apiUrls = {
  production: "hhttps://pacific-eyrie-74083.herokuapp.com/",
  development: `http://localhost:${expressPort}`
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
