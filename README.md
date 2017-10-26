# For English version, [see below](#english)

# Initialize

Basis-Code für neue Projekte.

## Benötigte Tools

Initializer baut auf [node](http://nodejs.org), [Grunt](http://gruntjs.com), [Sass](http://sass-lang.com/),  [postCSS](https://github.com/postcss/postcss) und [PHP](http://www.php.net/) auf.

## Nutzung

Installieren Sie node.js und danach Grunt [als globale CLI](https://gruntjs.com/getting-started). Bei installiertem node wechseln Sie im Terminal/ in der Kommandozeile in den Ordner, in dem diese Dateien stecken. Geben Sie `npm install` ein. Alle wichtigen Tools werden nun installiert. Das dauert einen Moment. Die auftretenden Fehlermeldungen können Sie geflissentlich ignorieren.

## Struktur

Auf der obersten Ebene befindet sich der Ordner `site`. In diesem stecken die beiden Ordner `dev` und `styleguide`. Die Arbeit findet im Ordner `dev` statt.

Die Webseiten werden modular erstellt. Jedes einzelne Modul wird im Ordner `dev/inc/modules` angelegt. Hier werden pro Modultyp passende Ordner und wenn nötig Unterordner angelegt. Sie bekommen knappe, englische Namen. In den Ordnern werden einzelne Include-Dateien abgelegt (Dateiendung `inc`). In diesen Dateien findet die eigentliche Arbeit statt.

Immer, wenn es von einem Modul nur eine Ausprägung gibt, bietet es sich an, direkt das HTML zu erstellen und zu verknüpfen. Erst wenn mehrere gleichartige Module entstehen sollen, bieten sich Templates an. Ob und wenn ja, welches Templatesystem Sie benutzen, bleibt Ihnen überlassen. Diese Projekt bietet einen Rahmen an, in dem sich jeder Nutzer möglichst bequem bewegen können soll.

## Eine einfache Include-Datei

```
<div class="test">
  <h1>Überschrift</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, accusamus, dolorem.</p>
</div>
```

## Der Arbeitsprozess

Für die konkrete Arbeit am Projekt benötigen Sie den Watch-Prozess:

Sie sollten sich im Terminal noch auf der obersten Ebene des Projektes befinden. Geben Sie einfach `grunt` ohne weiteren Task-Namen in das Terminal ein. Dies startet den Watch-Prozess, der der am häufigsten genutzte sein dürfte und deshalb als default-Prozess definiert ist.

Mit `grunt html` werden aus den PHP-Dateien des Unterorders `site/dev` HTML-Dateien generiert und diese mit allen notwendigen Assets in den Ordner `site/html` abgelegt. So kann das Projekt auch ohne einen Webserver betrachtet werden.

## Der Styleguide

Idealerweise findet die ständige Kontrolle der eigenen Arbeit nicht im Ordner `site/dev`, sondern im Ordner `site/styleguide` statt. Die eigentlichen Webseiten werden nur am Ende aus den einzelnen Modulen erstellt.

Im Ordner `site/styleguide` werden einzelne themenspezifische Seiten gebildet, auf denen zueinander passende Module gesammelt werden. Dabei werden **im Normalfall** die Original-Includes des Ordners `site/dev` inkludiert. Es darf niemals eine parallele Codehaltung entstehen. Alle Dateien, die in `site/styleguide` erzeugt werden, gelten entweder der Sammlung und Darstellung der in `site/dev` erstellen Module oder drehen sich direkt um den Styleguide als Tool. Nur Übersichten, die nicht direkt Modulen gelten, werden im Ordner `site/styleguide` direkt erstellt. Dazu können Übersichten über Farben, Schriftarten oder SVGs gehören.

Sollten Änderungen am Tool selber vorgenommen werden, hilft der Grunt Task `grunt sg-watch` dabei, die CSS-Änderungen auszugeben.

Der Task `grunt html-sg` erstellt eine HTML-Version des Styleguides im Ordner `site/html-styleguide`.

### Beispiel für eine Übersichtsdatei (`lists.php`\)

```
<?php
  $pagetitle 	= "Listen";

  // path to the includes
  $path = '../dev/inc/modules/lists/';

  // shall there be previewbuttons?
  // configure them in json/standard--preview-buttons.json
  $previewbuttons = true;

  // Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
		"title" => "Nummerierte Liste",
		"include" => "numbered-list-1.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => ""
	);

  // ======  Please don't touch
  $filename = basename(__FILE__, '.php'); // without extension!!!
  $navitem = $filename;
  include 'inc/templates/template-modules-json.inc';
?>
```

In diesen Dateien werden nur wenige Informationen erwartet:

-	Wie soll der Seitentitel lauten (`$pagetitle`)?
- Wo befinden sich die Module (`$path`)?
- Sollen bei den Modulen Buttons angezeigt werden, die das Modul in unterschiedliche Breiten skalieren (`$previewbuttons`)? Hier wird nur `true` oder `false` angegeben.
- Im Array `$moduleList` werden alle für die Darstellung der Module wichtigen Infos gegeben.
  - `$title`: der Titel des Moduls. Dieser wird als Überschrift des Kastens angezeigt, in dem das Modul dargestellt wird.
  - `$include`: der Name der Moduldatei.
  - `$showhtml`: soll der Button zum Aufrufen des Tabs für die HTML-Quellcode-Ansicht gezeigt werden?
  - `$showphp`: soll der Button zum Aufrufen des Tabs für die PHP-Quellcode-Ansicht gezeigt werden?
  - `$showtemplate`: soll der Button zum Aufrufen des Tabs für die Quellcode-Ansicht des Templates (wenn eines genutzt wird) gezeigt werden?
  - `$showinfo`: soll der Button zum Aufrufen des Tabs für die Zusatzinfos gezeigt werden?
  - `$infotext`: der optionale Infotext. Ohne diesen Text wird im Infotext-Tab lediglich der Pfad zur Include-Datei angezeigt.

Das Highlighting des Navigationseintrags erfolgt automatisch. Dafür sind die beiden Variablen `$filename` und `$navitem` gedacht. Hier müssen Sie nichts tun, ebenso bei der Einbindung des Templates. Alle drei Zeilen sollen unangetastet bleiben.


## Skalierungshilfe

Wenn Sie `$previewbuttons` auf `true` gesetzt haben, sollten Sie die Buttons zum Testen unterschiedlicher Breiten der Module konfigurieren. Die eingebundene Variante ist mit ihrer Breitenverteilung nur ein Vorschlag, der einfach geändert werden kann.

Dazu öffnen Sie die Datei `site/styleguide/json/standard--preview-buttons.json`. Der Inhalt ist denkbar simpel aufgebaut, da ich davon ausgehe, dass keine Mediaqueries, sondern unterschiedliche Breiten getestet werden sollen. Die Ergebnisse dieser Tests können in die Suche nach optimalen Mediaqueries einfliessen. Die JSON-Datei ist folgendermassen aufgebaut:

```
[
  {
    "width": "300px"
  },
  {
    "width": "900px"
  },
  {
    "width": "25%"
  },
  {
    "width": "100%"
  }
]
```

Der `width` zugeordnete Wert wird auf den Buttons angezeigt und als neue Breite für den Container des betreffenden Moduls genutzt. Die Anzahl der Einträge in der JSON-Datei schlägt sich direkt in der Menge der anzeigten Buttons nieder.

## Die Navigation

Wenn Sie eine neue Übersichtsseite erstellt haben, müssen Sie diese noch in die Steuerdatei für die Navigationen eintragen. Sie finden sie unter `site/styleguide/json/sg-navigation.json`. Sie ist prinzipiell folgendermassen aufgebaut:

```
[
  {
    "title": "Farben, Schriften, Verläufe",
    "item": "colors-gradients-fonts"
  },
  {
    "title": "Elementübersicht",
    "item": "elements"
  }
]
```

Dem `title` ist der Navigationstext zugewiesen. Unter diesem Begriff oder Begriffssammlung ist die Seite verknüpft. Unter `item` tragen Sie den Namen der Seite ein. Lassen Sie dabei bitte die Dateiendung `.php` weg.


# <a name="#english"></a> Initialize [English Version]

Codebase for new projects.

## Tools required

Initializer is built upon [node](http://nodejs.org), [Grunt](http://gruntjs.com), [Sass](http://sass-lang.com/),  [postCSS](https://github.com/postcss/postcss) and [PHP](http://www.php.net/).

## Usage

Install node.js and Grunt [as a global CLI](https://gruntjs.com/getting-started). After installing node change inside the terminal into the folder with these files. On the outermost level, where `package.json` is located, call `npm install` inside the terminal. All necessary tools will now be installed. This should take one or two minutes. All occuring errors can be ignored.

## Structure

The folder `site` is at the top level. In `site` the two folders `dev` and` styleguide` are inserted. You work takes place in the `dev` folder.

The websites are created as modules. Each module is created in the folder `dev/inc/modules`. Create appropriate subfolders for each module type if necessary. Folders and files should get concise English names. In the folders, individual include files are stored (with the extension `.inc`). Your actual work takes place in these files.

It is up to you if you want to use a template. This styleguide-environment does not require the use of a template engine. This project offers a framework in which every user should be able to move as easily as possible.

## A simple include-file

```
<div class="test">
  <h1>Headline</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, accusamus, dolorem.</p>
</div>
```

## How to develop

For the concrete work on the project, you need the watch process:

You should be in the terminal at the project's top level. Just type `grunt` into the terminal without any additional task names. This starts the watch process, which should be the most frequently used. It therefore is defined as the default process.

With `grunt html` you create HTML-files out of the PHP-files from the folder `site/dev`. All needed assets will be copied to the target folder `site/html`. This allows the project to be viewed without a web server.

## The styleguide

Normally the constant control of your own work does not take place in the folder `site / dev` but in the folder` site / styleguide`. The actual web pages are only created at the end from the individual modules.

In the `site/styleguide` folder, individual topic-specific pages are created, on which matching modules are collected. In this case ** the normal includes ** the original includes of the folder `site/dev` are included. There must never be parallel code keeping. All files created in `site/styleguide` are either the collection and representation of the modules created in` site/dev` or rotate directly around the styleguide as a tool. Only reports that are not directly modules are created directly in the folder `site/styleguide`. This can include color, fonts, or SVGs.

If changes are made to the tool itself, the Grunt Task `grunt sg-watch` helps to output the CSS changes.

The task `grunt html-sg` creates a HTML-version of the styleguide inside the folder `site/html-styleguide`.

### Example for an overview page (`lists.php`\)

```
<?php
  $pagetitle 	= "Listen";

  // path to the includes
  $path = '../dev/inc/modules/lists/';

  // shall there be previewbuttons?
  // configure them in json/standard--preview-buttons.json
  $previewbuttons = true;

  // Add multidimensional array for the page content.
	$moduleList = array();
	$moduleList[] = array(
		"title" => "Nummerierte Liste",
		"include" => "numbered-list-1.inc",
		"showhtml" => true,
		"showphp" => false,
		"showtemplate" => false,
		"showinfotext" => true,
		"infotext" => ""
	);

  // ======  Please don't touch
  $filename = basename(__FILE__, '.php'); // without extension!!!
  $navitem = $filename;
  include 'inc/templates/template-modules-json.inc';
?>
```

Few information is expected in these files:

-	What's the title of the page (`$pagetitle`)?
- What#s the path to the module files (`$path`)?
- Shall there be shown buttons for scaling each module individually (`$previewbuttons`)? Only `true` or `false` are expected.
- The array `$moduleList` assembles all important informations for displaying the modules.
  - `$title`: the title of the module. It will be shown as a headline of the box in which the module is displayed.
  - `$include`: the name of the module-file.
  - `$showhtml`: should the button for showing the HTML-sourcecode be displayed?
  - `$showphp`: should the button for showing the PHP-sourcecode be displayed?
  - `$showtemplate`: should the button for showing the template-sourcecode be displayed? This makes only sense, if a template is used.
  - `$showinfo`: should the button for showing additional infos be displayed?
  - `$infotext`: the optional infotext. Without this text the infotext-tab only shows the path to the include-file.

The hightlighting of the actual page in the navigation works automatically. Therefor the variables `$filename` and `$navitem` are used. Please don't touch these variables and the imported template.


## Scaling the modules

If you have set `$previewbuttons` to `true` you should configure the buttons for testing different widths. The implemented version should only give an idea. You may need totally different widths.

Open the file `site/styleguide/json/standard--preview-buttons.json`. Its content is constructed in a very simply way because I assumed that you wouldn't test mediaqueries. Testing the modules in very different widths can lead to an idea of mediaqueries. The JSON-file is built in this fashion:

```
[
  {
    "width": "300px"
  },
  {
    "width": "900px"
  },
  {
    "width": "25%"
  },
  {
    "width": "100%"
  }
]
```

The content of `width` will be shown on the button and will be the new width, wenn clicking on this button. The amount of entries in the JSON reflects the number of buttons.

## The Navigation

After you created a new overview page for your modules you should add it to the control file for the navigation. You can find it under `site / styleguide / json / sg-navigation.json`. In principle, it is constructed as follows:

```
[
  {
    "title": "Farben, Schriften, Verläufe",
    "item": "colors-gradients-fonts"
  },
  {
    "title": "Elementübersicht",
    "item": "elements"
  }
]
```

The `title` is the text of the navigation item. The `item` is the name of the page without the file extension `.php`.
