
// Dark Mode, Troca de Icone e Botão/Nome entre mobile e pc
  const toggleDesktop = document.getElementById("themeToggle");
  const toggleMobile = document.getElementById("themeToggleMobile");
  const icon = document.getElementById("themeIcon");

  function updateUI() {
    const isDark = document.body.classList.contains("dark-mode");

    // Atualiza ícone desktop
    if (icon) {
      icon.textContent = isDark ? "☀️" : "🌙";
    }

    // Atualiza texto mobile
    if (toggleMobile) {
      toggleMobile.textContent = isDark 
        ? "☀️ Modo Claro" 
        : "🌙 Modo Escuro";
    }
  }

  function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateUI();
  }

  // Carrega estado salvo
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  updateUI();

  if (toggleDesktop) toggleDesktop.addEventListener("click", toggleTheme);
  if (toggleMobile) toggleMobile.addEventListener("click", toggleTheme);

// ========================================================================= //

  // Evita a cor preta ao clicar fora de um botão com menu dropdown
  document.querySelectorAll('.dropdown-toggle').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
    });
  });