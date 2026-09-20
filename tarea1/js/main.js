(function () {
  "use strict";

  

  const STORAGE_KEY = "portafolio-tema";
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) themeIcon.className = theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    if (themeToggle) themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  }

  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (error) {
      }
    });
  }

  

  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!navMenu || !navToggle) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Abrir menú de navegación");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
    });

    navMenu.addEventListener("click", function (event) {
      if (event.target.closest(".navbar__link")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.matchMedia("(min-width: 48rem)").addEventListener("change", closeMenu);
  }

  

  const sectionLinks = Array.from(
    document.querySelectorAll('.navbar__link[href^="#"]')
  );
  const sections = sectionLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if (sections.length > 0) {
    const spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sectionLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  

  const filterBar = document.getElementById("project-filters");
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const emptyMessage = document.getElementById("projects-empty");

  if (filterBar && projectCards.length > 0) {
    filterBar.addEventListener("click", function (event) {
      const button = event.target.closest(".filter-btn");
      if (!button) return;

      const filter = button.dataset.filter;

      filterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn === button));
      });

      let visibles = 0;
      projectCards.forEach(function (card) {
        const techs = (card.dataset.tech || "").split(/\s+/);
        const matches = filter === "all" || techs.indexOf(filter) !== -1;
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibles += 1;
      });

      if (emptyMessage) emptyMessage.hidden = visibles > 0;
    });
  }

  const skillFilterBar = document.getElementById("skill-filters");
  const skillGroups = Array.from(document.querySelectorAll(".skills__group"));

  if (skillFilterBar && skillGroups.length > 0) {
    skillFilterBar.addEventListener("click", function (event) {
      const button = event.target.closest(".filter-btn");
      if (!button) return;

      const filter = button.dataset.filter;

      skillFilterBar.querySelectorAll(".filter-btn").forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn === button));
      });

      skillGroups.forEach(function (group) {
        const category = group.dataset.skillCategory;
        const matches = filter === "all" || category === filter;
        group.classList.toggle("is-hidden", !matches);
      });
    });
  }

  

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
      repo: "https://github.com/danilo323",
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
      repo: "https://github.com/danilo323",
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
      repo: "https://github.com/danilo323",
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


  const modal = document.getElementById("info-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalFooter = document.getElementById("modal-footer");
  const modalClose = document.getElementById("modal-close");
  let lastFocused = null;

  function renderProjectModal(project) {
    modalTitle.textContent = project.title;

    const solutionItems = project.solution
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");

    const techBadges = project.tech
      .map(function (item) {
        return '<li><span class="badge badge--primary">' + item + "</span></li>";
      })
      .join("");

    modalBody.innerHTML =
      '<p class="text-muted">' + project.context + "</p>" +
      '<div class="modal__section">' +
        '<h3 class="modal__section-title">Problema que resuelve</h3>' +
        "<p>" + project.problem + "</p>" +
      "</div>" +
      '<div class="modal__section">' +
        '<h3 class="modal__section-title">Qué construí</h3>' +
        "<ul>" + solutionItems + "</ul>" +
      "</div>" +
      '<div class="modal__section">' +
        '<h3 class="modal__section-title">Tecnologías utilizadas</h3>' +
        '<ul class="badge-list">' + techBadges + "</ul>" +
      "</div>";

    let footer = "";
    if (project.repo) {
      footer +=
        '<a class="btn btn--primary btn--sm" href="' + project.repo +
        '" target="_blank" rel="noopener noreferrer">Ver repositorio <i class="bi bi-box-arrow-up-right"></i></a>';
    }
    if (project.demo) {
      footer +=
        '<a class="btn btn--secondary btn--sm" href="' + project.demo +
        '" target="_blank" rel="noopener noreferrer">Ver demo <i class="bi bi-box-arrow-up-right"></i></a>';
    }
    modalFooter.innerHTML = footer;
  }

  function renderSkillModal(skill) {
    modalTitle.textContent = skill.title;
    
    modalBody.innerHTML = 
      '<p class="skill-card__level" style="margin-bottom: var(--space-xs);">' + skill.level + '</p>' +
      '<div class="progress" style="margin-bottom: var(--space-md);">' +
        '<span class="progress__bar" style="width: ' + skill.levelValue + '%; transition: width 1s ease;"></span>' +
      '</div>' +
      '<p>' + skill.desc + '</p>';
      
    modalFooter.innerHTML = '<button class="btn btn--secondary btn--sm" type="button" data-close-modal>Entendido</button>';
  }

  if (modal && modalBody) {
    document.addEventListener("click", function (event) {
      const btnProject = event.target.closest("[data-open-project]");
      const btnSkill = event.target.closest("[data-open-skill]");
      const btnClose = event.target.closest("[data-close-modal]");
      
      if (btnClose) {
        modal.close();
        return;
      }
      
      if (btnProject) {
        const project = PROJECTS[btnProject.dataset.openProject];
        if (!project) return;
        lastFocused = btnProject;
        renderProjectModal(project);
        modal.showModal();
        return;
      }
      
      if (btnSkill) {
        const skill = SKILLS[btnSkill.dataset.openSkill];
        if (!skill) return;
        lastFocused = btnSkill;
        renderSkillModal(skill);
        modal.showModal();
        return;
      }
    });

    if (modalClose) {
      modalClose.addEventListener("click", function () {
        modal.close();
      });
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) modal.close();
    });

    modal.addEventListener("close", function () {
      if (lastFocused) lastFocused.focus();
    });
  }


  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const textarea = document.getElementById("mensaje");
  const counter = document.getElementById("contador-mensaje");
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function setFieldError(input, message) {
    const field = input.closest(".field");
    const errorBox = document.getElementById("error-" + input.id);
    if (!field || !errorBox) return;

    field.classList.toggle("has-error", Boolean(message));
    errorBox.textContent = message || "";
    input.setAttribute("aria-invalid", String(Boolean(message)));
  }

  function validateField(input) {
    const value = input.value.trim();

    if (input.hasAttribute("required") && value === "") {
      setFieldError(input, "Este campo es obligatorio.");
      return false;
    }

    if (input.id === "nombre" && value.length < 3) {
      setFieldError(input, "El nombre debe tener al menos 3 caracteres.");
      return false;
    }

    if (input.id === "email" && !EMAIL_PATTERN.test(value)) {
      setFieldError(input, "Escribe un correo electrónico válido, por ejemplo nombre@dominio.com.");
      return false;
    }

    if (input.id === "mensaje" && value.length < 15) {
      setFieldError(input, "Cuéntame un poco más: mínimo 15 caracteres.");
      return false;
    }

    setFieldError(input, "");
    return true;
  }

  if (form) {
    const fields = Array.from(form.querySelectorAll("input, textarea, select"));

    fields.forEach(function (input) {
      input.addEventListener("blur", function () {
        validateField(input);
      });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("has-error")) validateField(input);
      });
    });

    if (textarea && counter) {
      textarea.addEventListener("input", function () {
        counter.textContent = String(textarea.value.length);
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const results = fields.map(validateField);
      const isValid = results.every(Boolean);

      if (formStatus) {
        formStatus.hidden = false;
        formStatus.dataset.state = isValid ? "success" : "error";
        formStatus.textContent = isValid
          ? "¡Gracias, " + document.getElementById("nombre").value.trim() +
            "! Tu mensaje fue validado correctamente. Te responderé a la brevedad."
          : "Revisa los campos marcados en rojo antes de enviar.";
      }

      if (!isValid) {
        const firstError = form.querySelector(".field.has-error input, .field.has-error textarea, .field.has-error select");
        if (firstError) firstError.focus();
        return;
      }

      form.reset();
      if (counter) counter.textContent = "0";
    });
  }

  

  const backToTop = document.getElementById("back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  

  const revealables = document.querySelectorAll(".reveal");

  if (revealables.length > 0) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    revealables.forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  const bars = document.querySelectorAll(".progress__bar[data-level]");

  if (bars.length > 0) {
    const barObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.style.width = entry.target.dataset.level + "%";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach(function (bar) {
      barObserver.observe(bar);
    });
  }

  

  const yearSpan = document.getElementById("anio-actual");
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
})();
