import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDO5-7oISbCWwLHeNi2yRhLelqNFTL45xc",
    authDomain: "wise-events-34f8e.firebaseapp.com",
    projectId: "wise-events-34f8e",
    storageBucket: "wise-events-34f8e.firebasestorage.app",
    messagingSenderId: "287361146109",
    appId: "1:287361146109:web:bb9a13c00deb1bd7107294",
    measurementId: "G-TTNQDD6CPE"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function loadGallery() {
  const folderRef = ref(storage, "galleryPictures");
  const result = await listAll(folderRef);

  const urls = await Promise.all(
    result.items.map(item => getDownloadURL(item))
  );

  const gallery = document.getElementById("galleryContainer");

  urls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "WISE gallery image";
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.display = "block";
    gallery.appendChild(img);
  });
}

loadGallery();