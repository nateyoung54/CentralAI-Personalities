const members = [
  {
    name: "Nate",
    role: "President",
    type: "ENTJ-A",
    title: "Commander",
    symbol: "▲",
    symbolName: "Command arrow",
    traits: [
      { left: "Introverted", right: "Extraverted", side: "right", value: 69 },
      { left: "Observant", right: "Intuitive", side: "right", value: 63 },
      { left: "Feeling", right: "Thinking", side: "right", value: 81 },
      { left: "Prospecting", right: "Judging", side: "right", value: 81 },
      { left: "Turbulent", right: "Assertive", side: "right", value: 88 }
    ],
    strengths: [
      "Sets direction quickly and keeps group priorities moving.",
      "Comfortable making decisions when information is incomplete.",
      "Strong at structuring goals, deadlines, and accountability.",
      "Brings confident energy that can rally the room around a plan."
    ],
    growth: [
      "Pause long enough for quieter team members to shape the discussion.",
      "Check whether speed is creating clarity or simply pressure.",
      "Invite emotional and relationship context before final decisions.",
      "Make room for experiments that do not have immediate strategic payoff."
    ],
    support: [
      "Direct, concise input before decisions are finalized.",
      "People who are comfortable naming risks early.",
      "Enough room to move quickly once expectations are clear."
    ]
  },
  {
    name: "Ethan",
    role: "VP",
    type: "ENTP-A",
    title: "Debater",
    symbol: "◇",
    symbolName: "Idea prism",
    traits: [
      { left: "Introverted", right: "Extraverted", side: "right", value: 63 },
      { left: "Observant", right: "Intuitive", side: "right", value: 54 },
      { left: "Feeling", right: "Thinking", side: "right", value: 81 },
      { left: "Judging", right: "Prospecting", side: "right", value: 51 },
      { left: "Turbulent", right: "Assertive", side: "right", value: 69 }
    ],
    strengths: [
      "Generates options quickly and challenges the team to think wider.",
      "Useful in strategy conversations where assumptions need pressure-testing.",
      "Comfortable debating ideas without taking disagreement personally.",
      "Can adapt plans when new information appears."
    ],
    growth: [
      "Signal when debate is exploratory versus when a decision is needed.",
      "Translate big ideas into owners, next steps, and follow-through.",
      "Watch for overcomplicating a plan that is already good enough.",
      "Balance intellectual challenge with encouragement and closure."
    ],
    support: [
      "Clear signals for when discussion should shift from exploring to deciding.",
      "Space to challenge assumptions without it being taken personally.",
      "Simple follow-up expectations after a high-energy conversation."
    ]
  },
  {
    name: "Paris",
    role: "Marketing Director",
    type: "INTJ-T",
    title: "Architect",
    symbol: "▣",
    symbolName: "Blueprint block",
    traits: [
      { left: "Extraverted", right: "Introverted", side: "right", value: 62 },
      { left: "Observant", right: "Intuitive", side: "right", value: 70 },
      { left: "Feeling", right: "Thinking", side: "right", value: 56 },
      { left: "Prospecting", right: "Judging", side: "right", value: 74 },
      { left: "Assertive", right: "Turbulent", side: "right", value: 65 }
    ],
    strengths: [
      "Strong at building a clear marketing strategy before execution.",
      "Good at spotting patterns, audience angles, and long-term positioning.",
      "Brings disciplined thinking to creative decisions.",
      "Likely to care about quality control and consistency."
    ],
    growth: [
      "Share drafts early enough for the team to contribute before launch.",
      "Clarify standards so feedback does not feel like moving targets.",
      "Avoid carrying too much planning privately before asking for help.",
      "Balance high expectations with visible appreciation for progress."
    ],
    support: [
      "Advance context before being asked for a strong opinion.",
      "Time to think independently before group discussion.",
      "Clear standards so feedback and expectations feel grounded."
    ]
  },
  {
    name: "Adam",
    role: "Treasurer",
    type: "INFJ-T",
    title: "Advocate",
    symbol: "◌",
    symbolName: "Guiding circle",
    traits: [
      { left: "Extraverted", right: "Introverted", side: "right", value: 58 },
      { left: "Observant", right: "Intuitive", side: "right", value: 59 },
      { left: "Thinking", right: "Feeling", side: "right", value: 58 },
      { left: "Prospecting", right: "Judging", side: "right", value: 82 },
      { left: "Assertive", right: "Turbulent", side: "right", value: 58 }
    ],
    strengths: [
      "Brings mission alignment and care into practical financial decisions.",
      "Likely to think through how money choices affect the broader team.",
      "Good at maintaining structure, records, and responsible planning.",
      "Can mediate between values-based concerns and operational needs."
    ],
    growth: [
      "Raise budget concerns early instead of waiting until they feel polished.",
      "Separate personal responsibility from every financial constraint.",
      "Use concise decision summaries when discussions get abstract.",
      "Ask for direct support when the role becomes detail-heavy."
    ],
    support: [
      "Written clarity around decisions and next steps.",
      "A thoughtful pace when conversations involve people-impact or values.",
      "Encouragement to share concerns before they feel fully polished."
    ]
  },
  {
    name: "Mason",
    role: "Tech Chair",
    type: "ENFP-A",
    title: "Campaigner",
    symbol: "✦",
    symbolName: "Creative spark",
    traits: [
      { left: "Introverted", right: "Extraverted", side: "right", value: 61 },
      { left: "Observant", right: "Intuitive", side: "right", value: 85 },
      { left: "Thinking", right: "Feeling", side: "right", value: 62 },
      { left: "Judging", right: "Prospecting", side: "right", value: 51 },
      { left: "Turbulent", right: "Assertive", side: "right", value: 67 }
    ],
    strengths: [
      "Connects technical ideas to people, momentum, and possibility.",
      "Strong at brainstorming tools, workflows, and creative solutions.",
      "Can energize technical work that might otherwise feel dry.",
      "Flexible enough to iterate when a solution needs adjustment."
    ],
    growth: [
      "Lock in scope before chasing the next interesting technical idea.",
      "Document decisions so enthusiasm turns into repeatable systems.",
      "Confirm deadlines and owners when priorities shift.",
      "Pair creativity with a lightweight implementation checklist."
    ],
    support: [
      "Room to brainstorm possibilities before narrowing the plan.",
      "Gentle structure that keeps ideas from spreading too wide.",
      "Clear moments to switch from creative exploration to follow-through."
    ]
  },
  {
    name: "Wayne",
    role: "Secretary",
    type: "ENFJ-A",
    title: "Protagonist",
    symbol: "★",
    symbolName: "Alignment star",
    traits: [
      { left: "Introverted", right: "Extraverted", side: "right", value: 79 },
      { left: "Observant", right: "Intuitive", side: "right", value: 79 },
      { left: "Thinking", right: "Feeling", side: "right", value: 52 },
      { left: "Prospecting", right: "Judging", side: "right", value: 79 },
      { left: "Turbulent", right: "Assertive", side: "right", value: 61 }
    ],
    strengths: [
      "Builds alignment by keeping people engaged and informed.",
      "Good fit for turning conversations into shared understanding.",
      "Can keep meeting flow organized while maintaining team warmth.",
      "Brings optimism and structure to group communication."
    ],
    growth: [
      "Avoid taking on invisible coordination work that belongs to the group.",
      "Make meeting notes action-oriented, not just discussion-oriented.",
      "Leave room for disagreement instead of moving too quickly to harmony.",
      "Protect focus time for documentation and administrative follow-through."
    ],
    support: [
      "Open communication about how people are feeling in the group.",
      "Shared responsibility so support work does not become invisible.",
      "Permission to name disagreement before moving toward harmony."
    ]
  }
];

