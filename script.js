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
    move: 'Observe',
    goal: 'Start with specific details you can see before making an explanation.',
    coach: 'Imagine you are Darwin\'s assistant standing on a rocky Galápagos shoreline. What do you notice first?',
    hint: 'Name two concrete details. Avoid explaining them yet.',
    starters: ['I notice...', 'The shoreline appears...', 'One detail that stands out is...'],
    lookFor: ['rocky', 'dry', 'shore', 'water', 'plants', 'vegetation', 'lava', 'coast'],
    feedback: {
      strong: 'You grounded your answer in observable evidence. That gives us a reliable starting point.',
      partial: 'That is a start. Try adding one visible detail, such as land, water, rocks, or plants.'
    }
  },
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    move: 'Question',
    goal: 'Turn observations into a survival question about resources in the environment.',
    coach: 'Good. Now look again: what seems limited or missing on land that could matter for animals living here?',
    hint: 'Focus on resources: food, shade, shelter, nesting space, or freshwater.',
    starters: ['There may be limited...', 'This could matter because...', 'A question I have is...'],
    lookFor: ['food', 'plant', 'vegetation', 'water', 'freshwater', 'shelter', 'shade', 'resource'],
    feedback: {
      strong: 'You connected the setting to a possible survival pressure.',
      partial: 'Push your thinking toward resources. What would an animal need that may be scarce here?'
    }
  },
  {
    image: 'Image 2: Iguana eating algae',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Connect evidence',
    goal: 'Use the new clue to connect scarce land food with algae as another food source.',
    coach: 'Now you see iguanas near the shore. Some are eating algae. Why might algae matter in this environment?',
    hint: 'Explain why algae could solve a resource problem created by limited land vegetation.',
    starters: ['Algae might matter because...', 'If land food is limited...', 'This evidence suggests...'],
    lookFor: ['food', 'eat', 'algae', 'limited', 'plants', 'survive', 'shore'],
    feedback: {
      strong: 'You used the algae clue as evidence, not just as a fact.',
      partial: 'Mention algae as food and connect it to survival where land plants may be limited.'
    }
  },
  {
    image: 'Image 2: Iguana eating algae',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Infer traits',
    goal: 'Infer traits or behaviors that could help some iguanas reach and use this food source.',
    coach: 'Make an inference: if algae is a major food source, what traits might help some iguanas survive better than others?',
    hint: 'Traits can involve behavior, body structure, swimming ability, claws, tails, or salt tolerance.',
    starters: ['A helpful trait might be...', 'I infer this because...', 'I would expect some iguanas to...'],
    lookFor: ['swim', 'claw', 'tail', 'dive', 'salt', 'grip', 'hold', 'underwater', 'body'],
    feedback: {
      strong: 'You inferred a trait and tied it to a survival advantage.',
      partial: 'Name a trait or behavior and explain how it helps an iguana get food or survive.'
    }
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    move: 'Explain adaptation',
    goal: 'Build a generation-by-generation explanation using variation, advantage, and reproduction.',
    coach: 'Now observe an iguana swimming underwater to feed. Explain how swimming and feeding underwater could become an adaptation over many generations.',
    hint: 'Use the chain: variation → survival advantage → reproduction → trait becomes more common.',
    starters: ['Some iguanas may vary in...', 'Those individuals would...', 'Over generations...'],
    lookFor: ['variation', 'survive', 'advantage', 'reproduce', 'offspring', 'generation', 'common', 'adaptation'],
    feedback: {
      strong: 'You described the natural selection chain across generations.',
      partial: 'Include more of the chain: variation, survival advantage, reproduction, and change over generations.'
    }
  },
  {
    image: 'Image 4: Iguana sneezing salt',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Synthesize',
    goal: 'Connect multiple clues into a concise natural selection explanation.',
    coach: 'Final challenge: connect this scenario to natural selection in your own words.',
    hint: 'Explain how the environment can favor inherited traits that improve survival and reproduction.',
    starters: ['Natural selection means...', 'In this environment...', 'I would support this with...'],
    lookFor: ['environment', 'trait', 'inherited', 'survive', 'reproduce', 'selection', 'adaptation', 'advantage'],
    feedback: {
      strong: 'You connected environment, inherited traits, survival, and reproduction.',
      partial: 'Make the natural selection connection explicit: which inherited traits are favored, and why?'
    }
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
const hintButton = document.querySelector('#hint-demo');
const thinkingMove = document.querySelector('#thinking-move');
const thinkingGoal = document.querySelector('#thinking-goal');
const sentenceStarters = document.querySelector('#sentence-starters');

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
  thinkingMove.textContent = step.move;
  thinkingGoal.textContent = step.goal;
  sentenceStarters.innerHTML = '';

  step.starters.forEach(starter => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = starter;
    button.addEventListener('click', () => {
      studentInput.value = studentInput.value ? `${studentInput.value} ${starter}` : starter;
      studentInput.focus();
    });
    sentenceStarters.appendChild(button);
  });
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

function evaluateResponse(response, step) {
  const normalized = response.toLowerCase();
  const matches = step.lookFor.filter(term => normalized.includes(term));
  const hasReasoning = /because|so|therefore|this suggests|which means|in order to/.test(normalized);
  const isDetailed = response.split(/\s+/).filter(Boolean).length >= 8;
  const score = matches.length + (hasReasoning ? 1 : 0) + (isDetailed ? 1 : 0);

  return {
    isStrong: score >= 3,
    matches
  };
}

function buildFinalSummary() {
  const moves = history
    .map(item => `${demoSteps[item.step].move}: “${item.response}”`)
    .join(' | ');

  return `Learning trace captured: ${moves}`;
}

function startDemo() {
  currentStep = 0;
  history = [];
  chatWindow.innerHTML = '';
  renderStep();
  addMessage('This demo acts like a guided AI coach, but it is only a scripted prototype.', 'system');
  addMessage('Use the thinking move, sentence starters, and Hint button if you want more scaffolding.', 'system');
  addMessage(demoSteps[currentStep].coach, 'coach');
}

function advanceDemo(response) {
  const step = demoSteps[currentStep];
  const evaluation = evaluateResponse(response, step);

  addMessage(response, 'student');
  history.push({ step: currentStep, response, matches: evaluation.matches });

  const coachFeedback = evaluation.isStrong ? step.feedback.strong : step.feedback.partial;
  addMessage(coachFeedback, 'coach');

  if (!evaluation.isStrong) {
    addMessage(`Scaffold: ${step.hint}`, 'coach');
  }

  if (currentStep < demoSteps.length - 1) {
    currentStep += 1;
    renderStep();
    setTimeout(() => addMessage(demoSteps[currentStep].coach, 'coach'), 350);
  } else {
    addMessage('Demo complete. Notice how the value is not just the final answer. The full interaction shows observations, questions, inferences, evidence connections, and revisions.', 'system');
    addMessage(buildFinalSummary(), 'system');
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

hintButton.addEventListener('click', () => {
  addMessage(`Hint: ${demoSteps[currentStep].hint}`, 'coach');
  studentInput.focus();
});

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
