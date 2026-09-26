const PROJECTS = {
  fraude: {
    title: "Agente Detector de Fraudes en Siniestros",
    context: "Aseguradora del Sur · hackIAthon Viamatica · Mayo 2026",
    problem:
      "Las aseguradoras revisan miles de reclamos y el fraude se detecta tarde, casi siempre " +
      "después de haber pagado. Hacía falta priorizar qué siniestros revisar primero y poder " +
      "justificar esa decisión ante un analista humano.",
    solution: [
      "Sistema de IA que analiza cada reclamo y calcula un puntaje de riesgo en cuatro niveles: bajo, medio, alto y crítico.",
      "Combina reglas de negocio explícitas con modelos de Machine Learning, de modo que el criterio del negocio no se pierde dentro del modelo.",
      "Procesamiento de lenguaje natural para medir similitud entre narrativas de siniestros y encontrar relatos sospechosamente parecidos.",
      "Agente explicativo que redacta en lenguaje natural por qué un caso fue marcado como riesgoso."
    ],
    tech: ["Python", "Machine Learning", "NLP", "Reglas de negocio"],
    repo: "https://github.com/danilo323/Aseguradora-Del-Sur",
    demo: null
  },
  ecuatrade: {
    title: "EcuaTrade-System",
    context: "Sistema de inventario y validación de identidad · Abril 2026",
    problem:
      "Un inventario mal validado se corrompe rápido: existencias negativas, precios en cero y " +
      "registros de clientes con cédulas inventadas. El problema no era mostrar datos, era " +
      "impedir que entraran datos inválidos.",
    solution: [
      "Plataforma web integral construida con Django siguiendo el patrón de arquitectura MVT.",
      "Gestión profesional de inventario, productos y control de stock.",
      "Motor de validación de identidad en Python que implementa el algoritmo del décimo dígito (Módulo 10) para verificar cédulas ecuatorianas reales durante el registro.",
      "Validadores personalizados del lado del servidor que rechazan existencias o precios negativos antes de tocar la base de datos."
    ],
    tech: ["Django", "Python", "PostgreSQL", "MVT"],
    repo: "https://github.com/danilo323/EcuaTrade-System",
    demo: null
  },
  schedule: {
    title: "Smart Schedule Optimizer",
    context: "AI-Powered Student Routine Planner · Desarrollador Frontend · Mayo 2025",
    problem:
      "Los estudiantes planifican su semana por intuición y terminan estudiando lo más difícil " +
      "en su peor horario, o descubren choques de agenda cuando ya es tarde.",
    solution: [
      "Optimizador inteligente de horarios entrenado en Google Colab con un Gradient Boosting Classifier (scikit-learn, Pandas y Joblib).",
      "Algoritmo de recomendación que calcula un puntaje según tipo de evento, nivel de prioridad, ventanas óptimas de concentración matutina o vespertina, urgencia por fecha límite y disponibilidad.",
      "Motor de verificación en tiempo real que detecta y resuelve conflictos de agenda de forma proactiva.",
      "Interfaz frontend para capturar actividades académicas y personales y visualizar la rutina sugerida."
    ],
    tech: ["scikit-learn", "Pandas", "Joblib", "JavaScript"],
    repo: "https://github.com/danilo323/AI-powered_routine_planner_system",
    demo: null
  }
};

