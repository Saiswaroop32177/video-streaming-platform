/* ========== DATA ========== */
const movies = [
  {
    title: "Dookudu",
    type: "Movie",
    genre: "Action • Comedy",
    desc: "A high-octane action comedy starring Mahesh Babu. A police officer fights corruption with style and humour.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuZDklGNmAoCHNMek4AtKgoJxoQ-xdpnf28uI82B6UA&s=10",
    link: "https://youtu.be/eELZR-ejbt4"
  },
  {
    title: "Gabbar Singh",
    type: "Movie",
    genre: "Action • Comedy",
    desc: "Pawan Kalyan as a tough cop who takes on the underworld with his unique style.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT-VWqQXhDwwMwgm27O4SFtVMfYnkwVFbqiqyedECBQ&s=10",
    link: "https://youtu.be/EztUsjJAh0E"
  },
  {
    title: "Racha",
    type: "Movie",
    genre: "Action • Romance",
    desc: "Ram Charan in a high-energy action entertainer filled with romance and thrills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjKAy-Le2zK58DbAn1Dt8xl9b80tuVKYun396iQc5hw&s=10",
    link: "https://youtu.be/75qE7h-OQIk"
  },
  {
    title: "Kalki 2898 AD",
    type: "Movie",
    genre: "Sci-Fi • Mythology",
    desc: "An epic futuristic saga blending mythology and science fiction. A must-watch cinematic experience.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiuGfI8NavhuE2OURH0DYR-j6mMdJkl3_REqrN_3olA&s",
    link: "https://youtu.be/tdSWciABBDs?si=DL-A02jA_NgOkXBZ"
  },
  {
    title: "Race Gurram",
    type: "Movie",
    genre: "Action • Comedy",
    desc: "Allu Arjun as a carefree youth who becomes a force against injustice.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEg1nI6RYNChgmJe23KXtrCEbxd9HgSnupIyQqdeWoQ&s=10",
    link: "https://youtu.be/6XM5azmkkYA"
  },
  {
    title: "Thuppakki",
    type: "Movie",
    genre: "Action • Thriller",
    desc: "Vijay as an army officer who takes on a sleeper cell network in a gripping thriller.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGdudHVRcdYz3PeQgxJYu_86EPTq24asvo3mIadtHMrw&s=10",
    link: "https://youtu.be/R1vEkxA1gJ0"
  },
  {
    title: "Jawan",
    type: "Movie",
    genre: "Action • Thriller",
    desc: "Shah Rukh Khan in a high-octane action spectacle with social messages and stunning set pieces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspeCC5b11H-jR5OYZY9HyhsghmgtdmsbsdhEdyFvD9w&s=10",
    link: "https://youtu.be/UzmgIeg7jNs"
  },
  {
    title: "idhayam murali",
    type: "Movie",
    genre: "comedy • love",
    desc: "idhaya is shy to expose his love how he wxpressed his love ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZlsAztfW9rPvG-VyV3SCjXZnqxmhaVopphwvprSCDg&s=10",
    link: "https://youtu.be/sphPuFUveuM?si=wwgfjti4_fyddJNs"
  },
  {
    title: "jailer",
    type: "Movie",
    genre: "action",
    desc: " retired jailer goes on a manhunt to find his son's killers. ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbBAgGBJzFkvZdJ-utIn4xostu6y_eUCaODrd3841Xg&s=10",
    link: "https://youtu.be/fgZ9pJbVA3c?si=BNV68tHxHol92cpH"
  },
  
  {
    title: "irumudi",
    type: "Movie",
    genre: "Action ",
    desc: " sacred two-compartment travel bundle carried on the head by devotees (Ayyappas) during the pilgrimage to the Sabarimala Sree Dharma Sastha Temple in Kerala, Indi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBX54VkCGbqfN-58f9xQal-m4YCwAnKdzyqLUan0Mag&s=10",
    link: "https://youtu.be/7w7LUaLpM4E?si=r2Gtvrfv4F2UTx7f"
  },
  {
    title: "Baahubali: The Beginning",
    type: "Movie",
    genre: "Action • Epic",
    desc: "The legendary epic that redefined Indian cinema. A prince discovers his destiny in a grand kingdom.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44Ezq0U-iST9sep6il0tcWkexmGm32B5Gy2QORIr64Q&s",
    link: "https://youtu.be/b-KifVIZgwA?si=oe3phc-KseLPeaZY"
  },
  {
    title: "Bigg Boss 10",
    type: "Show",
    genre: "Reality Show",
    desc: "The ultimate reality show where contestants live under one roof competing for the trophy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCHAB-BreWnqtAKONW9T0rGTvKNK8pVdx8eAgCCIuKQ&s=10",
    link: "https://youtu.be/tvhNMuBZP5c"
  },
  {
    title: "Stranger Things",
    type: "Series",
    genre: "Sci-Fi • Horror • Mystery",
    desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying forces and one strange little girl.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttSA5iUmLZR0L4DMWzR5DbZKhFL01JgTxGdpKwdDDIg&s=10",
    link: "https://youtu.be/b9EkMc79ZSU"
  },
  {
    title: "Breaking Bad",
    type: "Series",
    genre: "Crime • Drama • Thriller",
    desc: "A chemistry teacher diagnosed with cancer turns to a life of crime, producing and selling methamphetamine with a former student.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGcD9cTuPhEBlfhcSfirAHYCTCiC2tfQEX4ovWpJeQUmpByiscQb9w-gk&s=10",
    link: "https://youtu.be/46l2HlRQHk8"
  },
  {
    title: "Money Heist",
    type: "Series",
    genre: "Crime • Thriller",
    desc: "A criminal mastermind known as 'The Professor' plans the biggest heist in history with a group of specialists.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7nw29MO-xm_Fmj6HrHPntig4As1s-vjLy0eZMgLGNQ&s=10",
    link: "https://youtu.be/9brl8cBAy9M?si=xzUJ27xxy1tWiTwM"
  },
  {
    title: "The Family Man",
    type: "Series",
    genre: "Action • Drama • Thriller",
    desc: "A middle-class man secretly works for a special cell of the National Intelligence Agency while balancing family life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNx-OzhesliEfEIS3Ux4jFDDLCspqUat7EoRutTgyJQ&s=10",
    link: "https://youtu.be/gUoMPGEArsc?si=mb6fq6FiDUQ5HQVD"
  },
  {
    title: "Sacred Games",
    type: "Series",
    genre: "Crime • Thriller",
    desc: "A Mumbai police officer is drawn into a battle against a crime boss and a prophecy of impending doom.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl94facJUaVVzf8TRZBWJ9zx5lev5S3Vsl1MopqSopPQ&s=10",
    link: "https://youtu.be/AkUgf2jIPyI?si=kZPLZNBzkfnSHSqZ"
  }
];

