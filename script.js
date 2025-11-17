// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Handle contact form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you, ${name}! We’ve sent a confirmation to ${email}.`);
    signupForm.reset();
  });
}
// =================== EXERCISES PAGE ===================


// ================= AUTH SYSTEM ==================

// SIGNUP
const signup = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
      document.getElementById("signupMessage").innerText = "Please fill all fields.";
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("fitlifeUser", JSON.stringify(user));
    document.getElementById("signupMessage").innerText = "Signup successful! Redirecting...";
    setTimeout(() => window.location.href = "login.html", 1500);
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const storedUser = JSON.parse(localStorage.getItem("fitlifeUser"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      document.getElementById("loginMessage").innerText = "Login successful! Redirecting...";
      setTimeout(() => window.location.href = "index.html", 1500);
    } else {
      document.getElementById("loginMessage").innerText = "Invalid credentials!";
    }
  });
}

// LOGOUT (for nav menu)
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// Update nav dynamically
window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn) {
    nav.innerHTML += `<a href="#" onclick="logout()">Logout</a>`;
  } else {
    nav.innerHTML += `<a href="login.html">Login</a>`;
  }
});// ===== REPEATED CHANGING BACKGROUND FOR HOME PAGE =====
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return; // only run on homepage

  const images = [
    "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1920&q=80",
    "https://hindunidhi.com/wp-content/uploads/2024/03/lord-hanuman-image.webp",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1920&q=80",
    "https://i.pinimg.com/736x/0c/66/bd/0c66bd9d2ae0dcd6eef6395192d55799.jpg"
  ];

  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url('${images[i]}')`;
  }, 6000); // change every 6 seconds
});
// ===== HEALTH CONDITION SEARCH WITH EXERCISES + DIET =====
document.addEventListener("DOMContentLoaded", () => {
  const data = {
    obesity: {
      exercises: [
        "Brisk Walking",
        "Cycling",
        "Swimming",
        "Bodyweight Squats",
        "Yoga (Surya Namaskar)"
      ],
      benefits:
        "Improves cardiovascular health, burns calories, boosts metabolism, and enhances stamina.",
      plan:
        "Start with 30–45 minutes daily, 5 days a week. Gradually increase intensity as fitness improves.",
      diet: {
        recommended: [
          "High-fiber vegetables (broccoli, spinach, carrots)",
          "Lean proteins (chicken, tofu, fish)",
          "Whole grains (oats, quinoa, brown rice)",
          "Fruits with low sugar (berries, apples)"
        ],
        avoid: [
          "Fried foods",
          "Sugary beverages",
          "Processed snacks",
          "White bread and pastries"
        ],
        tips:
          "Eat small meals every 3–4 hours. Avoid heavy meals before bed and stay hydrated."
      },
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
    },
    diabetes: {
      exercises: [
        "Walking",
        "Cycling",
        "Resistance Band Training",
        "Yoga",
        "Swimming"
      ],
      benefits:
        "Helps regulate blood sugar, improves insulin sensitivity, and supports weight management.",
      plan:
        "40 minutes of moderate exercise, 5 days a week. Include 2 days of light strength training.",
      diet: {
        recommended: [
          "Whole grains (brown rice, oats)",
          "Leafy vegetables",
          "Lentils and beans",
          "Healthy fats (nuts, olive oil)"
        ],
        avoid: [
          "Sugary drinks",
          "Refined flour",
          "White rice",
          "Processed foods"
        ],
        tips:
          "Keep carbs balanced. Eat every 4 hours. Avoid skipping breakfast."
      },
      image:
        "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
    },
    hypertension: {
      exercises: [
        "Yoga",
        "Walking",
        "Cycling",
        "Breathing Exercises",
        "Low-Impact Aerobics"
      ],
      benefits:
        "Lowers blood pressure, reduces stress, and strengthens the heart.",
      plan:
        "30 minutes daily of moderate exercise; avoid high-intensity lifting.",
      diet: {
        recommended: [
          "Fruits and vegetables rich in potassium",
          "Low-fat dairy products",
          "Whole grains",
          "Unsalted nuts"
        ],
        avoid: [
          "Salty foods",
          "Processed meats",
          "Alcohol",
          "Caffeine excess"
        ],
        tips:
          "Follow the DASH diet. Reduce sodium intake and drink plenty of water."
      },
      image:
        "https://domf5oio6qrcr.cloudfront.net/medialibrary/14321/239a80a8-98d4-4f90-9514-ffb41fce0610.jpg"
    },
    "knock knees": {
      exercises: [
        "Side-Lying Leg Raises",
        "Step-Ups",
        "Resistance Band Side Walks",
        "Wall Sits",
        "Leg Press"
      ],
      benefits:
        "Strengthens hip abductors, quads, and glutes to correct knee alignment and posture.",
      plan:
        "Do 3 sets of each exercise, 4–5 times per week. Combine with stretching and balance training.",
      diet: {
        recommended: [
          "Calcium-rich foods (milk, almonds, sesame seeds)",
          "Vitamin D (eggs, fish, sunlight)",
          "Protein (chicken, lentils)"
        ],
        avoid: [
          "Sugary snacks",
          "Soda drinks",
          "Junk food"
        ],
        tips:
          "Focus on bone and joint health with nutrient-dense meals."
      },
      image:
        "https://images.healthshots.com/healthshots/en/uploads/2023/11/13110400/balasana-1.jpg"},
    arthritis: {
      exercises: [
        "Water Aerobics",
        "Tai Chi",
        "Yoga",
        "Cycling",
        "Gentle Stretching"
      ],
      benefits:
        "Reduces joint pain, improves flexibility, and strengthens supporting muscles.",
      plan:
        "Perform low-impact exercises 4–5 times weekly. Focus on range-of-motion and light resistance training.",
      diet: {
        recommended: [
          "Omega-3 foods (salmon, flaxseeds)",
          "Turmeric and ginger",
          "Leafy greens"
        ],
        avoid: [
          "Fried foods",
          "Refined carbs",
          "Sugary snacks"
        ],
        tips:
          "Use anti-inflammatory foods daily like turmeric and garlic."
      },
      image:
        "https://focusptbend.com/wp-content/uploads/quad-set.jpg"},
    asthma: {
      exercises: [
        "Swimming",
        "Yoga (Pranayama)",
        "Walking",
        "Cycling",
        "Light Resistance Workouts"
      ],
      benefits:
        "Enhances lung function, builds endurance, and improves breathing efficiency.",
      plan:
        "30 minutes, 4–5 days a week. Include breathing control exercises daily.",
      diet: {
        recommended: [
          "Antioxidant-rich fruits (berries, oranges)",
          "Leafy vegetables",
          "Omega-3 sources (fish, flaxseed)"
        ],
        avoid: [
          "Dairy (for some people)",
          "Processed foods",
          "Fried snacks"
        ],
        tips:
          "Stay hydrated and avoid cold beverages after workouts."
      },
      image:
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=80"
    },
    anxiety: {
      exercises: [
        "Yoga (Meditation, Pranayama)",
        "Walking",
        "Stretching",
        "Dancing",
        "Jogging"
      ],
      benefits:
        "Releases endorphins, reduces stress hormones, and promotes calmness.",
      plan:
        "Do 30–45 minutes of calming activity daily, with 10 minutes of meditation afterward.",
      diet: {
        recommended: [
          "Leafy greens",
          "Nuts and seeds",
          "Whole grains",
          "Chamomile tea"
        ],
        avoid: [
          "Caffeine",
          "Alcohol",
          "Processed sugar"
        ],
        tips:
          "Eat magnesium-rich foods and stay consistent with meal timing."
      },
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80"
    },
    depression: {
      exercises: [
        "Aerobic Exercises",
        "Yoga",
        "Team Sports",
        "Dancing",
        "Weight Training"
      ],
      benefits:
        "Boosts mood-regulating hormones and reduces fatigue and anxiety.",
      plan:
        "Aim for 45 minutes daily. Mix cardio and mindfulness practices throughout the week.",
      diet: {
        recommended: [
          "Whole grains",
          "Omega-3 foods",
          "Leafy greens",
          "Bananas and berries"
        ],
        avoid: [
          "Sugary foods",
          "Alcohol",
          "Junk food"
        ],
        tips:
          "Avoid skipping meals. Include complex carbs and high-protein breakfast."
      },
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    osteoporosis: {
      exercises: [
        "Weight-Bearing Exercises",
        "Stair Climbing",
        "Resistance Training",
        "Walking",
        "Balance Exercises"
      ],
      benefits:
        "Strengthens bones and improves coordination to reduce fracture risk.",
      plan:
        "30 minutes of resistance or weight-bearing exercises 3–4 times weekly.",
      diet: {
        recommended: [
          "Calcium (milk, yogurt, leafy greens)",
          "Vitamin D foods",
          "Eggs and nuts"
        ],
        avoid: [
          "Caffeine",
          "Carbonated drinks",
          "Salt-heavy foods"
        ],
        tips:
          "Get sunlight daily for Vitamin D and include dairy or fortified alternatives."
      },
      image:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
    },
    backpain: {
      exercises: [
        "Cat-Cow Stretch",
        "Bridges",
        "Child’s Pose",
        "Pelvic Tilts",
        "Walking"
      ],
      benefits:
        "Strengthens the lower back and core muscles, improves posture, and relieves stiffness.",
      plan:
        "15–20 minutes daily; focus on proper stretching and posture control.",
      diet: {
        recommended: [
          "Anti-inflammatory foods (berries, olive oil, green tea)",
          "Calcium-rich foods",
          "Protein for muscle recovery"
        ],
        avoid: [
          "Sugary drinks",
          "Refined carbs",
          "Fried foods"
        ],
        tips:
          "Maintain a healthy weight and hydrate properly."
      },
      image:
        "https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/6a38330NIWbiK1ej2AWa9D/c19afd3814e4c159c6e0a05b6f66ff7d/GettyImages-1220053564.jpg"
    }
  };

  const input = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const result = document.getElementById("result");
  const suggestionBox = document.createElement("div");
  suggestionBox.classList.add("suggestion-box");
  input.parentNode.insertBefore(suggestionBox, input.nextSibling);

  // Show search result
  function showResult(query) {
    const condition = data[query];
    if (condition) {
      result.innerHTML = `
        <div class="exercise-card">
          <h2>${query.charAt(0).toUpperCase() + query.slice(1)}</h2>
          <img src="${condition.image}" alt="${query}" />
          <h3>🏋️‍♀️ Exercises</h3>
          <p>${condition.exercises.join(", ")}</p>
          <p><b>Benefits:</b> ${condition.benefits}</p>
          <p><b>Plan:</b> ${condition.plan}</p>
          <h3>🥗 Diet Plan</h3>
          <p><b>Recommended:</b> ${condition.diet.recommended.join(", ")}</p>
          <p><b>Avoid:</b> ${condition.diet.avoid.join(", ")}</p>
          <p><b>Tips:</b> ${condition.diet.tips}</p>
        </div>
      `;
    } else {
      result.innerHTML = `<p>No data found for "${query}". Try another condition.</p>`;
    }
    suggestionBox.innerHTML = "";
  }

  // Suggestion dropdown
  input.addEventListener("input", () => {
    const val = input.value.toLowerCase();
    suggestionBox.innerHTML = "";
    if (!val) return;
    const suggestions = Object.keys(data).filter((key) =>
      key.startsWith(val)
    );
    suggestions.forEach((s) => {
      const item = document.createElement("div");
      item.classList.add("suggestion-item");
      item.textContent = s.charAt(0).toUpperCase() + s.slice(1);
      item.addEventListener("click", () => {
        input.value = s;
        showResult(s);
      });
      suggestionBox.appendChild(item);
    });
  });

  // Search button
  searchBtn.addEventListener("click", () => {
    const query = input.value.trim().toLowerCase();
    showResult(query);
  });
});