const SKILLS = {
  html5: {
    title: "HTML5",
    level: "Avanzado",
    levelValue: 90,
    desc: "Domino la arquitectura semántica de la web moderna. Implemento estructuras accesibles y escalables, optimizando el SEO técnico y asegurando que las aplicaciones sean perfectamente interpretadas por cualquier navegador o lector de pantalla."
  },
  css3: {
    title: "CSS3",
    level: "Intermedio-alto",
    levelValue: 80,
    desc: "Diseño interfaces altamente fluidas y responsivas. Domino Flexbox, CSS Grid y el sistema de variables (Custom Properties) para crear sistemas de diseño escalables y mantenibles sin depender ciegamente de frameworks."
  },
  javascript: {
    title: "JavaScript",
    level: "Avanzado",
    levelValue: 85,
    desc: "Escribo lógica de cliente robusta y optimizada con ES6+. Experto en la manipulación dinámica del DOM, gestión de asincronía (Promesas, async/await) y consumo eficiente de APIs para crear experiencias de usuario impecables."
  },
  react: {
    title: "React",
    level: "Intermedio-alto",
    levelValue: 75,
    desc: "Construyo Single Page Applications veloces y modulares. Desarrollo componentes reutilizables, gestiono ciclos de vida complejos mediante Hooks y centralizo el estado de la aplicación para arquitecturas frontend robustas."
  },
  typescript: {
    title: "TypeScript",
    level: "Intermedio",
    levelValue: 70,
    desc: "Blindo las aplicaciones JavaScript mediante tipado estático estricto. Diseño interfaces e implemento arquitecturas de datos sólidas que eliminan errores en tiempo de ejecución y potencian la escalabilidad del código en equipos."
  },
  python: {
    title: "Python",
    level: "Avanzado",
    levelValue: 88,
    desc: "Mi principal arma para ingeniería backend y ciencia de datos. Desarrollo scripts de alto rendimiento, modelos analíticos e implemento lógica de negocio compleja, escribiendo siempre código limpio, modular y 100% Pythonic."
  },
  django: {
    title: "Django",
    level: "Intermedio-alto",
    levelValue: 82,
    desc: "Construyo arquitecturas web seguras y escalables usando el patrón MVT. Optimizo agresivamente consultas al ORM, desarrollo validadores robustos en el backend e implemento sistemas complejos de autenticación y autorización."
  },
  nestjs: {
    title: "NestJS",
    level: "Intermedio",
    levelValue: 65,
    desc: "Desarrollo APIs REST y microservicios escalables para entornos corporativos en Node.js. Aprovecho su arquitectura orientada a módulos y la inyección de dependencias estricta con TypeScript para construir backends resilientes."
  },
  postgresql: {
    title: "PostgreSQL",
    level: "Intermedio-alto",
    levelValue: 78,
    desc: "Diseño bases de datos relacionales sólidas bajo estrictos principios de normalización. Escribo consultas complejas de alto rendimiento y garantizo la integridad absoluta de los datos transaccionales de la aplicación."
  },
  mysql: {
    title: "MySQL",
    level: "Intermedio",
    levelValue: 75,
    desc: "Administro esquemas relacionales ágiles y eficientes. Optimizo motores de almacenamiento, gestiono índices de alta concurrencia y aseguro la estabilidad de la persistencia de datos en aplicaciones web en producción."
  },
  sqlserver: {
    title: "SQL Server",
    level: "Intermedio",
    levelValue: 70,
    desc: "Gestiono ecosistemas de datos empresariales mediante T-SQL avanzado. Implemento lógica transaccional mediante procedimientos almacenados optimizados y aseguro el máximo rendimiento en consultas analíticas pesadas."
  },
  scikitlearn: {
    title: "scikit-learn",
    level: "Intermedio-alto",
    levelValue: 78,
    desc: "Ingeniería de Machine Learning de extremo a extremo. Preparo y vectorizo datos complejos, optimizo hiperparámetros de algoritmos de clasificación/regresión y exporto modelos listos para integrarse en servidores de producción."
  },
  pandas: {
    title: "Pandas",
    level: "Avanzado",
    levelValue: 85,
    desc: "Manipulo masivas cantidades de datos con precisión quirúrgica. Realizo análisis exploratorios complejos, ingeniería de características (feature engineering) y limpiezas exhaustivas para alimentar modelos de inteligencia artificial."
  },
  nlp: {
    title: "NLP aplicado",
    level: "Intermedio",
    levelValue: 70,
    desc: "Desarrollo soluciones impulsadas por Procesamiento de Lenguaje Natural. Mido distancias semánticas, analizo contextos y entreno sistemas capaces de justificar decisiones automáticamente a través de la generación de texto."
  },
  git: {
    title: "Git y GitHub",
    level: "Intermedio-alto",
    levelValue: 80,
    desc: "Domino el control de versiones para integración continua. Gestiono flujos de trabajo profesionales con branches, resuelvo conflictos complejos de merge y aseguro un historial de commits inmaculado para el trabajo en equipo."
  },
  colab: {
    title: "Google Colab",
    level: "Avanzado",
    levelValue: 85,
    desc: "Orquesto entrenamientos de Machine Learning aprovechando poder de cómputo en la nube. Documento los experimentos rigurosamente y estructuro pipelines analíticos altamente reproducibles mediante notebooks interactivos."
  },
  vscode: {
    title: "VS Code",
    level: "Avanzado",
    levelValue: 90,
    desc: "Opero mi entorno de desarrollo a la máxima velocidad. Empleo automatización de formateo, depuradores integrados, y gestión directa del terminal para maximizar la productividad y enfocarme 100% en resolver problemas."
  }
};

function setupTheme() {
  const STORAGE_KEY = "portafolio-tema";
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    icon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (error) {}

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {}
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  function setOpen(isOpen) {
    menu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
  }

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));

  menu.addEventListener("click", (event) => {
    if (event.target.closest(".navbar__link")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.matchMedia("(min-width: 48rem)").addEventListener("change", () => setOpen(false));
}

function setupScrollSpy() {
  const links = document.querySelectorAll('.header .navbar__link[href^="#"]');
  if (links.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  links.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) observer.observe(section);
  });
}

function setupFilter(barId, itemSelector, getTags, onFilter) {
  const bar = document.getElementById(barId);
  const items = document.querySelectorAll(itemSelector);
  if (!bar || items.length === 0) return;

  bar.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    const filter = button.dataset.filter;

    bar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn === button));
    });

    let visibleCount = 0;
    items.forEach((item) => {
      const matches = filter === "all" || getTags(item).includes(filter);
      item.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount++;
    });

    if (onFilter) onFilter(visibleCount);
  });
}

