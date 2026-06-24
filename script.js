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
    goal: 'Separate what you can see from what you might infer about the landscape.',
    coach: 'You are my assistant in the Galápagos. Today we shall not begin with answers. We shall begin as naturalists do — with careful observation. Look carefully at this rocky landscape. What do you observe?',
    hint: 'Begin with visible evidence: volcanic rock, dry land, sparse vegetation, or signs that food may be limited.',
    starters: ['I observe...', 'The land appears...', 'Evidence I can see is...'],
    lookFor: ['rock', 'rocky', 'volcanic', 'lava', 'dry', 'plant', 'vegetation', 'sparse', 'few', 'food', 'resource', 'barren', 'shore', 'coast'],
    briefFeedback: 'Rocks indeed. I came on this voyage to study rock, but I have become more and more intrigued by living things. Look beyond the rocks for a moment. What else catches your eye? Is there anything you expected to see on land that seems scarce here?',
    feedback: {
      strong: 'That is careful observing. We can see volcanic rock, dry land, and little vegetation. Now we should ask what those observations might mean for animals trying to live here.',
      partial: 'That is a useful beginning. Let us examine that more carefully: is your statement an observation from the image, or an inference about what life here may be like? Add one more piece of visible evidence.'
    }
  },
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    move: 'Question',
    goal: 'Use the landscape evidence to reason about available food and resources.',
    coach: 'Do you think there is enough food here for many land animals? What evidence makes you think so?',
    hint: 'Use evidence from the image. Sparse plants, dry ground, and bare rock can suggest limited land food.',
    starters: ['I think...', 'The evidence is...', 'If plants are scarce...'],
    lookFor: ['food', 'plant', 'vegetation', 'scarce', 'little', 'limited', 'few', 'dry', 'rock', 'resource', 'not enough', 'enough'],
    vegetationFeedback: 'Yes… that troubled me as well. If plants are scarce, what difficulty might that create for animals trying to survive here?',
    feedback: {
      strong: 'A sensible hypothesis. You are using evidence from the landscape to reason about resources, not merely guessing.',
      partial: 'What evidence do we have? Point to something visible in the landscape, then explain how it might affect food for land animals.'
    }
  },
  {
    image: 'Image 2: Iguanas feeding near the shore',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Connect evidence',
    goal: 'Connect shoreline algae to the problem of limited land vegetation.',
    coach: 'Look there, near the water’s edge. These iguanas appear to be feeding. What do you see them eating?',
    hint: 'Look for the food source near the shore. How could algae matter if land vegetation is scarce?',
    starters: ['They appear to eat...', 'That food source might...', 'This connects to the dry land because...'],
    lookFor: ['algae', 'seaweed', 'food', 'eat', 'eating', 'shore', 'water', 'plants', 'vegetation', 'limited', 'scarce'],
    feedback: {
      strong: 'Yes. These animals remind me of iguanas from the coast of South America, yet here they seem to depend upon the sea. Why might that be?',
      partial: 'That is curious. Look at what is near their mouths and at the shoreline. What food source might the sea provide when land plants are scarce?'
    }
  },
  {
    image: 'Image 2: Iguanas feeding near the shore',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Predict',
    goal: 'Predict how changing tides could make food harder to reach.',
    coach: 'At low tide the algae is exposed. But what happens when the tide rises and covers it?',
    hint: 'Think about where the algae goes at high tide and what an iguana would need to do to reach it.',
    starters: ['When the tide rises...', 'The algae would...', 'A behavior that could help is...'],
    lookFor: ['underwater', 'covered', 'water', 'swim', 'swimming', 'dive', 'diving', 'reach', 'tide', 'submerged', 'food'],
    feedback: {
      strong: 'A sensible hypothesis. If the food is underwater, an iguana that can swim or dive may reach food that others cannot.',
      partial: 'Let us follow the evidence. If the algae is covered by water, where is the food, and what might an iguana need to do to reach it?'
    }
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    move: 'Explain variation',
    goal: 'Use variation, survival, reproduction, and generations to explain adaptation.',
    coach: 'I confess, this puzzles me. I have seen iguanas on the mainland avoid the sea, yet here they enter the water. What might explain such a difference?',
    hint: 'Build the chain: some iguanas vary in water tolerance or swimming, those individuals get more food, survive and reproduce, and over generations helpful traits become more common.',
    starters: ['Some iguanas may vary in...', 'Those individuals could get more food because...', 'Over many generations...'],
    lookFor: ['variation', 'vary', 'swim', 'water', 'tolerate', 'food', 'survive', 'reproduce', 'offspring', 'generation', 'common', 'trait', 'adaptation'],
    feedback: {
      strong: 'Yes. You are explaining the difference with variation and evidence: some individuals could use the sea more successfully, gain food, survive, and leave offspring.',
      partial: 'A useful explanation needs the whole chain. What variation might exist among iguanas, and how would that affect food, survival, and reproduction over generations?'
    }
  },
  {
    image: 'Image 4: Iguanas basking on rocks',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Observe a tradeoff',
    goal: 'Notice that feeding in the sea creates new problems: cold water and salt.',
    coach: 'Now we have another puzzle. An iguana that feeds in the sea gains food, but also faces cold water and salt. Look carefully. What are these iguanas doing on the rocks?',
    hint: 'Think about body temperature and energy after swimming in cold ocean water.',
    starters: ['They appear to be...', 'This could help because...', 'After swimming...'],
    lookFor: ['bask', 'basking', 'sun', 'warming', 'warm', 'heat', 'rocks', 'rest', 'energy', 'cold'],
    feedback: {
      strong: 'Yes. Basking could help them warm after swimming and conserve energy. The sea provides food, but it also imposes a cost.',
      partial: 'Look at their position on the sunlit rocks. What might an animal need after leaving cold water?'
    }
  },
  {
    image: 'Image 4: Iguanas expelling salt',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Reason from evidence',
    goal: 'Infer why salt removal helps an animal survive on a salty marine diet.',
    coach: 'Did you see that? One appears to be forcing something from its nostrils. What do you suppose it is?',
    hint: 'The animal has just fed in salt water. What might it need to remove from its body?',
    starters: ['It might be...', 'The evidence is...', 'Because it fed in the sea...'],
    lookFor: ['salt', 'salty', 'excess salt', 'remove', 'expel', 'sneeze', 'nostril', 'sea', 'ocean', 'diet'],
    waterFeedback: 'Perhaps. Yet water alone would not explain why this happens after feeding in the sea. The animal has just returned from salt water. There must be a connection. What else might it need to remove?',
    feedback: {
      strong: 'Yes, of course — excess salt. A useful explanation. Eating from the sea creates a problem the animal must solve.',
      partial: 'Let us examine that more carefully. What substance from the sea could build up as the iguana feeds, and why would removing it help survival?'
    }
  },
  {
    image: 'Image 4: Field journal conclusion',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Conclude',
    goal: 'Write a final explanation using observations, evidence, and reasoning.',
    coach: 'Let me see your journal. You have done well today. You observed, questioned, and followed the evidence.\n\nField notes summary\n\nObservations:\n• Rocky volcanic landscape\n• Sparse vegetation\n• Iguanas feeding on shoreline algae\n• Iguanas entering the water to feed\n• Iguanas basking on rocks\n• Iguanas expelling salt\n\nInferences:\n• Land food may be limited\n• Algae provides a food source\n• Swimming allows access to more algae\n• Basking helps recover from cold water\n• Salt sneezing helps remove excess salt\n\nScience Connection:\n• Individuals vary.\n• Some variations help survival and reproduction.\n• Over many generations, natural selection can shape adaptations.\n\nUsing your observations, evidence, and reasoning, write a conclusion explaining how marine iguanas became adapted to life in the Galápagos.',
    hint: 'Use this structure: limited land food → algae as food → variation in swimming, cold tolerance, and salt removal → better survival and reproduction → adaptations become common over generations.',
    starters: ['Marine iguanas became adapted because...', 'The evidence shows...', 'Over many generations...'],
    lookFor: ['limited', 'algae', 'swim', 'salt', 'bask', 'variation', 'survive', 'reproduce', 'generation', 'natural selection', 'adaptation'],
    feedback: {
      strong: 'That conclusion follows the evidence: environment, variation, survival, reproduction, and change over generations are all connected.',
      partial: 'Your conclusion should connect the evidence to natural selection. Include the environment, helpful variations, survival and reproduction, and change over many generations.'
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

function includesAny(normalized, terms) {
  return terms.some(term => normalized.includes(term));
}

function isOffTopic(normalized) {
  const investigationTerms = [
    'rock', 'volcanic', 'lava', 'dry', 'plant', 'vegetation', 'food', 'resource', 'iguana', 'algae', 'seaweed', 'shore', 'water', 'tide', 'swim', 'dive', 'salt', 'sneeze', 'bask', 'sun', 'warm', 'cold', 'survive', 'reproduce', 'generation', 'trait', 'adaptation', 'natural selection', 'observe', 'evidence'
  ];
  const inappropriateTerms = ['kill', 'hate', 'sex', 'nude', 'drugs', 'weapon', 'bomb', 'stupid', 'idiot'];
  const words = normalized.split(/\s+/).filter(Boolean);

  if (includesAny(normalized, inappropriateTerms)) return true;
  if (words.length <= 2) return false;
  return !includesAny(normalized, investigationTerms);
}

function evaluateResponse(response, step) {
  const normalized = response.toLowerCase();
  const matches = step.lookFor.filter(term => normalized.includes(term));
  const hasReasoning = /because|so|therefore|this suggests|which means|in order to|if |would|could|might/.test(normalized);
  const isDetailed = response.split(/\s+/).filter(Boolean).length >= 8;
  const score = matches.length + (hasReasoning ? 1 : 0) + (isDetailed ? 1 : 0);

  return {
    isBrief: response.split(/\s+/).filter(Boolean).length <= 3,
    isOffTopic: isOffTopic(normalized),
    isStrong: score >= 3,
    mentionsVegetation: includesAny(normalized, ['plant', 'plants', 'vegetation', 'scarce', 'little vegetation', 'few plants']),
    mentionsWaterOnly: includesAny(normalized, ['water', 'seawater']) && !includesAny(normalized, ['salt', 'salty']),
    matches
  };
}

function buildFinalSummary() {
  const moves = history
    .map(item => `${demoSteps[item.step].move}: “${item.response}”`)
    .join(' | ');

  return `Learning trace captured: ${moves}`;
}

function getCoachFeedback(step, evaluation) {
  if (evaluation.isOffTopic) {
    return 'Let us stay with the investigation. Look carefully at the image and tell me what you observe.';
  }

  if (currentStep === 0 && evaluation.isBrief && step.briefFeedback) {
    return step.briefFeedback;
  }

  if (currentStep === 1 && evaluation.mentionsVegetation && step.vegetationFeedback) {
    return step.vegetationFeedback;
  }

  if (currentStep === 6 && evaluation.mentionsWaterOnly && step.waterFeedback) {
    return step.waterFeedback;
  }

  return evaluation.isStrong ? step.feedback.strong : step.feedback.partial;
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

  const coachFeedback = getCoachFeedback(step, evaluation);
  addMessage(coachFeedback, 'coach');

  if (!evaluation.isStrong && !evaluation.isOffTopic) {
    addMessage(`Scaffold: ${step.hint}`, 'coach');
  }

  if (evaluation.isOffTopic) return;

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
