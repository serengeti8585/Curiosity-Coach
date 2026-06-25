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
    journal: 'Observations',
    goal: 'Name only what can be seen before deciding what it means.',
    coach: 'You are my assistant in the Galápagos. Today we shall not begin with answers. We shall begin as naturalists do — with careful observation. Observation is what we can see directly. Inference is what we think it may mean. Look carefully at this shore. What can you observe?',
    hint: 'Use visible evidence only: rocks, dark rough surfaces, dry ground, few plants, shore, water, animals, or algae. Avoid explaining what it means yet.',
    starters: ['I observe...', 'I can see...', 'Visible evidence is...'],
    lookFor: ['rock', 'rocks', 'dark', 'rough', 'dry', 'plant', 'plants', 'vegetation', 'few', 'sparse', 'shore', 'coast', 'water', 'iguana', 'algae'],
    inferenceTerms: ['volcanic', 'lava', 'harsh', 'barren', 'limited food', 'resource', 'starving'],
    briefFeedback: 'That is a beginning. Let us make it more precise: what can your eyes see directly?',
    feedback: {
      strong: 'Good. You are keeping close to the evidence. Now we may ask what those visible details suggest.',
      partial: 'That may include an inference. For example, “volcanic rock” may be an inference unless you name the visible evidence. What do you see directly?'
    }
  },
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    move: 'Infer',
    journal: 'My Inferences',
    goal: 'Use observations to infer what the landscape may be like for animals.',
    coach: 'Now let us move from observation to inference. From the dry rock and the amount of vegetation you observed, what do you infer about this environment?',
    hint: 'Connect a visible observation to a possible meaning: few plants may suggest a dry, harsh place with limited land food.',
    starters: ['This suggests...', 'I infer that...', 'Because I observed...'],
    lookFor: ['dry', 'harsh', 'few', 'scarce', 'sparse', 'limited', 'little', 'plant', 'plants', 'vegetation', 'food', 'resource', 'difficult'],
    feedback: {
      strong: 'A reasonable inference. You have moved from what is seen to what it may mean, and you used evidence to do it.',
      partial: 'Let us tie the inference to evidence. Which observation makes you think the environment might be difficult for animals?'
    }
  },
  {
    image: 'Image 1: Galápagos shoreline',
    imageSrc: 'assets/images/galapagos-shoreline.PNG',
    move: 'Question',
    journal: 'My Inferences',
    goal: 'Reason about land food resources without being told the conclusion.',
    coach: 'If an iguana lived on this land, what problem might it face in finding food? What evidence supports your idea?',
    hint: 'Look for evidence about plants and dry land. Then explain what that could mean for land food.',
    starters: ['The problem might be...', 'The evidence is...', 'If plants are scarce...'],
    lookFor: ['food', 'eat', 'plant', 'plants', 'vegetation', 'scarce', 'little', 'limited', 'few', 'dry', 'rock', 'resource', 'hard', 'difficult'],
    vegetationFeedback: 'Yes… that troubled me as well. If land plants are scarce, where else might an animal search for food?',
    feedback: {
      strong: 'Yes. You have not merely named the landscape; you have reasoned about a survival problem it could create.',
      partial: 'What difficulty follows from few plants or much bare rock? Try stating the problem an animal would face.'
    }
  },
  {
    image: 'Image 2: Iguanas feeding near the shore',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Connect evidence',
    journal: 'Observations',
    goal: 'Observe a possible shoreline food source.',
    coach: 'Look there, near the water’s edge. What do you observe the iguanas doing, and what appears to be near their mouths?',
    hint: 'Name the behavior and the visible food source near the shore.',
    starters: ['I observe...', 'They appear to be...', 'Near their mouths I see...'],
    lookFor: ['eat', 'eating', 'feed', 'feeding', 'algae', 'seaweed', 'shore', 'water', 'mouth'],
    feedback: {
      strong: 'That is curious. You have observed a possible food source at the edge of the sea.',
      partial: 'Look closely at the shoreline and their mouths. What might they be feeding on?'
    }
  },
  {
    image: 'Image 2: Iguanas feeding near the shore',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Infer',
    journal: 'My Inferences',
    goal: 'Infer why algae might matter when land food appears limited.',
    coach: 'What do you make of it? Connect your earlier inference about land food to this shoreline algae.',
    hint: 'Build the connection: limited land vegetation → need for food → algae may be an important resource.',
    starters: ['Because land food seems...', 'Algae might matter because...', 'This connects because...'],
    lookFor: ['limited', 'scarce', 'little', 'few', 'land', 'plant', 'vegetation', 'food', 'resource', 'algae', 'seaweed', 'need'],
    feedback: {
      strong: 'A reasonable inference. If land food is limited, algae could become important — and you made that connection from evidence.',
      partial: 'You have one part of the idea. Now connect it to the earlier problem: why would algae matter if land vegetation is scarce?'
    }
  },
  {
    image: 'Image 2: Iguanas feeding near the shore',
    imageSrc: 'assets/images/marine-iguana.PNG',
    move: 'Predict',
    journal: 'My Hypotheses',
    goal: 'Predict how tides could change access to food.',
    coach: 'At low tide the algae may be exposed. But suppose the tide rises and covers it. What might an iguana need to do then?',
    hint: 'If the food is covered by water, predict a behavior that could help the iguana reach it.',
    starters: ['When the tide rises...', 'The iguana might need to...', 'A helpful behavior could be...'],
    lookFor: ['underwater', 'covered', 'water', 'swim', 'swimming', 'dive', 'diving', 'reach', 'tide', 'submerged', 'food'],
    feedback: {
      strong: 'A sensible hypothesis. If the food is underwater, entering the water could help an iguana reach what land cannot provide.',
      partial: 'Let us follow the evidence. If the algae is covered by water, where is the food, and what behavior might give access to it?'
    }
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    move: 'Question',
    journal: 'My Hypotheses',
    goal: 'Explain why swimming could be useful and risky.',
    coach: 'I confess, this puzzles me. Iguanas on the mainland avoid the sea, yet these animals enter the water willingly. Why might entering the water be useful, and what risks might it bring?',
    hint: 'Consider both sides: food access may be useful, while cold water, energy cost, waves, or predators may be risky.',
    starters: ['It might be useful because...', 'A risk could be...', 'The tradeoff is...'],
    lookFor: ['food', 'algae', 'reach', 'useful', 'risk', 'risky', 'cold', 'energy', 'waves', 'predator', 'danger', 'swim'],
    feedback: {
      strong: 'Yes. You are treating the sea as both opportunity and hazard. That is the sort of tradeoff naturalists must examine.',
      partial: 'Good start, but revise it to include both parts: what benefit might the sea offer, and what danger or cost might it impose?'
    }
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    move: 'Infer',
    journal: 'My Inferences',
    goal: 'Infer why cold water is a special challenge for reptiles.',
    coach: 'Let us examine one risk. Reptiles depend greatly on outside warmth. If an iguana spends time in cold ocean water, what problem might follow?',
    hint: 'Think about body temperature, movement, energy, and how cold water could slow a reptile.',
    starters: ['Cold water could...', 'Because reptiles rely on...', 'This might make it harder to...'],
    lookFor: ['cold', 'body temperature', 'temperature', 'warm', 'heat', 'slow', 'sluggish', 'energy', 'move', 'reptile', 'cold-blooded'],
    feedback: {
      strong: 'Yes… that troubled me as well. Cold water could lower body temperature and make movement more difficult.',
      partial: 'A useful idea, but make the body-temperature link clearer. What might cold water do to a reptile’s ability to move or use energy?'
    }
  },
  {
    image: 'Image 4: Iguanas basking on rocks',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Revise',
    journal: 'Evidence Collected',
    goal: 'Revise the swimming idea by adding basking as part of the evidence chain.',
    coach: 'Now observe these iguanas on sunlit rocks after time near the sea. What might basking accomplish, given the cold-water problem you just described?',
    hint: 'Connect the chain: swimming to reach algae → cold water lowers body temperature → basking may restore warmth.',
    starters: ['Basking might...', 'This revises my idea because...', 'After swimming, they may need to...'],
    lookFor: ['bask', 'basking', 'sun', 'warming', 'warm', 'heat', 'rocks', 'cold', 'temperature', 'after swimming', 'recover'],
    feedback: {
      strong: 'A careful revision. Swimming is not only “get food”; it also creates a body-temperature problem that basking may help solve.',
      partial: 'You are close. Link the behavior on the rocks to the earlier cold-water challenge. Why warm up after swimming?'
    }
  },
  {
    image: 'Image 4: Iguanas expelling salt',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Investigate',
    journal: 'Observations',
    goal: 'Investigate the salt-sneezing mystery from evidence.',
    coach: 'Another mystery: one appears to force something from its nostrils. Before we decide why, what substances from the sea enter an animal while feeding there?',
    hint: 'Think about what seawater contains and what might enter with marine algae.',
    starters: ['From the sea it might take in...', 'Seawater contains...', 'While feeding it may swallow...'],
    lookFor: ['water', 'salt', 'salty', 'seawater', 'algae', 'minerals'],
    feedback: {
      strong: 'Good. Water and salt are both plausible. Now we must decide which could become troublesome.',
      partial: 'Think of seawater itself. Besides food, what might enter the mouth or body while feeding in the sea?'
    }
  },
  {
    image: 'Image 4: Iguanas expelling salt',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Infer',
    journal: 'My Inferences',
    goal: 'Infer which sea substance could become harmful in excess.',
    coach: 'Which of those substances might become problematic if too much accumulates in the body? Why?',
    hint: 'Too much salt can disturb an animal’s internal balance. Explain why removing it could help survival.',
    starters: ['Too much ... could...', 'The problematic substance is...', 'Removing it would help because...'],
    lookFor: ['salt', 'salty', 'excess', 'too much', 'build up', 'accumulate', 'remove', 'balance', 'harm', 'survive'],
    waterFeedback: 'Perhaps water enters, yes. But water alone is not the whole puzzle. Which dissolved substance in seawater might be harmful if it builds up?',
    feedback: {
      strong: 'A reasonable inference: excess salt could become a problem for an animal feeding from the sea.',
      partial: 'Let us refine the idea. Which substance in seawater is most likely to be harmful if too much remains in the body?'
    }
  },
  {
    image: 'Image 4: Iguanas expelling salt',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Hypothesize',
    journal: 'My Hypotheses',
    goal: 'Hypothesize what salt sneezing accomplishes.',
    coach: 'Then what might the sneezing accomplish? State it as a hypothesis and connect it to survival.',
    hint: 'Use: If iguanas take in excess salt while feeding, then sneezing may help remove it, which could help them survive on algae from the sea.',
    starters: ['My hypothesis is...', 'If they take in salt...', 'This could help survival because...'],
    lookFor: ['salt', 'remove', 'expel', 'sneeze', 'nostril', 'excess', 'survive', 'sea', 'feeding'],
    feedback: {
      strong: 'Yes. That hypothesis explains the behavior as a solution to a problem created by feeding in the sea.',
      partial: 'Revise the hypothesis so it includes three parts: the sea introduces salt, sneezing removes it, and removal helps survival.'
    }
  },
  {
    image: 'Image 3: Iguana swimming underwater',
    imageSrc: 'assets/images/underwater-iguana.PNG',
    move: 'Explain adaptation',
    journal: 'My Hypotheses',
    goal: 'Use variation, survival, reproduction, and natural selection to explain adaptation.',
    coach: 'Let us gather the pieces. Among many iguanas, individuals may vary: some may swim better, tolerate cold longer, bask effectively, or remove salt better. How could such variation lead, over many generations, to marine iguanas adapted to this place?',
    hint: 'Connect variation → more food or better survival → more reproduction → helpful traits becoming more common over generations.',
    starters: ['Some iguanas may vary in...', 'Those individuals could survive because...', 'Over many generations...'],
    lookFor: ['variation', 'vary', 'trait', 'swim', 'cold', 'salt', 'bask', 'food', 'survive', 'reproduce', 'offspring', 'generation', 'common', 'natural selection', 'adaptation'],
    feedback: {
      strong: 'Yes. You are explaining with evidence and mechanism: variation, survival, reproduction, and change over generations.',
      partial: 'A useful explanation needs the full chain. What variation helps, how does it affect survival, and how would reproduction change the population over generations?'
    }
  },
  {
    image: 'Image 4: Field journal conclusion',
    imageSrc: 'assets/images/iguana-salt-sneeze.PNG',
    move: 'Conclude',
    journal: 'Evidence Collected',
    goal: 'Write a final explanation using your own observations, evidence, and reasoning.',
    coach: `Let me see your field journal. I shall include only ideas you have generated during our investigation.

Using your observations, evidence, and reasoning, write a final explanation: How did marine iguanas become adapted to life in the Galápagos? Use variation, survival, reproduction, and natural selection.`,
    hint: 'Use only ideas from your journal. Explain how the environment created challenges, how some iguanas varied, and why helpful traits became more common through survival and reproduction.',
    starters: ['Marine iguanas became adapted because...', 'The evidence from my investigation shows...', 'Over many generations, natural selection...'],
    lookFor: ['limited', 'algae', 'swim', 'cold', 'salt', 'bask', 'variation', 'survive', 'reproduce', 'generation', 'natural selection', 'adaptation', 'evidence'],
    feedback: {
      strong: 'That conclusion follows the evidence. You have reasoned from observations to hypotheses and then to an explanation using natural selection.',
      partial: 'Revise your explanation to include evidence, variation, survival, reproduction, and change over many generations.'
    }
  }
];
const chatWindow = document.querySelector('#chat-window');
const chatForm = document.querySelector('#chat-form');
const studentInput = document.querySelector('#student-input');
const demoImage = document.querySelector('#demo-image');
const imageLabel = document.querySelector('#image-label');
const progress = document.querySelector('.demo-progress');
progress.innerHTML = demoSteps.map(() => '<span class="dot"></span>').join('');
const dots = Array.from(document.querySelectorAll('.dot'));
const resetButton = document.querySelector('#reset-demo');
const backButton = document.querySelector('#back-step');
const hintButton = document.querySelector('#hint-demo');
const thinkingMove = document.querySelector('#thinking-move');
const thinkingGoal = document.querySelector('#thinking-goal');
const sentenceStarters = document.querySelector('#sentence-starters');

