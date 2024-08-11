# @leorcvargas/algorithms

## About

This repository stores any code related to my studies about algorithms and data structures. It is currently using `bun` for testing and runtime. The folder structure is really flexible and I'm probably going to be moving things around. My idea for this repository is to:

1. Create an example implementation for the algorithm or data structure.
2. Create a unit test to... test it.
3. Maybe in the future I include my markdown notes for each concept present in this repository.

## Folder structure

Really simple:

```
<topic>/
  <concept>.ts
  <concept>.test.ts
```

## Setup

Installing dependencies:

```bash
bun install
```

To run the tests:

```bash
bun test
```

This project was created using `bun init` in bun v1.1.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
