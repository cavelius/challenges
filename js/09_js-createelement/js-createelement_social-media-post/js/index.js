console.clear();

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

// Exercise:
// Use document.createElement() and append another social media post
//to the body.

// const mutter = document.querySelector("[mutter]");

const post = document.createElement("section");
post.classList.add("post");
document.body.appendChild(post);

const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
post.appendChild(p);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
post.appendChild(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";
footer.appendChild(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like";
footer.appendChild(button);
button.addEventListener("click", handleLikeButtonClick);