let currentStep = 0;
let history = [];
let stepAttempts = {};
let lastPromptByStep = {};
let redirectedByStep = {};

const reasoningTerms = /because|so|therefore|this suggests|which means|in order to|if |would|could|might|leads to|makes it|helps|allows/;
const helpTerms = ['i don\'t know', 'dont know', 'do not know', 'not sure', 'help me', 'help', 'hint'];

const responsePatterns = [
  {
    name: 'landFoodScarcity',
    terms: ['food', 'not enough food', 'limited food', 'scarce food', 'few plants', 'plants', 'vegetation', 'eat', 'hungry', 'starve', 'survive', 'struggle', 'hard to survive', 'difficult to survive']
  },
  {
    name: 'visibleLandscape',
    terms: ['rock', 'rocks', 'dry', 'few plants', 'plants', 'vegetation', 'shore', 'water', 'dark', 'rough', 'iguana', 'algae', 'green stuff']
  },
  {
    name: 'shoreFood',
    terms: ['algae', 'seaweed', 'green stuff', 'food underwater', 'underwater food', 'food', 'eat', 'feeding', 'shore', 'water']
  },
  {
    name: 'waterAccess',
    terms: ['underwater', 'food underwater', 'covered', 'water', 'swim', 'dive', 'reach', 'tide', 'submerged']
  },
  {
    name: 'coldWarmth',
    terms: ['warm', 'warm up', 'cold', 'temperature', 'body temperature', 'slow', 'sluggish', 'heat', 'sun', 'bask', 'rocks', 'they need to warm up']
  },
  {
    name: 'saltProblem',
    terms: ['salt', 'salty', 'seawater', 'too much salt', 'remove salt', 'expel salt', 'sneeze', 'nostril', 'balance']
  },
  {
    name: 'selection',
    terms: ['variation', 'vary', 'trait', 'survive', 'reproduce', 'offspring', 'generation', 'natural selection', 'adaptation', 'adapted']
  }
];

