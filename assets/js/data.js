const chats = [
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.27.14.jpg",
    name: "Juanita",
    desc: "At vero eos et accusa",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.32.16.jpg",
    name: "Alberto",
    desc: "blanditiis praesentium",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.30.34.jpg",
    name: "Ignacio",
    desc: "officiis debitis aut",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.28.30.jpg",
    name: "Cristian",
    desc: "Nam libero tempore",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.32.44.jpg",
    name: "María José",
    desc: "impedit quo minus id",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.31.09.jpg",
    name: "Gonzalo",
    desc: "At vero eos et accusa",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.30.54.jpg",
    name: "Juan Pablo",
    desc: "necessitatibus saepe",
  },
  {
    image: "./assets/img/Screen Shot 2018-11-28 at 15.28.04.jpg",
    name: "Magdalena",
    desc: "ut et voluptates",
  },
]

const navbar = document.querySelector(".lateral-bar .content")

const addChat = ({ image, name, desc }) => {
  const chat = document.createElement("div")
  chat.className = "contact"
  chat.innerHTML = `
    <img src="${image}" alt="${name}" class="contact-image" />
    <div class="contact-text">
      <p class="contact-name">${name}</p>
      <p class="contact-info">${desc}</p>
    </div>
  `
  // Add to DOM
  navbar.appendChild(document.createElement("hr"))
  navbar.appendChild(chat)
}

chats.forEach((chat) => addChat(chat))
