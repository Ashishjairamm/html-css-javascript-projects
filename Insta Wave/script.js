document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");
  const profileImageInput = document.getElementById("profileImage");
  const profileImagesDiv = document.getElementById("profileImages");
  const profilePic = document.getElementById("profilePic");

  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = profileImageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        profileImagesDiv.innerHTML = ""; // Clear existing images
        profileImagesDiv.appendChild(img);
        profilePic.src = event.target.result; // Update profile picture
      };
      reader.readAsDataURL(file);
    }
  });

  // Navigation event listeners
  const navItems = document.querySelectorAll("nav ul li");
  const contents = document.querySelectorAll(".content");

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      document.querySelector("nav ul li.active").classList.remove("active");
      item.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("show");
      });
      contents[index].classList.add("show");
    });
  });
});