const stepExpectations = [
  { strong: ['visibleLandscape'], broad: [], partial: ['landFoodScarcity'] },
  { strong: ['landFoodScarcity'], broad: ['visibleLandscape'], partial: [] },
  { strong: ['landFoodScarcity'], broad: ['visibleLandscape'], partial: ['shoreFood'] },
  { strong: ['shoreFood'], broad: ['visibleLandscape'], partial: ['waterAccess'] },
  { strong: ['shoreFood', 'landFoodScarcity'], broad: ['shoreFood'], partial: ['landFoodScarcity', 'waterAccess'] },
  { strong: ['waterAccess'], broad: ['shoreFood'], partial: [] },
  { strong: ['shoreFood', 'waterAccess', 'coldWarmth'], broad: ['shoreFood', 'waterAccess'], partial: ['coldWarmth'] },
  { strong: ['coldWarmth'], broad: ['waterAccess'], partial: [] },
  { strong: ['coldWarmth'], broad: ['visibleLandscape'], partial: [] },
  { strong: ['saltProblem', 'shoreFood'], broad: ['shoreFood'], partial: [] },
  { strong: ['saltProblem'], broad: ['shoreFood'], partial: [] },
  { strong: ['saltProblem'], broad: [], partial: [] },
  { strong: ['selection'], broad: ['shoreFood', 'coldWarmth', 'saltProblem'], partial: [] },
  { strong: ['selection', 'shoreFood'], broad: ['selection'], partial: ['shoreFood', 'coldWarmth', 'saltProblem'] }
];

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
    'rock', 'volcanic', 'lava', 'dry', 'plant', 'vegetation', 'food', 'resource', 'iguana', 'algae', 'seaweed', 'green', 'shore', 'coast', 'mouth', 'water', 'tide', 'swim', 'dive', 'salt', 'sneeze', 'nostril', 'bask', 'sun', 'warm', 'heat', 'temperature', 'cold', 'survive', 'struggle', 'reproduce', 'generation', 'trait', 'variation', 'adaptation', 'natural selection', 'observe', 'evidence', 'infer', 'hypothesis', 'help', 'know'
  ];
  const inappropriateTerms = ['kill', 'hate', 'sex', 'nude', 'drugs', 'weapon', 'bomb', 'stupid', 'idiot'];
  const words = normalized.split(/\s+/).filter(Boolean);

  if (includesAny(normalized, inappropriateTerms)) return true;
  if (words.length <= 2) return false;
  return !includesAny(normalized, investigationTerms);
}

