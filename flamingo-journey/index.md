---
layout: default
title: Flamingo Journey
description: An AI-assisted conservation game design project exploring wetland ecosystems, meaningful choices, and English–Spanish learning.
---

<div class="wj-hero">
  <img class="wj-hero-image" src="{{ '/flamingo-game/art/wetland-fresh.png' | relative_url }}" alt="AI-generated wetland illustration used in Flamingo Journey, with pink flamingos, turquoise water, and pale mountains">
  <h1>Flamingo Journey</h1>
  <p class="wj-hero-subtitle">An AI-Assisted Game Design Project Exploring Conservation and Bilingual Learning</p>
  <p class="wj-hero-tags">Interactive Storytelling · Conservation Education · English–Spanish Learning · AI-Assisted Design</p>
  <p class="section-cta"><a href="{{ '/flamingo-game/' | relative_url }}" target="_blank" rel="noopener">Play the Game →</a></p>
  <p class="wj-credit">Design and development: Kathryn Kong, with AI assistance</p>
</div>

<section class="reveal" markdown="1">

## Design Question

<p class="wj-question">How might a game encourage players to understand conservation as ongoing care rather than a series of correct answers?</p>

Flamingo Journey is an illustrated web game that invites players to read a wetland landscape, make conservation decisions, and see how their choices unfold over three changing seasons. It explores how interactive systems, bilingual content, and visual storytelling can turn ecological information into an experience of curiosity and care.

Players consider the connections between water, food, and nesting conditions, then decide which needs to prioritize. English, Spanish, and paired bilingual modes offer different ways to engage with the same experience.

</section>

<section class="reveal" markdown="1">

## Player Experience

<div class="card-grid">
  <div class="card card--narrative cm-card">
    <span class="cm-number">01</span>
    <h3>Observe the Landscape</h3>
    <p>Begin as a Chilean flamingo and explore five flamingo homelands. Collect habitat observations in a field journal and discover the relationships between each species and its environment. These destinations form an educational journey rather than a literal migration route.</p>
  </div>
  <div class="card card--research cm-card">
    <span class="cm-number">02</span>
    <h3>Choose How to Help</h3>
    <p>Observations unlock conservation actions. With two action points each season, players decide where to direct their attention. Protecting water flows, reducing pollution, and supporting nesting safety involve different costs and benefits.</p>
  </div>
  <div class="card card--creative cm-card">
    <span class="cm-number">03</span>
    <h3>Reflect on What Changes</h3>
    <p>Seasonal pressures affect the habitat alongside the player's actions. A final report highlights remaining vulnerabilities and encourages another attempt. Optional vocabulary practice connects words to the environments players have explored.</p>
  </div>
</div>

</section>

<section class="reveal" markdown="1">

## Design Decisions

<div class="card-grid">
  <div class="card card--narrative">
    <h3>Make Observation Matter</h3>
    <p>Reading the landscape unlocks actions, connecting ecological information directly to play. The field journal gives players a place to revisit observations and useful words.</p>
  </div>
  <div class="card card--research">
    <h3>Make Trade-offs Visible</h3>
    <p>Water balance, food availability, and nesting safety remain separate indicators. A strong result in one area cannot conceal a vulnerable habitat elsewhere. Limited seasonal action points make prioritization part of the experience.</p>
  </div>
  <div class="card card--creative">
    <h3>Support Language Learning Without Punishment</h3>
    <p>Players can use English, Spanish, or both together. Vocabulary practice is optional, and language mistakes do not damage the habitat.</p>
  </div>
  <div class="card card--narrative">
    <h3>Keep Entry Simple</h3>
    <p>Guest play requires no account, and progress saves on the device. Optional account features support saving and restoring progress. The installable web app supports offline play after its resources have been cached.</p>
  </div>
</div>

The habitat indicators are an illustrative teaching model, not measurements of real ecosystems or predictions of the effectiveness of conservation interventions.

</section>

<section class="reveal" markdown="1">

## AI-Assisted Game Design

This project also explores AI-assisted making as a design practice. AI assistance supported the revision process, while the wetland illustration was generated and refined through an iterative visual workflow. The artwork moved from a heavier, sepia-toned scene toward a lighter palette of mint, turquoise, and pink.

The central design work involved deciding how these materials should serve the experience: what players notice, which choices become available, and how consequences are communicated. The illustrated habitat creates a setting for exploration; it does not function as a scientific map.

<div class="card-grid">
  <div class="card card--creative">
    <h3>Iterate With Intention</h3>
    <p>Generating an image was one step in a larger process of selecting, revising, and integrating material. The visual revision emphasized a lighter atmosphere and open space for the game's observation markers.</p>
  </div>
  <div class="card card--research">
    <h3>Keep the Evidence Visible</h3>
    <p>Conservation content draws on identified natural-history sources. AI-generated artwork and simplified numerical mechanics are labeled according to their role, so an appealing representation is not mistaken for ecological evidence.</p>
  </div>
  <div class="card card--narrative">
    <h3>Distinguish Making From Playing</h3>
    <p>“AI-assisted” describes the making process. The conservation experience uses authored bilingual content and defined game rules, rather than live AI-generated responses.</p>
  </div>
</div>

</section>

<section class="reveal" markdown="1">

## Making the Game

Flamingo Journey is built with React and Vite and published on GitHub Pages. It is an installable progressive web app, with device-based progress saving and optional Firebase authentication and cloud storage.

<div class="wj-pipeline">
  <span>Species &amp; habitat research</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Observation &amp; decision design</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Bilingual content</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>AI-assisted visual iteration</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Implementation &amp; revision</span>
</div>

The revised game connects three seasonal decisions with a field journal, conservation feedback, and optional word practice. Each homeland has an independently saved expedition, allowing players to explore different habitats at their own pace.

</section>

<section class="reveal" markdown="1">

## Reflection

The redesign shifted Flamingo Journey from presenting information and checking answers toward asking players to observe, prioritize, and reconsider. Conservation became a continuing relationship between several habitat needs, rather than a single successful choice.

The project also makes AI literacy part of the design process: evaluating generated material, documenting its use, and deciding when visual appeal or simplified mechanics need qualification. The intended learning experience is grounded in design choices; its educational effects still need to be examined through playtesting.

Future playtesting could explore whether players understand the ecological trade-offs, find the bilingual presentation helpful, and carry their curiosity beyond the game.

</section>

<section class="reveal" markdown="1">

## Sources and Credits

Conservation references include [BirdLife International's flamingo overview](https://www.birdlife.org/birds/flamingo/), the [Natural History Museum's discussion of rising water levels and lesser flamingos](https://www.nhm.ac.uk/discover/news/2024/april/rising-water-levels-threaten-survival-lesser-flamingo.html), and the [San Diego Zoo Wildlife Alliance flamingo guide](https://animals.sandiegozoo.org/animals/flamingo).

The featured wetland artwork was AI-generated and revised for this project. Species photographs are retained within the game. The illustrated landscape and habitat indicators are educational representations.

<p class="section-cta"><a href="{{ '/flamingo-game/' | relative_url }}" target="_blank" rel="noopener">Play Flamingo Journey →</a></p>

</section>
