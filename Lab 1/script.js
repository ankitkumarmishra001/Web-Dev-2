const eventList = document.getElementById("eventList");

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title) {
        alert("Please enter Event Title");
        return;
    }
    if (!date) {
        alert("Please enter Date Title");
        return;
    }

    if (eventList.querySelector(".empty")) {
        eventList.innerHTML = "";
    }

    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <div class="event-title">${title}</div>
        <div class="event-category">${category}</div>
        <div class="event-date">📅 ${date}</div>
        <div>${description || "No description provided"}</div>
        `;

    eventList.appendChild(card);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function clearEvents() {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}

function addSampleEvents() {
    eventList.innerHTML = "";

    const samples = [
        {
            title: "Startup Conference",
            date: "2026-03-16",
            category: "Conference",
            desc: "Annual startup conference"
        },
        {
            title: "AI Workshop",
            date: "2026-04-12",
            category: "Workshop",
            desc: "Hands-on AI Workshop"
        },
        {
            title: "Tech Team Meeting",
            date: "2026-02-18",
            category: "Meeting",
            desc: "Final tech project discussion"
        }
    ];

    samples.forEach(e => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <div class="event-title">${e.title}</div>
            <div class="event-category">${e.category}</div>
            <div class="event-date">📅 ${e.date}</div>
            <div>${e.desc}</div>
        `;
        eventList.appendChild(card);
    });
}