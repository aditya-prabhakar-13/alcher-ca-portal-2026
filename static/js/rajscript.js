console.log("raj script is running");

const rightbox1btns = document.querySelectorAll(".rightbox1btn");
const teamList = document.querySelector(".Team");
const soloList = document.querySelector(".solo");

rightbox1btns.forEach((button) => {
  button.addEventListener("click", () => {
    rightbox1btns.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    if (button.textContent.includes("Team")) {
      teamList.style.display = "block";
      soloList.style.display = "none";
    } else {
      teamList.style.display = "none";
      soloList.style.display = "block";
    }
  });
});

document.querySelectorAll(".steps .less").forEach((downArrow, index) => {
  downArrow.addEventListener("click", () => {
    const stepsDiv = downArrow.parentElement;
    const moreArrow = stepsDiv.querySelector(".more");
    const paragraph = stepsDiv.nextElementSibling;

    paragraph.style.display =
      paragraph.style.display === "block" ? "none" : "block";

    downArrow.style.display = "none";
    moreArrow.style.display = "inline";
  });
});

document.querySelectorAll(".steps .more").forEach((upArrow, index) => {
  upArrow.addEventListener("click", () => {
    const stepsDiv = upArrow.parentElement;
    const downArrow = stepsDiv.querySelector(".less");
    const paragraph = stepsDiv.nextElementSibling;

    paragraph.style.display = "none";

    upArrow.style.display = "none";
    downArrow.style.display = "inline";
  });
});

function animateCount(el, target, duration = 3000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 to 1

    const value = Math.floor(progress * target);
    el.textContent = value + "+";

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target + "+"; // ensure final value
    }
  }

  requestAnimationFrame(update);
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counts = entry.target.querySelectorAll(".counts");
        counts.forEach((el) => {
          const target = parseInt(el.dataset.target);
          animateCount(el, target);
        });

        observer.unobserve(entry.target); // Only run once
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the section is visible
  }
);

document
  .querySelectorAll("#stats-section, #achievements-section")
  .forEach((section) => {
    observer.observe(section);
  });

document.addEventListener("DOMContentLoaded", () => {
  console.log("raj script is running");

  const map = document.getElementById("india-map");
  const tooltip = document.getElementById("map-tooltip");

  const cities = [
    {
      id: "patna-marker",
      name: "Patna",
      x: 375,
      y: 300,
      colleges: 20,
      ambassadors: 50,
    },
    {
      id: "trichy-marker",
      name: "Trichy",
      x: 250,
      y: 600,
      colleges: 5,
      ambassadors: 15,
    },
    {
      id: "lucknow-marker",
      name: "Lucknow",
      x: 300,
      y: 270,
      colleges: 18,
      ambassadors: 45,
    },
    {
      id: "mohali-marker",
      name: "Mohali",
      x: 190,
      y: 175,
      colleges: 12,
      ambassadors: 30,
    },
    {
      id: "rishikesh-marker",
      name: "Rishikesh",
      x: 250,
      y: 210,
      colleges: 8,
      ambassadors: 22,
    },
    {
      id: "kurukshetra-marker",
      name: "Kurukshetra",
      x: 220,
      y: 210,
      colleges: 10,
      ambassadors: 25,
    },
    {
      id: "jaipur-marker",
      name: "Jaipur",
      x: 200,
      y: 275,
      colleges: 25,
      ambassadors: 60,
    },
    {
      id: "bhubaneshwar-marker",
      name: "Bhubaneshwar",
      x: 380,
      y: 410,
      colleges: 15,
      ambassadors: 35,
    },
    {
      id: "ropar-marker",
      name: "Ropar",
      x: 200,
      y: 190,
      colleges: 7,
      ambassadors: 18,
    },
    {
      id: "nagpur-marker",
      name: "Nagpur",
      x: 260,
      y: 415,
      colleges: 14,
      ambassadors: 33,
    },
    {
      id: "delhi-marker",
      name: "Delhi",
      x: 215,
      y: 237,
      colleges: 30,
      ambassadors: 75,
    },
    {
      id: "kolkata-marker",
      name: "Kolkata",
      x: 415,
      y: 360,
      colleges: 22,
      ambassadors: 55,
    },
  ];

  // Check if the device supports touch events
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

        console.log(isTouchDevice());

  // Handle mouseover event
  function handleMouseOver(event) {
    const cityMarker = event.target.closest(".city-marker");
    if (!cityMarker) return;

    const cityId = cityMarker.getAttribute("data-city-id");
    const cityData = cities.find((city) => city.id === cityId);
    if (!cityData) return;

    const customMessage = `
      <div style="text-align: left; line-height: 1.4;">
        <strong>${cityData.name}</strong><br>
        Colleges: ${cityData.colleges}<br>
        Ambassadors: ${cityData.ambassadors}
      </div>
    `;
    tooltip.innerHTML = customMessage;

    const rect = cityMarker.getBoundingClientRect();
    const x = rect.left + window.scrollX + rect.width / 2;
    const y = rect.top + window.scrollY;

    tooltip.style.left = `${x + 15}px`;
    tooltip.style.top = `${y - 45}px`;
    tooltip.classList.remove("hidden");
    tooltip.classList.add("visible");
  }

  // Handle mouseout event
  function handleMouseOut() {
    if (!isTouchDevice()) {
      tooltip.classList.remove("visible");
      tooltip.classList.add("hidden");
    }
  }

  // Handle click event for mobile
  function handleMarkerClick(event) {
    handleMouseOver(event);

    if (isTouchDevice()) {
      setTimeout(() => {
        tooltip.classList.remove("visible");
        tooltip.classList.add("hidden");
      }, 2500); // Hide tooltip after 2.5 seconds
    }
  }

  // Create city markers on the map
  function createCityMarkers() {
    cities.forEach((city) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", `pin-${city.id}`);
      svg.setAttribute("class", "city-marker");
      svg.setAttribute("x", city.x - 12);
      svg.setAttribute("y", city.y - 22);
      svg.setAttribute("width", 32);
      svg.setAttribute("height", 32);
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.style.cursor = "pointer";

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M12 2C8.686 2 6 4.686 6 8C6 12.553 12 22 12 22C12 22 18 12.553 18 8C18 4.686 15.314 2 12 2ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"
      );
      path.setAttribute("fill", "#e74c3c");
      svg.appendChild(path);

      svg.setAttribute("data-city-id", city.id);
      svg.addEventListener("mouseover", handleMouseOver);
      svg.addEventListener("mouseout", handleMouseOut);
      svg.addEventListener("click", handleMarkerClick);

      map.appendChild(svg);
    });
  }

  // Create all city markers
  createCityMarkers();
});