function matchedPatternNames(normalized) {
  return responsePatterns
    .filter(pattern => includesAny(normalized, pattern.terms))
    .map(pattern => pattern.name);
}

function hasAllPatterns(matches, requiredPatterns) {
  return requiredPatterns.length > 0 && requiredPatterns.every(pattern => matches.includes(pattern));
}

function hasAnyPattern(matches, patterns) {
  return patterns.some(pattern => matches.includes(pattern));
}

function evaluateResponse(response, step) {
  const normalized = response.toLowerCase();
  const matches = step.lookFor.filter(term => normalized.includes(term));
  const patternMatches = matchedPatternNames(normalized);
  const expectations = stepExpectations[currentStep] || { strong: [], broad: [], partial: [] };
  const hasReasoning = reasoningTerms.test(normalized);
  const wordCount = response.split(/\s+/).filter(Boolean).length;
  const makesInferenceDuringObservation = step.inferenceTerms && includesAny(normalized, step.inferenceTerms);
  const asksForHelp = includesAny(normalized, helpTerms);
  const strongByPattern = hasAllPatterns(patternMatches, expectations.strong) || (hasAnyPattern(patternMatches, expectations.strong) && (hasReasoning || wordCount >= 4));
  const broadByPattern = !strongByPattern && hasAnyPattern(patternMatches, expectations.broad);
  const partialByPattern = !strongByPattern && hasAnyPattern(patternMatches, expectations.partial);
  const keywordStrong = matches.length >= 3 && !makesInferenceDuringObservation;
  let category = 'weak';

  if (isOffTopic(normalized)) category = 'offTopic';
  else if (asksForHelp) category = 'help';
  else if (currentStep === 0 && makesInferenceDuringObservation) category = 'broad';
  else if (strongByPattern || keywordStrong) category = 'strong';
  else if (broadByPattern) category = 'broad';
  else if (partialByPattern || matches.length > 0) category = 'partial';

  return {
    category,
    isBrief: wordCount <= 3,
    isOffTopic: category === 'offTopic',
    isStrong: category === 'strong',
    isProgress: ['strong', 'partial', 'broad'].includes(category),
    asksForHelp,
    mentionsVegetation: includesAny(normalized, ['plant', 'plants', 'vegetation', 'scarce', 'little vegetation', 'few plants']),
    mentionsWaterOnly: includesAny(normalized, ['water', 'seawater']) && !includesAny(normalized, ['salt', 'salty']),
    makesInferenceDuringObservation,
    patternMatches,
    matches
  };
}