const dimensions = [
  { key: "energy", left: "Introverted", right: "Extraverted" },
  { key: "information", left: "Observant", right: "Intuitive" },
  { key: "decision", left: "Feeling", right: "Thinking" },
  { key: "planning", left: "Prospecting", right: "Judging" },
  { key: "confidence", left: "Turbulent", right: "Assertive" }
];

let activeIndex = 0;

const tabs = document.querySelector("#profileTabs");
const profileCard = document.querySelector("#profileCard");
const personA = document.querySelector("#personA");
const personB = document.querySelector("#personB");
const pairCard = document.querySelector("#pairCard");
const symbolMap = document.querySelector("#symbolMap");

function initials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function dominantTrait(trait) {
  return trait.side === "right" ? trait.right : trait.left;
}

function traitPosition(trait) {
  return trait.side === "right" ? trait.value : 100 - trait.value;
}

function renderTrait(trait) {
  const position = traitPosition(trait);
  return `
    <div class="trait">
      <div class="trait-top">
        <span>${dominantTrait(trait)}</span>
        <span>${trait.value}%</span>
      </div>
      <div class="trait-track" style="--value: ${position / 100}"></div>
      <div class="trait-meta">
        <span>${trait.left}</span>
        <span>${trait.right}</span>
      </div>
    </div>
  `;
}

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderProfile(index) {
  activeIndex = index;
  const member = members[index];

  document.querySelectorAll(".tab-button").forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", String(buttonIndex === index));
  });

  profileCard.innerHTML = `
    <div class="profile-layout">
      <div class="member-hero">
        <div class="avatar-wrap">
          <div class="avatar">${member.symbol}</div>
          <span>${member.symbolName}</span>
        </div>
        <div>
          <p class="role">${member.role}</p>
          <h3>${member.name}</h3>
        </div>
        <span class="type-pill">${member.type} | ${member.title}</span>
        <section class="insight-box support-box">
          <h4>Support Needed</h4>
          <ul>${listItems(member.support)}</ul>
        </section>
      </div>
      <div class="content-grid">
        <section class="insight-box">
          <h4>Workplace Strengths</h4>
          <ul>${listItems(member.strengths)}</ul>
        </section>
        <section class="insight-box">
          <h4>Growth Opportunities</h4>
          <ul>${listItems(member.growth)}</ul>
        </section>
        <section class="insight-box traits">
          <h4>Personality Dials</h4>
          ${member.traits.map(renderTrait).join("")}
        </section>
      </div>
    </div>
  `;
}

