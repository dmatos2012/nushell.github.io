import{_ as l,M as a,p as d,q as u,Q as e,t as n,N as t,U as s,a1 as r}from"./framework-344bb0e4.js";const h={},o=r(`<h1 id="denken-in-nushell" tabindex="-1"><a class="header-anchor" href="#denken-in-nushell" aria-hidden="true">#</a> Denken in Nushell</h1><p>Um Nushell besser zu verstehen und das Beste aus ihr herauszuholen, ist dieses Kapitel &quot;Denken in Nushell&quot; zusammengestellt worden. Denken in Nushell und Verstehen ihres zugrundeliegenden Modells, hilft beim Einstieg und auf dem Weg zum Erfolg.</p><p>Was bedeutet denn nun Denken in Nushell? Hier einige Themen, die für neue Benutzer besonders von Interesse sind.</p><h2 id="nushell-ist-nicht-bash" tabindex="-1"><a class="header-anchor" href="#nushell-ist-nicht-bash" aria-hidden="true">#</a> Nushell ist nicht bash</h2><p>Nushell ist sowohl eine Programmiersprache, als auch eine Shell. Deswegen hat sie ihre eigene Art mit Dateien, Verzeichnissen, Webseite und mehr umzugehen. Einiges ist jedoch so modelliert, wie es auch von anderen Shells her bekannt ist. Zum Beispiel Pipelines verbinden zwei Befehle:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | length
</code></pre></div><p>Nushell hat auch andere Fähigkeiten, wie, aufnehmen des exit codes eines zuvor ausgeführten Befehls. Trotz dieser Vorzüge ist Nushell nicht Bash. In einer Bash, oder bei POSIX kompatiblen Shells ganz generell, verwendet man z.B.:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo &quot;hello&quot; &gt; output.txt
</code></pre></div><p>In Nushell is das <code>&gt;</code> ein grösser-als Operator, was eher dem Programmiersprachen Aspekt von Nushell entspricht. Stattdessen wird eine Pipe zu einem Befehl geführt, der die Aufgabe des Speicherns übernimmt:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo &quot;hello&quot; | save output.txt
</code></pre></div><p><strong>Denken in Nushell:</strong> In Nushell werden die Daten durch die Pipeline weitergereicht, bis sie den Benutzer oder einen abschliessenden Befehl erreichen. Nushell verwendet Befehle, die die Arbeit machen. Diese Befehle zu lernen und wann anzuwenden, hilft beim Zusammenstellen vieler verschiedenster Pipelines.</p><h2 id="nushell-wie-eine-compilierte-programmiersprache-verstehen" tabindex="-1"><a class="header-anchor" href="#nushell-wie-eine-compilierte-programmiersprache-verstehen" aria-hidden="true">#</a> Nushell wie eine compilierte Programmiersprache verstehen</h2><p>Ein wichtiger Teil der in Nushell anders ist als in vielen dynamischen Sprachen, ist dass Nushell den Quellcode zuerst komplett interpretiert, bevor er ausgeführt wird. Es gibt kein <code>eval</code> Feature, das es erlauben würde, kontinuierlich neuen Code während der Ausführung hinzu zu fügen. Das heisst alle Befehle, aber auch Dateien müssen bekannte Pfade sein, ähnlich wie bei includes in kompilierten Sprachen wie C++ oder Rust.</p><p>Zum Beispiel macht folgendes in Nushell keinen Sinn und wird einen Fehler erzeugen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>echo &quot;def abc [] { 1 + 2 }&quot; | save output.nu
source &quot;output.nu&quot;
abc
</code></pre></div><p>Der <code>source</code> Befehl will das output Skript ausführen, aber der <code>save</code> Befehl müsste dafür bereits ausgeführt worden sein. Nushell führt den ganzen Block aus, als wäre es eine Datei, anstatt Zeile für Zeile. Da die output.nu erst erstellt werden muss, bevor sie ausgeführt werden kann, können die drei Zeilen nicht im voraus <code>kompiliert</code> werden.</p><p>Ein anderes Problem ist, einen Dateinamen dynamisch erzeugen zu wollen um ihn auszuführen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; source $&quot;($my_path)/common.nu&quot;
</code></pre></div><p>Dies würde voraussetzen, dass Nushell die Eingabe auswerten kann um sie dann auszuführen, jedoch wird diese Information zur Kompilierzeit benötigt.</p><p><strong>Denken in Nushell</strong> Nushell kompiliert also jede Eingabe zuerst, bevor sie ausgewertet wird. Dies erlaubt starke Integration in eine IDE, akurate Fehlermeldungen, einen einfacheren Umgang mit der Sprache für externe Tools und in der Zukunft so originelle Ausgaben wie die Möglichkeit, Nushell Skripte direkt zu binär Dateien zu kompilieren.</p><h2 id="variablen-sind-unveranderbar" tabindex="-1"><a class="header-anchor" href="#variablen-sind-unveranderbar" aria-hidden="true">#</a> Variablen sind unveränderbar</h2><p>Eine andere Überraschung für Benutzer aus anderen Sprachen ist, dass in Nushell Variablen unveränderbar sind. (Einige haben bereits angefangen sie Konstanten zu nennen, um diesem Umstand gerechter zu werden) Es macht sicher Sinn, sich mit der Funktionalen Programmierung auseinander zu setzen, wenn man mit Nushell arbeiten will, da dies am besten funktioniert, wenn man mit unveränderlichen Variablen arbeitet.</p>`,22),c=e("code",null,"each",-1),g=e("code",null,"par-each",-1),m=e("p",null,[n('Nur weil in Nushell die Variablen unveränderbar sind bedeutet jedoch nicht, dass sich nicht verändern kann. Nushell macht starken Gebraucht der "Shadowing" Technik. Shadowing oder "Beschattung" bedeutet, eine neue Variable erstellen, mit dem gleichen Namen einer zuvor deklarierten Variablen. Zum Beispiel wenn eine Variable '),e("code",null,"$x"),n(" in den Gültigkeitsbereich geholt wird, und eine neue "),e("code",null,"$x"),n(" um 1 grösser definiert werden soll:")],-1),p=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`let x = $x + 1
`)])],-1),b=e("p",null,[n("Dieses neue "),e("code",null,"x"),n(" ist sichtbar für allen Code, der nach dieser Zeile folgt. Vorsichtiges Verwenden von Beschattung, kann die Benutzung von Variablen vereinfachen, auch wenn es keine Voraussetzung ist.")],-1),f=e("code",null,"-n",-1),v=e("code",null,"each",-1),k=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | enumerate | each { |it| $"Number ($it.index) is size ($it.item.size)" }
`)])],-1),w=e("code",null,"reduce",-1),z=r(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; [one, two, three, four, five, six] | reduce {|curr, max|
    if ($curr | str length) &gt; ($max | str length) {
        $curr
    } else {
        $max
    }
}
</code></pre></div><p><strong>Denken in Nushell</strong> wer sich veränderbare Variablen gewohnt ist, braucht eine gewisse Zeit, um sich einen mehr Funktionalen Stil anzugewöhnen. Nushell hat einige eingebaute Fähigkeiten um mit diesem Modell umzugehen. Diese zu kennen hilft um Code im Nushell Stil zu schreiben. Dass damit Teile des Codes parallel ausgeführt werden können ist ein toller Mehrwert.</p><h2 id="nushells-umgebung-hat-gultigkeitsbereiche" tabindex="-1"><a class="header-anchor" href="#nushells-umgebung-hat-gultigkeitsbereiche" aria-hidden="true">#</a> Nushells Umgebung hat Gültigkeitsbereiche</h2><p>Nushell verwendet verschiedene Ansätze aus kompilierten Sprachen. Eine dieser Ansätze ist, dass globale veränderliche Zustände vermieden werden sollten. Traditionell haben Shells global veränderbare Variablen verwendet, um die Umgebung zu kontrollieren. Nushell steuert hier in eine andere Richtung.</p><p>In Nushell kontrollieren Blöcke die Umgebung. Änderungen an der Umgebung gelten nur für den Block in der sie stattfinden.</p><p>In der Praxis ist damit präziserer Code möglich, um zum Beispiel mit Unterverzeichnissen zu arbeiten. Wie hier, wenn jedes Sub-Projekt des aktuellen Verzeichnisses erstellt werden soll:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | each { |it|
    cd $it.name
    make
}
</code></pre></div><p>Der <code>cd</code> Befehl wechselt die <code>PWD</code> Umgebungsvariable, was wiederum nur für den aktuellen Block gilt. Jede Iteration startet deshalb wieder im gleichen Start-Verzeichnis.</p>`,8),x=e("code",null,"def-env",-1),_=e("code",null,"load-env",-1),N=e("code",null,"*",-1),B=e("code",null,"def-env",-1),D=e("p",null,[e("strong",null,"Denken in Nushell"),n(" - Das bewährte Verfahren keine globalen veränderlichen Variablen zu benutzen, erweitert sich in Nushell auf die Umgebung. Die eingebauten Hilfs-Befehle helfen dabei, einfacher mit der Umgebung zu arbeiten. Die Vorteile zu nutzen, dass die Umgebung so eingechränkt ist auf Blöcke, kann helfen präzisere Skripte zu schreiben, die mit externen Befehlen arbeiten, ohne globale Umgebungsvariablen benutzen zu müssen.")],-1);function V(S,E){const i=a("RouterLink");return d(),u("div",null,[o,e("p",null,[n("Was ist denn der Grund warum Nushell unveränderliche Variablen verwendet? Zu Beginn der Entwicklung von Nushell wurde entschieden, auf einen Daten fokusierten, funktionalen Stil zu setzen. Erst kürzlich wurde eine Funktionalität zu Nushell hinzugefügt, die den Vorteil dieser frühen Experimente zeigt: Parallelität Beim Wechsel von "),t(i,{to:"/commands/docs/each.html"},{default:s(()=>[c]),_:1}),n(" zu "),t(i,{to:"/commands/docs/par-each.html"},{default:s(()=>[g]),_:1}),n(" in jedem Nushell Skript, ist es nun mögliche jeden Block Code parallel auszuführen. Dies ist möglich, weil Nushells Design stark auf Unveränderbarkeit, Kompositionen und Pipelining.")]),m,p,b,e("p",null,[n("Schleifenzähler sind ein anderes häufiges Muster für veränderliche Variablen und sind in die meisten iterativen Befehle eingebaut. Zum Beispiel kann sowohl jedes Element wie auch dessen Index mit dem "),f,n(" Flag von "),t(i,{to:"/commands/docs/each.html"},{default:s(()=>[v]),_:1}),n(" erreicht werden:")]),k,e("p",null,[n("Mit dem "),t(i,{to:"/commands/docs/reduce.html"},{default:s(()=>[w]),_:1}),n(" kann eine ähnliche Funktionalität erreicht werden wie man es von Variablen in Schleifen kennt. Zum Beispiel, wenn der längste Text in einer Liste von Texten gesucht wird:")]),z,e("p",null,[n("Mit diesen Gültigkeitsbereichen, lassen sich besser vorhersehbare Befehle schreiben, welche einfacher zu lesen sind. Es erleichtert ebenfalls die Fehlersuche. Nushell stellt auch Hilfsbefehle zur Verfügung wie "),t(i,{to:"/commands/docs/def-env.html"},{default:s(()=>[x]),_:1}),n(", "),t(i,{to:"/commands/docs/load-env.html"},{default:s(()=>[_]),_:1}),n("), als einfachen Weg ganze Stapel von Umgebungsupdates durch zu führen.")]),e("p",null,[N,n(" - Es gibt hier eine Ausnahme. "),t(i,{to:"/commands/docs/def-env.html"},{default:s(()=>[B]),_:1}),n(" erlaubt es einem Befehl an der Umgebung teilzuhaben, von der aus er aufgerufen wurde.")]),D])}const P=l(h,[["render",V],["__file","thinking_in_nushell.html.vue"]]);export{P as default};