function buildFinalSummary() {
  const sections = ['Observations we recorded', 'Inferences you developed', 'Ideas we revised', 'Evidence for your conclusion'];
  const journalMap = {
    Observations: 'Observations we recorded',
    'My Inferences': 'Inferences you developed',
    'My Hypotheses': 'Ideas we revised',
    'Evidence Collected': 'Evidence for your conclusion'
  };
  const grouped = sections.map(section => {
    const entries = history
      .filter(item => journalMap[demoSteps[item.step].journal] === section && item.studentGenerated)
      .map(item => `• ${item.response}`)
      .join('\n');
    return `${section}:\n${entries || '• No student-generated entry recorded yet.'}`;
  });

  return `Field journal summary — student-generated ideas only\n\n${grouped.join('\n\n')}`;
}

function nonRepeatingPrompt(message, fallback) {
  if (lastPromptByStep[currentStep] === message) {
    lastPromptByStep[currentStep] = fallback;
    return fallback;
  }
  lastPromptByStep[currentStep] = message;
  return message;
}

function getTargetedFollowUp(step, evaluation, attempts) {
  if (currentStep === 0) return 'That is a useful beginning. Let us keep it observational for the moment: what visible details, such as rocks, plants, water, or animals, can your eyes confirm?';
  if (currentStep === 1) return 'Indeed, survival may be difficult. Let us make the reasoning visible: what resource seems scarce in this landscape?';
  if (currentStep === 2) return 'Yes, that points toward a food problem. What evidence on the land makes you think food would be limited?';
  if (currentStep === 4) return 'A sensible inference. Now make the link explicit: why would shoreline algae matter if land food is scarce?';
  if (currentStep === 6) return 'That is one side of the tradeoff. What is the other side: the benefit of entering the sea, or the risk it creates?';
  if (currentStep === 7) return 'Reptiles depend on external warmth more than mammals do. What might cold water do to movement or energy?';
  if (currentStep === 8) return 'Yes, they need warmth. How does basking after swimming answer the cold-water problem?';
  if (currentStep === 10) return 'Seawater enters the puzzle, yes. Which dissolved substance in seawater can become dangerous if too much remains in the body?';
  if (currentStep === 12) return 'A useful trait matters only if it helps survival and reproduction. How could helpful variation become common over generations?';
  if (currentStep === 13) return 'You have pieces of the explanation. Add the mechanism: variation, survival, reproduction, and change over generations.';
  return attempts > 1 ? `Let us use the hint as a scaffold and keep moving: ${step.hint}` : step.feedback.partial;
}

