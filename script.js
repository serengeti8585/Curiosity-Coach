const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const demoSteps = [
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    coach: 'Imagine you are Darwin\'s assistant standing on a rocky Galápagos shoreline. What do you notice first?',
    hint: 'Try observing before explaining.'
  },
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    coach: 'Good. Now look again: what seems limited or missing on land that could matter for animals living here?',
    hint: 'Think about food, shelter, and survival needs.'
  },
  {
    image: 'Image 2: Iguana eating algae',
    imageSrc: 'assets/images/marine-iguana.PNG',
    coach: 'Now you see iguanas near the shore. Some are eating algae. Why might algae matter in this environment?',
    hint: 'Connect limited land vegetation to another food source.'
  },
  {
    image: 'Image 2: Iguana eating algae',
    imageSrc: 'assets/images/marine-iguana.PNG',
    coach: 'Make an inference: if algae is a major food source, what traits might help some iguanas survive better than others?',
    hint: 'Traits can involve behavior, body structure, or tolerance to salt and water.'
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    coach: 'Now observe an iguana swimming underwater to feed. Explain how swimming and feeding underwater could become an adaptation over many generations.',
    hint: 'Use variation, survival advantage, and reproduction.'
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    coach: 'Final challenge: connect this scenario to natural selection in your own words.',
    hint: 'Explain how the environment can favor certain inherited traits.'
  }
];

const chatWindow = document.querySelector('#chat-window');
const chatForm = document.querySelector('#chat-form');
const studentInput = document.querySelector('#student-input');
const demoImage = document.querySelector('#demo-image');
const imageLabel = document.querySelector('#image-label');
const dots = Array.from(document.querySelectorAll('.dot'));
const resetButton = document.querySelector('#reset-demo');
const backButton = document.querySelector('#back-step');

let currentStep = 0;
let history = [];

function addMessage(text, type = 'coach') {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.textContent = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function renderStep() {
  const step = demoSteps[currentStep];
  imageLabel.textContent = step.image;
  demoImage.classList.remove('has-demo-image');
  demoImage.style.removeProperty('background-image');

  const image = new Image();
  image.onload = () => {
    if (demoSteps[currentStep].imageSrc !== step.imageSrc) return;
    demoImage.style.backgroundImage = `url('${step.imageSrc}')`;
    demoImage.classList.add('has-demo-image');
  };
  image.onerror = () => {
    if (demoSteps[currentStep].imageSrc !== step.imageSrc) return;
    demoImage.classList.remove('has-demo-image');
    demoImage.style.removeProperty('background-image');
  };
  image.src = step.imageSrc;

  dots.forEach((dot, index) => dot.classList.toggle('active', index <= currentStep));
}

function startDemo() {
  currentStep = 0;
  history = [];
  chatWindow.innerHTML = '';
  renderStep();
  addMessage('This demo acts like a guided AI coach, but it is only a scripted prototype.', 'system');
  addMessage(demoSteps[currentStep].coach, 'coach');
}

function advanceDemo(response) {
  addMessage(response, 'student');
  history.push({ step: currentStep, response });

  const coachFeedback = `I can use that. ${demoSteps[currentStep].hint}`;
  addMessage(coachFeedback, 'coach');

  if (currentStep < demoSteps.length - 1) {
    currentStep += 1;
    renderStep();
    setTimeout(() => addMessage(demoSteps[currentStep].coach, 'coach'), 350);
  } else {
    addMessage('Demo complete. Notice how the value is not just the final answer. The full interaction shows observations, inferences, revisions, and reasoning.', 'system');
  }
}

chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const response = studentInput.value.trim();
  if (!response) return;
  studentInput.value = '';
  advanceDemo(response);
});

resetButton.addEventListener('click', startDemo);

backButton.addEventListener('click', () => {
  if (currentStep === 0) return;
  currentStep -= 1;
  chatWindow.innerHTML = '';
  history = history.filter(item => item.step < currentStep);
  renderStep();
  addMessage('Moved back one step in the scripted demo.', 'system');
  addMessage(demoSteps[currentStep].coach, 'coach');
});

startDemo();