/* High-quality images for hero carousel (sharp & clear) */
const featured = [
  {
    title: "Kalki 2898 AD",
    desc: "An epic futuristic saga blending mythology and science fiction.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQE3GNaNvpHKCKRM4FO3KST_mM1PIGt7YygFZVeAv_w&s=10",
    movieIndex: 3
  },
  {
    title: "Baahubali: The Beginning",
    desc: "The legendary epic that redefined Indian cinema.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85-aMMOdE-aKd2An1OJwMXilmmqY4vw4ZzbWS_EpMxw&s=10",
    movieIndex: 7
  },
  {
    title: "Jawan",
    desc: "Shah Rukh Khan in a high-octane action spectacle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cBAHPpbkbuRKzViCueMrN8FwNsSAT3vo1XT3ZCyWvg&s=10",
    movieIndex: 6
  },
  {
    title: "Stranger Things",
    desc: "A small town uncovers a mystery involving secret experiments.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttSA5iUmLZR0L4DMWzR5DbZKhFL01JgTxGdpKwdDDIg&s=10",
    movieIndex: 9
  },
  {
    title: "Breaking Bad",
    desc: "A chemistry teacher turns to a life of crime.",
    image: "data:image/jpeg;base64,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",
    movieIndex: 10
  },
  {
    title: "Dookudu",
    desc: "Mahesh Babu in a high-octane action comedy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcI6g3-RtZSaQEY6n1G1NQyGlZb1xHAqbPEK-IOKGH7g&s=10",
    movieIndex: 0
  }
];

let selected = null;
let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
let heroIndex = 0;
let heroTimer = null;
let authMode = "login";

/* ========== HELPERS ========== */
function getYoutubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ========== HERO CAROUSEL (CLEAR) ========== */
function initHero() {
  const slidesContainer = document.getElementById("heroSlides");
  const dotsContainer = document.getElementById("heroDots");

  slidesContainer.innerHTML = featured.map((item, i) =>
    `<div class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image:url('${item.image}')"></div>`
  ).join("");

  dotsContainer.innerHTML = featured.map((_, i) =>
    `<div class="hero-dot ${i === 0 ? 'active' : ''}" onclick="goToHero(${i})"></div>`
  ).join("");

  updateHeroContent(0);
  startHeroAuto();
}

