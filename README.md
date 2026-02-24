<h1><strong>Trybers and Dragons</strong></h1>

<h2><strong>Descrição</strong></h2>
<p align="justify">
  Trybers and Dragons é um projeto de back end focado em POO e SOLID, modelando uma base de RPG (Role Playing Game) inspirada em sistemas como D&D. A aplicação organiza entidades do jogo como personagens, raças, arquétipos e combate por meio de classes e interfaces, buscando um design limpo, extensível e testável.
</p>

<h2><strong>Funcionalidades</strong></h2>
<ul>
  <li align="justify"><strong>Modelagem de domínio de RPG</strong> com classes para compor personagens, raças e arquétipos, aplicando herança, composição e encapsulamento.</li>
  <li align="justify"><strong>Regras e mecânicas de jogo</strong> estruturadas para facilitar evolução, manutenção e adição de novas variações sem quebrar o código existente.</li>
  <li align="justify"><strong>Qualidade e testes</strong> com execução via Jest e padronização com ESLint, priorizando código consistente e previsível.</li>
</ul>

<h2><strong>Demonstração do Projeto</strong></h2>
<p align="center">
  <em> Este é um projeto de back end e não possui deploy público.</em>
  <br>
  <a href="https://github.com/williandpg/trybers-and-dragons" target="_blank" rel="noreferrer"><strong>Ver repositório no GitHub</strong></a>
</p>

<h2><strong>Tecnologias Utilizadas</strong></h2>
<ul>
  <li align="justify">
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><strong>TypeScript</strong></a>:
    linguagem utilizada para tipagem estática, organização do domínio e melhoria de manutenção do código.
  </li>
  <li align="justify">
    <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><strong>Node.js</strong></a>:
    ambiente de execução para rodar a aplicação e scripts de desenvolvimento e testes.
  </li>
  <li align="justify">
    <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><strong>Jest</strong></a>:
    framework de testes automatizados utilizado para validar regras e comportamento da aplicação.
  </li>
  <li align="justify">
    <a href="https://eslint.org/" target="_blank" rel="noreferrer"><strong>ESLint</strong></a>:
    linting e padronização de estilo, garantindo consistência e qualidade do código.
  </li>
  <li align="justify">
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><strong>Docker</strong></a>:
    suporte para execução em ambiente isolado, facilitando setup e padronização do projeto.
  </li>
</ul>

<h2><strong>Estrutura do Projeto</strong></h2>
<p align="justify">A estrutura do projeto é organizada da seguinte forma:</p>
<pre><code>
/
├── src/
│   ├── Archetypes/     # Classes e interfaces de arquétipos (Mago, Guerreiro, etc.)
│   ├── Battle/         # Regras e lógica de combate entre personagens e monstros
│   ├── Fighter/        # Regras e lógica de personagens lutadores
│   ├── Races/          # Classes e interfaces de raças (Elfo, Anão, etc.)
│   ├── Character.ts
│   ├── Energy.ts
│   ├── Monster.ts
│   └── utils.ts
├── package-lock.json               
├── docker-compose.yml  
├── package.json        
├── tsconfig.json       
└── README.md         
</code></pre>

<h2><strong>Contato</strong></h2>
<p>
  <strong>Willian Gonçalves</strong> |
  <a href="https://www.linkedin.com/in/williandpg/" target="_blank" rel="noreferrer"><strong>LinkedIn</strong></a> |
  <a href="https://github.com/williandpg" target="_blank" rel="noreferrer"><strong>Github</strong></a> |
  <a href="https://williandpg.github.io/" target="_blank" rel="noreferrer"><strong>Portfólio</strong></a> |
  <a href="mailto:goncalves.wdp@outlook.com" target="_blank" rel="noreferrer"><strong>Email</strong></a>
</p>

<h2><strong>Créditos</strong></h2>
<p align="justify">
  Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web Full Stack oferecido pela Trybe.
</p>

<details>
  <summary><strong>English Version</strong></summary>

  <h1><strong>Trybers and Dragons</strong></h1>

  <h2><strong>Description</strong></h2>
  <p align="justify">
    Trybers and Dragons is a back end project focused on OOP and SOLID, modeling an RPG (Role Playing Game) foundation inspired by systems like D&D. The application organizes game entities such as characters, races, archetypes, and combat through classes and interfaces,
    aiming for a clean, extensible, and testable design.
  </p>

  <h2><strong>Features</strong></h2>
  <ul>
    <li align="justify"><strong>RPG domain modeling</strong> with classes to compose characters, races, and archetypes using inheritance, composition, and encapsulation.</li>
    <li align="justify"><strong>Game rules and mechanics</strong> structured for easy evolution and maintenance, supporting new variations without breaking existing code.</li>
    <li align="justify"><strong>Quality and testing</strong> with Jest and code standards enforced by ESLint for consistent and reliable development.</li>
  </ul>

  <h2><strong>Project Demonstration</strong></h2>
  <p align="center">
    <em>This is a back end project and does not have a public deploy.</em>
    <br>
    <a href="https://github.com/williandpg/trybers-and-dragons" target="_blank" rel="noreferrer"><strong>View repository on GitHub</strong></a>
  </p>

  <h2><strong>Technologies Used</strong></h2>
  <ul>
    <li align="justify">
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><strong>TypeScript</strong></a>:
      used for static typing, domain organization, and improved maintainability.
    </li>
    <li align="justify">
      <a href="https://nodejs.org/" target="_blank" rel="noreferrer"><strong>Node.js</strong></a>:
      runtime environment to execute the application and its development and testing scripts.
    </li>
    <li align="justify">
      <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><strong>Jest</strong></a>:
      testing framework used to validate rules and behaviors.
    </li>
    <li align="justify">
      <a href="https://eslint.org/" target="_blank" rel="noreferrer"><strong>ESLint</strong></a>:
      linting and style enforcement for consistent code quality.
    </li>
    <li align="justify">
      <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><strong>Docker</strong></a>:
      optional isolated environment to standardize setup and execution.
    </li>
  </ul>

  <h2><strong>Project Structure</strong></h2>
  <p align="justify">The project structure is organized as follows:</p>
  <pre><code>
  /
  ├── src/
  │   ├── Archetypes/     # Classes and interfaces for archetypes (Mage, Warrior, etc.)
  │   ├── Battle/         # Rules and logic for combat between characters and monsters
  │   ├── Fighter/        # Rules and logic for fighter characters
  │   ├── Races/          # Classes and interfaces for races (Elf, Dwarf, etc.)
  │   ├── Character.ts
  │   ├── Energy.ts
  │   ├── Monster.ts
  │   └── utils.ts
  ├── package-lock.json               
  ├── docker-compose.yml  
  ├── package.json        
  ├── tsconfig.json       
  └── README.md         
  </code></pre>

  <h2><strong>Contact</strong></h2>
  <p>
    <strong>Willian Gonçalves</strong> |
    <a href="https://www.linkedin.com/in/williandpg/" target="_blank" rel="noreferrer"><strong>LinkedIn</strong></a> |
    <a href="https://github.com/williandpg" target="_blank" rel="noreferrer"><strong>GitHub</strong></a> |
    <a href="https://williandpg.github.io/" target="_blank" rel="noreferrer"><strong>Portfolio</strong></a> |
    <a href="mailto:goncalves.wdp@outlook.com" target="_blank" rel="noreferrer"><strong>Email</strong></a>
  </p>

  <h2><strong>Credits</strong></h2>
  <p align="justify">
    This project was developed as part of the Full Stack Web Development course offered by Trybe.
  </p>
</details>