// Each category matches a navigation button in index.html.
const files = [
  [
    [
      "Before the braids",
      "Vi knew her little sister as Powder long before Zaun knew her as Jinx."
    ],
    [
      "A maker from the start",
      "As a child, Powder gave her homemade gadgets names like Mouser and Whisker."
    ]
  ],
  [
    [
      "Fishbones",
      "That toothy grin belongs to a rocket launcher. Its shark-shaped nose makes Fishbones unmistakable in silhouette."
    ],
    [
      "Pow-Pow",
      "Jinx calls her minigun Pow-Pow. In League of Legends, her Switcheroo! ability swaps it for Fishbones."
    ]
  ],
  [
    [
      "Painted in motion",
      "French animation studio Fortiche worked with Riot Games to bring Piltover and Zaun to life."
    ],
    [
      "Listen for the sisters",
      "Ella Purnell voices Jinx in English, while Hailee Steinfeld voices Vi."
    ],
    [
      "From screen to stage",
      "In 2022, Arcane won the Emmy for Outstanding Animated Program for the episode When These Walls Come Tumbling Down."
    ]
  ]
];

let section = 0;
let page = 0;
const buttons = document.querySelectorAll("[data-file]");
function render() {
  const cards = files[section];
  const [title, note] = cards[page];
  document.querySelector("#count").textContent = "ARCHIVE CARD　/　" + (page + 1) + " OF " + cards.length;
  document.querySelector("#title").textContent = title;
  document.querySelector("#note").textContent = note;
  buttons.forEach((button, index) => {
    button.setAttribute("aria-pressed", String(index === section));
  });
}

buttons.forEach((button, index) => {
  button.onclick = () => {
    section = index;
    page = 0;
    render();
  };
});

document.querySelector("#next").onclick = () => {
  page = (page + 1) % files[section].length;
  render();
};

render();