function updateHeroContent(index) {
  const item = featured[index];
  document.getElementById("heroTitle").textContent = item.title;
  document.getElementById("heroDesc").textContent = item.desc;
  document.getElementById("heroPlayBtn").onclick = () => openMovie(item.movieIndex);

  document.querySelectorAll(".hero-slide").forEach((s, i) => {
    s.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".hero-dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

function goToHero(index) {
  heroIndex = index;
  updateHeroContent(heroIndex);
  startHeroAuto();
}

function nextHero() {
  heroIndex = (heroIndex + 1) % featured.length;
  updateHeroContent(heroIndex);
}

function startHeroAuto() {
  clearInterval(heroTimer);
  heroTimer = setInterval(nextHero, 5500);
}

/* ========== CARDS ========== */
function createCard(item, index) {
  return `
    <div class="card" onclick="openMovie(${index})">
      <img src="${item.image}" alt="${item.title}" loading="lazy"
           onerror="this.src='https://via.placeholder.com/300x450/222/666?text=No+Image'">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.genre}</p>
        <button class="card-btn" onclick="event.stopPropagation(); openMovie(${index})">
          <i class="fas fa-play"></i> Watch
        </button>
      </div>
    </div>
  `;
}

function display(list = movies) {
  const movieList = document.getElementById("movieList");
  const showList = document.getElementById("showList");
  const seriesList = document.getElementById("seriesList");
  const trendingList = document.getElementById("trendingList");

  const moviesOnly = list.filter(x => x.type === "Movie");
  const showsOnly = list.filter(x => x.type === "Show");
  const seriesOnly = list.filter(x => x.type === "Series");

  movieList.innerHTML = moviesOnly.length
    ? moviesOnly.map(x => createCard(x, movies.indexOf(x))).join("")
    : '<p class="empty-msg">No movies found.</p>';

  showList.innerHTML = showsOnly.length
    ? showsOnly.map(x => createCard(x, movies.indexOf(x))).join("")
    : '<p class="empty-msg">No shows found.</p>';

  seriesList.innerHTML = seriesOnly.length
    ? seriesOnly.map(x => createCard(x, movies.indexOf(x))).join("")
    : '<p class="empty-msg">No series found.</p>';

  const trending = list.slice(0, 8);
  trendingList.innerHTML = trending.length
    ? trending.map(x => createCard(x, movies.indexOf(x))).join("")
    : '<p class="empty-msg">No results.</p>';
}

function displayWatchlist() {
  const container = document.getElementById("watchlistList");
  if (!watchlist.length) {
    container.innerHTML = '<p class="empty-msg">Your list is empty. Add titles from the details page.</p>';
    return;
  }
  const items = movies.filter(m => watchlist.includes(m.title));
  container.innerHTML = items.map(x => createCard(x, movies.indexOf(x))).join("");
}

/* ========== AUTH ========== */
function openAuthModal(mode = "login") {
  authMode = mode;
  switchAuth(mode);
  document.getElementById("authModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  document.getElementById("authModal").style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("authForm").reset();
}

function switchAuth(mode) {
  authMode = mode;
  const isLogin = mode === "login";

  document.getElementById("authTitle").textContent = isLogin ? "Sign In" : "Sign Up";
  document.getElementById("authSub").textContent = isLogin ? "Welcome back to StreamFlix" : "Create your StreamFlix account";
  document.getElementById("authSubmitBtn").textContent = isLogin ? "Sign In" : "Create Account";
  document.getElementById("nameGroup").style.display = isLogin ? "none" : "block";

  document.getElementById("tabLogin").classList.toggle("active", isLogin);
  document.getElementById("tabSignup").classList.toggle("active", !isLogin);

  document.getElementById("authSwitchText").innerHTML = isLogin
    ? 'New to StreamFlix? <a href="#" onclick="switchAuth(\'signup\'); return false;">Sign up now</a>'
    : 'Already have an account? <a href="#" onclick="switchAuth(\'login\'); return false;">Sign in</a>';
}

function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const name = document.getElementById("authName").value.trim();

  if (!email || !password) {
    alert("Please fill all required fields.");
    return;
  }

  if (authMode === "signup") {
    if (!name) {
      alert("Please enter your full name.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) {
      alert("Account already exists. Please Sign In.");
      switchAuth("login");
      return;
    }
    users[email] = { name, password };
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", email);
    localStorage.setItem("userName", name);
    alert("Account created successfully! Welcome to StreamFlix.");
  } else {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email] && users[email].password === password) {
      localStorage.setItem("user", email);
      localStorage.setItem("userName", users[email].name);
      alert("Signed in successfully!");
    } else {
      localStorage.setItem("user", email);
      localStorage.setItem("userName", email.split("@")[0]);
      alert("Signed in successfully!");
    }
  }

  updateLogin();
  closeAuthModal();
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("userName");
  updateLogin();
  alert("You have been signed out.");
}

function updateLogin() {
  const user = localStorage.getItem("user");
  const name = localStorage.getItem("userName") || (user ? user.split("@")[0] : "");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userName = document.getElementById("userName");

  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-flex";
    userName.textContent = name;
  } else {
    loginBtn.style.display = "inline-flex";
    logoutBtn.style.display = "none";
    userName.textContent = "";
  }
}

function requireLogin() {
  if (!localStorage.getItem("user")) {
    openAuthModal("login");
    return false;
  }
  return true;
}

/* ========== OPEN / CLOSE MOVIE ========== */
function openMovie(index) {
  if (!requireLogin()) return;

  selected = movies[index];
  if (!selected) return;

  stopPlayer();

  document.getElementById("popupImage").src = selected.image;
  document.getElementById("popupTitle").innerText = selected.title;
  document.getElementById("popupGenre").innerText = selected.genre;
  document.getElementById("popupType").innerText = selected.type;
  document.getElementById("popupDesc").innerText = selected.desc || "Watch this title on StreamFlix.";

  const btn = document.getElementById("watchlistBtn");
  if (watchlist.includes(selected.title)) {
    btn.innerHTML = '<i class="fas fa-check"></i> In My List';
    btn.classList.add("active");
  } else {
    btn.innerHTML = '<i class="fas fa-plus"></i> My List';
    btn.classList.remove("active");
  }

  document.getElementById("moviePopup").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeMovie() {
  stopPlayer();
  document.getElementById("moviePopup").style.display = "none";
  document.body.style.overflow = "";
  selected = null;
}

/* ========== PLAYER ========== */
function startPlayer() {
  if (!selected) return;

  const videoId = getYoutubeId(selected.link);
  if (!videoId) {
    alert("Video not available for this title.");
    return;
  }

  const playerDiv = document.getElementById("ytPlayer");
  const overlay = document.getElementById("playOverlay");
  const img = document.getElementById("popupImage");

  playerDiv.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&controls=1&fs=1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="${selected.title}">
    </iframe>
  `;

  playerDiv.style.display = "block";
  overlay.style.display = "none";
  img.style.display = "none";
}

function stopPlayer() {
  const playerDiv = document.getElementById("ytPlayer");
  const overlay = document.getElementById("playOverlay");
  const img = document.getElementById("popupImage");

  playerDiv.innerHTML = "";
  playerDiv.style.display = "none";
  overlay.style.display = "flex";
  img.style.display = "block";
}

/* ========== WATCHLIST ========== */
function toggleWatchlist() {
  if (!selected) return;

  const btn = document.getElementById("watchlistBtn");
  const title = selected.title;

  if (watchlist.includes(title)) {
    watchlist = watchlist.filter(t => t !== title);
    btn.innerHTML = '<i class="fas fa-plus"></i> My List';
    btn.classList.remove("active");
    alert(title + " removed from My List.");
  } else {
    watchlist.push(title);
    btn.innerHTML = '<i class="fas fa-check"></i> In My List';
    btn.classList.add("active");
    alert(title + " added to My List!");
  }

  localStorage.setItem("watchlist", JSON.stringify(watchlist));
  displayWatchlist();
}

/* ========== SEARCH ========== */
document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();
  if (!value) {
    display();
    return;
  }
  const result = movies.filter(x =>
    x.title.toLowerCase().includes(value) ||
    x.genre.toLowerCase().includes(value) ||
    x.type.toLowerCase().includes(value)
  );
  display(result);
});

/* ========== PLANS ========== */
function buyPlan(name, price) {
  if (!requireLogin()) return;
  document.getElementById("selectedPlan").innerText = name + " Plan — ₹" + price + "/month";
  document.getElementById("paymentPopup").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function payment() {
  const name = document.getElementById("name").value.trim();
  const id = document.getElementById("paymentId").value.trim();
  if (!name || !id) {
    alert("Please enter your name and payment details.");
    return;
  }
  localStorage.setItem("subscription", document.getElementById("selectedPlan").innerText);
  alert("✅ Payment Successful!\nYour subscription is now active.\nEnjoy StreamFlix!");
  closePayment();
}

function closePayment() {
  document.getElementById("paymentPopup").style.display = "none";
  document.body.style.overflow = "";
  document.getElementById("name").value = "";
  document.getElementById("paymentId").value = "";
}

/* ========== EVENTS ========== */
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMovie();
    closePayment();
    closeAuthModal();
  }
});

/* ========== INIT ========== */
updateLogin();
display();
displayWatchlist();
initHero();