function getCoachFeedback(step, evaluation, attempts) {
  if (evaluation.isOffTopic) {
    return redirectedByStep[currentStep]
      ? `Let us set that aside. Here is a stronger scaffold so we can continue: ${step.hint}`
      : 'That is outside our investigation. Let us return to the evidence before us.';
  }

  if (evaluation.category === 'help') {
    return `Of course. Here is a scaffold, but keep the reasoning in your hands: ${step.hint}`;
  }

  if (currentStep === 2 && evaluation.mentionsVegetation && step.vegetationFeedback) {
    return step.vegetationFeedback;
  }

  if (currentStep === 10 && evaluation.mentionsWaterOnly && step.waterFeedback) {
    return step.waterFeedback;
  }

  if (evaluation.category === 'strong') return step.feedback.strong;

  const followUp = getTargetedFollowUp(step, evaluation, attempts);
  const fallback = `Another way to say the next step is: ${step.hint}`;

  if (evaluation.category === 'broad') {
    return nonRepeatingPrompt(`That is a sensible broad idea. What evidence leads you there? ${followUp}`, fallback);
  }

  if (evaluation.category === 'partial') {
    return nonRepeatingPrompt(`Indeed, that part is useful. ${followUp}`, fallback);
  }

  return nonRepeatingPrompt(`Let us make the reasoning visible. ${followUp}`, fallback);
}

