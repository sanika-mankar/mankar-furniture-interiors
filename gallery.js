
const galleries = {
  living: {
    title: "Living Room Interiors",
    photos: [
      "Living Room.jpeg",
      "living room-2.jpeg",
      "living room-3.jpeg",
      "living room-4.jpeg",
      "living room-5.jpeg"
    ]
  },

  kitchen: {
    title: "Modular Kitchen",
    photos: [
      "kitchen-1.jpg",
      "kitchen-2.jpg",
      "kitchen-3.jpg",
      "kitchen-4.jpg",
      "kitchen-5.jpg"
    ]
  },

  bedroom: {
    title: "Bedroom Interiors",
    photos: [
      "bedroom-1.jpeg",
      "bedroom-2.jpeg",
      "bedroom-3.jpeg",
      "bedroom-4.jpeg"
    ]
  },

  wardrobe: {
    title: "Wardrobe Design",
    photos: [
      "wardrobe-1.jpeg",
      "wardrobe-2.jpeg",
      "wardrobe-3.jpeg",
      "wardrobe-4.jpeg"
    ]
  },

  commercial: {
    title: "Commercial Interiors",
    photos: [
      "commercial-1.jpeg",
      "commercial-2.jpeg",
      "commercial-3.jpeg",
      "commercial-4.jpeg",
      "commercial-5.jpeg",
      "commercial-6.jpeg"
    ]
  },

  other: {
    title: "Other Interiors",
    photos: [
      "other interiors-1.jpeg",
      "other interiors-2.jpeg",
      "other interiors-3.jpeg",
      "other interiors-4.jpeg",
      "other interiors-5.jpeg",
      "other interiors-6.jpeg",
      "other interiors-7.jpeg",
      "other interiors-8.jpeg",
      "other interiors-9.jpeg",
      "other interiors-10.jpeg",
      "other interiors-11.jpeg"
    ]
  },

  design: {
    title: "2D & 3D Project Design",
    photos: [
      "2D&3D-1.jpeg",
      "2D&3D-2.jpeg"
    ]
  }
};

const category = new URLSearchParams(window.location.search)
  .get("category");

const gallery = galleries[category];

const title = document.getElementById("galleryTitle");
const grid = document.getElementById("galleryGrid");
const message = document.getElementById("galleryMessage");

document.getElementById("year").textContent =
  new Date().getFullYear();

if (!gallery) {
  title.textContent = "Gallery Not Found";
  message.hidden = false;
  message.textContent =
    "Please return to the services page and select a category.";
} else {
  title.textContent = gallery.title;
  document.title = `${gallery.title} | Mankar Furniture & Interiors`;

  gallery.photos.forEach((filename) => {
    const card = document.createElement("article");
    card.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `images/${filename}`;
    img.alt = `${gallery.title} project`;
    img.loading = "lazy";

    img.addEventListener("click", () => {
  const preview = document.getElementById("imagePreview");
  const previewImage = document.getElementById("previewImage");

  previewImage.src = img.src;
  previewImage.alt = img.alt;
  preview.classList.add("active");
});

    img.addEventListener("error", () => {
      card.remove();
    });

    const caption = document.createElement("p");
    caption.textContent = gallery.title;

    card.append(img, caption);
    grid.appendChild(card);
  });
}


// Create full-screen image preview
const previewBox = document.createElement("div");
previewBox.id = "imagePreview";
previewBox.className = "image-preview";

previewBox.innerHTML = `
  <span class="close-preview">&times;</span>
  <img id="previewImage" src="" alt="Full size preview">
`;

document.body.appendChild(previewBox);

// Close preview using X button
previewBox.querySelector(".close-preview").addEventListener("click", () => {
  previewBox.classList.remove("active");
});

// Close preview by clicking outside the image
previewBox.addEventListener("click", (event) => {
  if (event.target === previewBox) {
    previewBox.classList.remove("active");
  }
});

// Close preview using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    previewBox.classList.remove("active");
  }
});