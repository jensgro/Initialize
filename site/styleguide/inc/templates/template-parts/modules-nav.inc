<nav id="sg-menu" class="sg-nav-container">
  <div class="sg-menu-close">
    <a href="#sg-menu-link">Navigation schliessen</a>
  </div>
  <ul class="sg-nav">
    <li><a href="index.php">zurück zur Übersicht</a></li>
    <li<?php if ($navitem == "colors"){ echo ' class="active"';} ?>><a href="colors-gradients-fonts.php">Farben, Schriften, Verläufe</a></li>
    <li<?php if ($navitem == "elements"){ echo ' class="active"';} ?>><a href="elements.php">Elementübersicht</a></li>
    <li<?php if ($navitem == "forms"){ echo ' class="active"';} ?>><a href="forms.php">Formulare</a></li>
    <li<?php if ($navitem == "lists"){ echo ' class="active"';} ?>><a href="lists.php">Listen</a></li>
    <li<?php if ($navitem == "navigations"){ echo ' class="active"';} ?>><a href="navigations.php">Navigationen</a></li>
  </ul>

  <div class="sg-menu-close">
    <a href="#sg-menu-link">Navigation schliessen</a>
  </div>
</nav>
