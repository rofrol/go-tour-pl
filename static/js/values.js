/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Używanie wycieczki',
    'description': '<p>Witaj na wycieczce po <a href="http://golang.org">języku programowania Go</a>. Wycieczka pokrywa większość ważnych cech języka, głównie:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Podstawy',
    'description': '<p>Punkt startowy, naucz się podstaw języka.</p><p>Deklarowanie zmiennych, wywoływanie funkcji oraz wszystkie rzeczy, które potrzebujesz znać, zanim przejdziesz do następnych lekcji.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Metody i interfejsy',
    'description': '<p>Naucz się definiować metody na typach, jak deklarować interfejsy oraz jak złożyć to wszystko razem.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Współbieżność',
    'description': '<p>Go udostępnia cechy współbieżności jako część rdzenia języka.</p><p>Ten moduł przechodzi przez gorutyny i kanały oraz jak one są użyte do implementacji różnych wzorców współbieżności.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'wyłącz',
    'on': 'włącz',
    'syntax': 'Podświetlanie składni',
    'lineno': 'Numery linii',
    'reset': 'Zresetuj slajd',
    'format': 'Sformatuj kod źródłowy',
    'kill': 'Zabij program',
    'run': 'Uruchom',
    'compile': 'Skompiluj i uruchom',
    'more': 'Opcje',
    'toc': 'Spis treści',
    'prev': 'Poprzedni',
    'next': 'Następny',
    'waiting': 'Czekanie na zdalny serwer...',
    'errcomm': 'Błąd komuniacji ze zdalnym serwerem.',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
});