function populateControls() {
  members.forEach((member, index) => {
    const tab = document.createElement("button");
    tab.className = "tab-button";
    tab.type = "button";
    tab.role = "tab";
    tab.textContent = `${member.name} | ${member.role}`;
    tab.addEventListener("click", () => renderProfile(index));
    tabs.appendChild(tab);

    [personA, personB].forEach((select) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = `${member.name} (${member.type})`;
      select.appendChild(option);
    });

    const symbolItem = document.createElement("button");
    symbolItem.type = "button";
    symbolItem.className = "symbol-item";
    symbolItem.innerHTML = `<span>${member.symbol}</span><strong>${member.name}</strong><small>${member.title}</small>`;
    symbolItem.addEventListener("click", () => {
      renderProfile(index);
      profileCard.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    symbolMap.appendChild(symbolItem);
  });

  personA.value = "0";
  personB.value = "1";
}

function getLetterPreferences(member) {
  return member.type.replace(/-.*/, "").split("");
}

function buildPairing(a, b) {
  const aLetters = getLetterPreferences(a);
  const bLetters = getLetterPreferences(b);
  const shared = [];
  const differences = [];

  dimensions.forEach((dimension, index) => {
    const aTrait = a.traits[index];
    const bTrait = b.traits[index];
    const aDominant = dominantTrait(aTrait);
    const bDominant = dominantTrait(bTrait);
    const spread = Math.abs(traitPosition(aTrait) - traitPosition(bTrait));

    if (aLetters[index] === bLetters[index]) {
      shared.push(`Shared ${aDominant.toLowerCase()} preference can make ${dimension.key} conversations feel more natural.`);
    } else if (spread >= 35) {
      differences.push(`${a.name}'s ${aDominant.toLowerCase()} style and ${b.name}'s ${bDominant.toLowerCase()} style may need explicit expectations around ${dimension.key}.`);
    } else {
      differences.push(`Different ${dimension.key} preferences can be useful if they name what each person needs before moving forward.`);
    }
  });

  const strengths = [
    ...shared.slice(0, 2),
    `${a.name}'s ${a.title.toLowerCase()} style can pair with ${b.name}'s ${b.title.toLowerCase()} style to combine different leadership instincts.`,
    `${a.role} and ${b.role} collaboration is strongest when decisions, owners, and follow-up notes are visible.`
  ];

  const friction = differences.length
    ? differences.slice(0, 3)
    : [
        "They may agree quickly, so they should still invite outside perspectives before finalizing major decisions.",
        "Similar instincts can create blind spots if neither person is assigned to challenge the plan.",
        "They should define what a successful handoff looks like so alignment becomes execution."
      ];

  const tips = [
    "Start with the goal, then decide whether the conversation is for brainstorming, deciding, or reviewing.",
    "Name one owner and one next step before ending the conversation.",
    "Use growth opportunities as prompts for support, not as fixed labels."
  ];

  return { strengths, friction, tips };
}

function renderPairing() {
  let aIndex = Number(personA.value);
  let bIndex = Number(personB.value);

  if (aIndex === bIndex) {
    bIndex = (aIndex + 1) % members.length;
    personB.value = String(bIndex);
  }

  const a = members[aIndex];
  const b = members[bIndex];
  const pairing = buildPairing(a, b);

  pairCard.innerHTML = `
    <div class="pair-title">
      <p class="role">${a.name} + ${b.name}</p>
      <h3>${a.type} meets ${b.type}</h3>
      <p class="pair-meta">${a.title} x ${b.title}. Designed for transparent team viewing with neutral, workplace-focused language.</p>
    </div>
    <div class="mini-profiles">
      <div class="mini-profile">
        <b class="mini-symbol">${a.symbol}</b>
        <strong>${a.name}</strong>
        <span>${a.role} | ${a.type} | ${a.title}</span>
      </div>
      <div class="mini-profile">
        <b class="mini-symbol">${b.symbol}</b>
        <strong>${b.name}</strong>
        <span>${b.role} | ${b.type} | ${b.title}</span>
      </div>
    </div>
    <div class="pair-grid">
      <section class="pair-box">
        <h4>Likely Strengths Together</h4>
        <ul>${listItems(pairing.strengths)}</ul>
      </section>
      <section class="pair-box">
        <h4>Possible Friction Points</h4>
        <ul>${listItems(pairing.friction)}</ul>
      </section>
      <section class="pair-box">
        <h4>Working Agreement Tips</h4>
        <ul>${listItems(pairing.tips)}</ul>
      </section>
      <section class="pair-box">
        <h4>Quick Read</h4>
        <ul>
          <li>${a.name}: strongest dial is ${dominantTrait(a.traits.reduce((max, trait) => trait.value > max.value ? trait : max, a.traits[0]))}.</li>
          <li>${b.name}: strongest dial is ${dominantTrait(b.traits.reduce((max, trait) => trait.value > max.value ? trait : max, b.traits[0]))}.</li>
          <li>Use this pairing as a conversation starter before projects, meetings, or role handoffs.</li>
        </ul>
      </section>
    </div>
  `;
}

populateControls();
renderProfile(activeIndex);
renderPairing();

personA.addEventListener("change", renderPairing);
personB.addEventListener("change", renderPairing);