function setupFilters() {
  const emptyMessage = document.getElementById("projects-empty");

  setupFilter(
    "project-filters",
    ".project-card",
    (card) => card.dataset.tech.split(" "),
    (visibleCount) => { emptyMessage.hidden = visibleCount > 0; }
  );

  setupFilter(
    "skill-filters",
    ".skills__group",
    (group) => [group.dataset.skillCategory]
  );
}

function projectTemplate(project) {
  const solutionItems = project.solution.map((item) => `<li>${item}</li>`).join("");
  const techBadges = project.tech
    .map((item) => `<li><span class="badge badge--primary">${item}</span></li>`)
    .join("");

  return `
    <p class="text-muted">${project.context}</p>
    <div class="modal__section">
      <h3 class="modal__section-title">Problema que resuelve</h3>
      <p>${project.problem}</p>
    </div>
    <div class="modal__section">
      <h3 class="modal__section-title">Qué construí</h3>
      <ul>${solutionItems}</ul>
    </div>
    <div class="modal__section">
      <h3 class="modal__section-title">Tecnologías utilizadas</h3>
      <ul class="badge-list">${techBadges}</ul>
    </div>
  `;
}

function projectLinksTemplate(project) {
  let links = "";
  if (project.repo) {
    links += `<a class="btn btn--primary btn--sm" href="${project.repo}" target="_blank" rel="noopener noreferrer">Ver repositorio <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a>`;
  }
  if (project.demo) {
    links += `<a class="btn btn--secondary btn--sm" href="${project.demo}" target="_blank" rel="noopener noreferrer">Ver demo <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i></a>`;
  }
  return links;
}

function skillTemplate(skill) {
  return `
    <p class="modal__level">${skill.level}</p>
    <div class="progress modal__progress">
      <span class="progress__bar" style="width: ${skill.levelValue}%"></span>
    </div>
    <p>${skill.desc}</p>
  `;
}

function setupModal() {
  const modal = document.getElementById("info-modal");
  if (!modal) return;

  const title = document.getElementById("modal-title");
  const body = document.getElementById("modal-body");
  const footer = document.getElementById("modal-footer");
  let lastFocused = null;

  function openModal(trigger, heading, bodyHtml, footerHtml) {
    lastFocused = trigger;
    title.textContent = heading;
    body.innerHTML = bodyHtml;
    footer.innerHTML = footerHtml;
    modal.showModal();
  }

  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-open-project]");
    const skillButton = event.target.closest("[data-open-skill]");

    if (event.target.closest("[data-close-modal]") || event.target === modal) {
      modal.close();
      return;
    }

    if (projectButton) {
      const project = PROJECTS[projectButton.dataset.openProject];
      if (project) openModal(projectButton, project.title, projectTemplate(project), projectLinksTemplate(project));
    }

    if (skillButton) {
      const skill = SKILLS[skillButton.dataset.openSkill];
      const closeButton = '<button class="btn btn--secondary btn--sm" type="button" data-close-modal>Entendido</button>';
      if (skill) openModal(skillButton, skill.title, skillTemplate(skill), closeButton);
    }
  });

  modal.addEventListener("close", () => {
    if (lastFocused) lastFocused.focus();
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const textarea = document.getElementById("mensaje");
  const counter = document.getElementById("contador-mensaje");
  const fields = form.querySelectorAll("input, textarea, select");
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function getError(input) {
    const value = input.value.trim();

    if (value === "") return "Este campo es obligatorio.";
    if (input.id === "nombre" && value.length < 3) return "El nombre debe tener al menos 3 caracteres.";
    if (input.id === "email" && !EMAIL_PATTERN.test(value)) return "Escribe un correo electrónico válido, por ejemplo nombre@dominio.com.";
    if (input.id === "mensaje" && value.length < 15) return "Cuéntame un poco más: mínimo 15 caracteres.";
    return "";
  }

  function validateField(input) {
    const message = getError(input);
    input.closest(".field").classList.toggle("has-error", message !== "");
    input.setAttribute("aria-invalid", String(message !== ""));
    document.getElementById("error-" + input.id).textContent = message;
    return message === "";
  }

  fields.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("has-error")) validateField(input);
    });
  });

  textarea.addEventListener("input", () => {
    counter.textContent = textarea.value.length;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const results = Array.from(fields).map(validateField);
    const isValid = results.every(Boolean);
    const name = document.getElementById("nombre").value.trim();

    status.hidden = false;
    status.dataset.state = isValid ? "success" : "error";
    status.textContent = isValid
      ? `¡Gracias, ${name}! Tu mensaje fue validado correctamente. Te responderé a la brevedad.`
      : "Revisa los campos marcados en rojo antes de enviar.";

    if (!isValid) {
      form.querySelector("[aria-invalid='true']").focus();
      return;
    }

    form.reset();
    counter.textContent = "0";
  });
}

function setupBackToTop() {
  const button = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    button.classList.toggle("is-visible", window.scrollY > 400);
  }, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupCurrentYear() {
  document.getElementById("anio-actual").textContent = new Date().getFullYear();
}

setupTheme();
setupMobileMenu();
setupScrollSpy();
setupFilters();
setupModal();
setupContactForm();
setupBackToTop();
setupRevealAnimations();
setupCurrentYear();
