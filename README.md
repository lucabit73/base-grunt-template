#grunt-base-template
Template di base per lavorare con [Grunt](http://gruntjs.com/) e [Sass](http://sass-lang.com/)

##Installazione
Occorre installare [npm](https://nodejs.org/download/), package manager per javascript, dopodichè da terminale lanciare:
```
npm install
```
Vengono installati tutti i moduli Grunt presenti in `package.json`.

##Workflow
La directory di lavoro è `src`
* javascript:
	* `plugin.js`: jquery plugin
	* `main.js`: script principale
* css:
	* `_base.scss`: definizione variabili e mixin
	* `_application.scss`: regole css principali, saranno poi inserite nel contesto dello stylesheet di html5 Boilerplate

###Versione di lavoro
```
grunt watch
```
I file css e javascript richiesti da `index.html` della cartella di lavoro saranno aggiornati al salvataggio dei file .scss e javascript.
###Build
```
grunt
```
Viene creata una cartella `dist` con i fogli di stile e script concatenati e minificati,  cambiano i riferimenti a queste risorse in `index.html`. Vengono soppressi i messaggi in console.
