---
layout: default
title: Flamingo Journey
description: A bilingual educational game about hatching, migrating, and protecting flamingo habitats around the world.
---

<div class="wj-hero">
  <img class="wj-hero-image" src="{{ '/assets/flamingo-journey/thumbnail.png' | relative_url }}" alt="Flamingo Journey species-selection screen, showing a Chilean Flamingo card">
  <h1>Flamingo Journey</h1>
  <p class="wj-hero-subtitle">A Bilingual Game About Flamingo Habitats &amp; Conservation</p>
  <p class="wj-hero-tags">React · Bilingual Language Learning · Game-Based Learning · Conservation Education</p>
  <p class="section-cta"><a href="{{ '/flamingo-game/' | relative_url }}" target="_blank" rel="noopener">Play the Game →</a></p>
  <p class="wj-credit">Designed and developed by Kathryn Kong</p>
</div>

<section class="reveal" markdown="1">

## Design Question

<p class="wj-question">How might a game turn factual knowledge about an endangered species into a personal stake, while teaching vocabulary in two languages at once?</p>

Flamingo Journey is a small, self-contained web game: players hatch as a flamingo chick, discover which of five real flamingo species they are, and travel between that species' actual homelands — learning its diet, habitat, and behavior, and making a conservation choice at each stop.

</section>

<section class="reveal" markdown="1">

## Player Experience

<div class="card-grid">

  <div class="card card--narrative cm-card">
    <span class="cm-number">1</span>
    <div class="card-image">
      <img src="{{ '/assets/flamingo-journey/thumbnail.png' | relative_url }}" alt="Hatch screen letting the player choose which flamingo species they are">
    </div>
    <h3>Hatch</h3>
    <p>Choose which of five real flamingo species you are — Chilean, Lesser, Greater, Andean, or James's — and read a short self-discovery passage about your species' body and diet.</p>
  </div>

  <div class="card card--research cm-card">
    <div class="card-image">
      <img src="{{ '/assets/flamingo-journey/map-preview.png' | relative_url }}" alt="Map screen showing homelands the player can travel to">
    </div>
    <span class="cm-number">2</span>
    <h3>Migrate</h3>
    <p>Travel a map of your species' real-world homelands, each with its own habitat, behavior, and life-cycle content.</p>
  </div>

  <div class="card card--creative cm-card">
    <span class="cm-number">3</span>
    <div class="card-image placeholder">
      <span class="ph-icon">🦩</span>
      <span class="ph-caption">A conservation choice at each homeland</span>
    </div>
    <h3>Protect</h3>
    <p>At each homeland, respond to a real conservation pressure — habitat loss, water diversion, disturbance — and take a short bilingual knowledge check.</p>
  </div>

</div>

</section>

<section class="reveal" markdown="1">

## Design Decisions

<div class="card-grid">

  <div class="card card--narrative">
    <h3>Play First, No Account Needed</h3>
    <p>The game opens straight into a "Play as guest" option — progress saves to the browser automatically. Signing in is only needed for players who want their progress synced across devices, so the barrier to trying it is zero.</p>
  </div>

  <div class="card card--research">
    <h3>Bilingual by Design</h3>
    <p>Every piece of content — species facts, homeland descriptions, conservation choices — can be read in one or two languages at once, so the game can be used for language learning as well as conservation education.</p>
  </div>

  <div class="card card--creative">
    <h3>Habitat Health as Feedback</h3>
    <p>Conservation choices at each homeland aggregate into a habitat-health score the player can review on their profile — turning an abstract issue (species decline) into a visible, cumulative consequence of in-game choices.</p>
  </div>

</div>

</section>

<section class="reveal" markdown="1">

## Making the Game

Flamingo Journey is built with React and Vite, and ships as an installable PWA — it can be added to a phone's home screen or a desktop like a native app, and works offline after the first visit.

<div class="wj-pipeline">
  <span>Species &amp; habitat research</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Bilingual content writing</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Game state &amp; screens</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Conservation-choice &amp; check mechanics</span>
  <span class="pathway-arrow" aria-hidden="true">→</span>
  <span>Playable, installable web export</span>
</div>

</section>

<section class="reveal" markdown="1">

## Reflection

Flamingo Journey started from a simple question: what does it take for a factual, conservation-minded game to actually get played? The answer shaped most of the design — no sign-up wall, an offline-capable installable build, and content structured so the same game doubles as a light bilingual-vocabulary exercise.

<p class="section-cta"><a href="{{ '/flamingo-game/' | relative_url }}" target="_blank" rel="noopener">Play Flamingo Journey →</a></p>

</section>