function recordStudentIdea(response, evaluation) {
  if (!evaluation.isProgress) return;
  history.push({
    step: currentStep,
    response,
    category: evaluation.category,
    matches: evaluation.matches,
    studentGenerated: true
  });
}

function moveToNextStep() {
  if (currentStep < demoSteps.length - 1) {
    currentStep += 1;
    renderStep();
    setTimeout(() => addMessage(demoSteps[currentStep].coach, 'coach'), 350);
  } else {
    addMessage('Investigation complete. Notice how the journal shows only the ideas you generated or clearly agreed to during the investigation.', 'system');
    addMessage(buildFinalSummary(), 'system');
  }
}

function startDemo() {
  currentStep = 0;
  history = [];
  stepAttempts = {};
  lastPromptByStep = {};
  redirectedByStep = {};
  chatWindow.innerHTML = '';
  renderStep();
  addMessage('Version 3.1 Scientific Inquiry Experience: a guided scientific investigation with a scripted coach prototype.', 'system');
  addMessage('Use the thinking move, sentence starters, and Hint button if you want more scaffolding.', 'system');
  addMessage(demoSteps[currentStep].coach, 'coach');
}

function advanceDemo(response) {
  const step = demoSteps[currentStep];
  const evaluation = evaluateResponse(response, step);
  const attempts = (stepAttempts[currentStep] || 0) + 1;
  stepAttempts[currentStep] = attempts;

  addMessage(response, 'student');
  addMessage(getCoachFeedback(step, evaluation, attempts), 'coach');

  if (evaluation.isOffTopic) {
    if (redirectedByStep[currentStep]) {
      moveToNextStep();
    } else {
      redirectedByStep[currentStep] = true;
    }
    return;
  }

  recordStudentIdea(response, evaluation);

  if (evaluation.isStrong) {
    moveToNextStep();
    return;
  }

  if (attempts >= 2) {
    addMessage(`Let us carry that idea forward with this scaffold: ${step.hint}`, 'coach');
    moveToNextStep();
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
