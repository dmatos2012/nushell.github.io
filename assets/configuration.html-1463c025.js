import{_ as c,M as l,p as d,q as r,Q as e,t as n,N as o,U as i,a1 as s}from"./framework-344bb0e4.js";const h={},u=s('<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="nushell-configuration-with-env-nu-and-config-nu" tabindex="-1"><a class="header-anchor" href="#nushell-configuration-with-env-nu-and-config-nu" aria-hidden="true">#</a> Nushell Configuration with <code>env.nu</code> and <code>config.nu</code></h2><p>Nushell uses a configuration system that loads+runs two Nushell script files at launch time: First, <code>env.nu</code>, then <code>config.nu</code>. Paths to these files can be found by calling <code>echo $nu.env-path</code> and <code>echo $nu.config-path</code>. <code>env.nu</code> is meant to define the environment variables which are then available within <code>config.nu</code>. <code>config.nu</code> can be used to add definitions, aliases, and more to the global namespace.</p>',3),p={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"source /path/to/env.nu",-1),g=e("code",null,"source /path/to/config.nu",-1),_=e("code",null,"env.nu",-1),m=e("code",null,"config.nu",-1),v={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"default env.nu",-1),w={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"default config.nu",-1),T=s(`<p>You can browse the default files for default values of environment variables and a list of all configurable settings.</p><h3 id="configuring-env-config" tabindex="-1"><a class="header-anchor" href="#configuring-env-config" aria-hidden="true">#</a> Configuring <code>$env.config</code></h3><p>Nushell&#39;s main settings are kept in the <code>config</code> environment variable as a record. This record can be created using:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = {
  ...
}
</code></pre></div><p>You can also shadow <code>$env.config</code> and update it:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert &lt;field name&gt; &lt;field value&gt;)
</code></pre></div><p>By convention, this variable is defined in the <code>config.nu</code> file.</p><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> Environment</h3>`,8),N=e("code",null,"let-env",-1),y=e("code",null,"env.nu",-1),k=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>let-env FOO = &#39;BAR&#39;
</code></pre></div><p><em>(Although $env.config is an environment variable, it is still defined by convention inside config.nu.)</em></p><p>These are some important variables to look at for Nushell-specific settings:</p><ul><li><code>LS_COLORS</code>: Sets up colors per file type in ls</li><li><code>PROMPT_COMMAND</code>: Code to execute for setting up the prompt (block or string)</li><li><code>PROMPT_COMMAND_RIGHT</code>: Code to execute for setting up the right prompt (block)</li><li><code>PROMPT_INDICATOR = &quot;〉&quot;</code>: The indicator printed after the prompt (by default &quot;&gt;&quot;-like Unicode symbol)</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;〉 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="configurations-with-built-in-commands" tabindex="-1"><a class="header-anchor" href="#configurations-with-built-in-commands" aria-hidden="true">#</a> Configurations with built-in commands</h3><p>Starting with release v0.64 of Nushell, we have introduced two new commands(<code>config nu</code> and <code>config env</code>) which help you quickly edit nu configurations with your preferred text editor/IDE</p><p>Nushell follows underneath orders to locate the editor:</p><ol><li><code>$config.buffer_editor</code></li><li><code>$env.EDITOR</code></li><li><code>$env.VISUAL</code></li><li>If 1~3 not found, then launch <code>notepad</code> for windows, otherwise run <code>nano</code></li></ol><h3 id="color-config-section" tabindex="-1"><a class="header-anchor" href="#color-config-section" aria-hidden="true">#</a> Color Config section</h3>`,9),P=e("h2",{id:"configuring-nu-as-a-login-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuring-nu-as-a-login-shell","aria-hidden":"true"},"#"),n(" Configuring Nu as a login shell")],-1),A=e("p",null,[n("To use Nu as a login shell, you'll need to configure the "),e("code",null,"$env"),n(" variable. With this, you'll have enough support to run external commands as a login shell.")],-1),I=e("p",null,"You can build the full set of environment variables by running Nu inside of another shell, like Bash. Once you're in Nu, you can run a command like this:",-1),O=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> env | each { |it| echo $"let-env ($it.name) = '($it.raw)'" } | str join (char nl)
`)])],-1),R=e("code",null,"let-env",-1),$=s(`<p>Next, on some distros you&#39;ll also need to ensure Nu is in the /etc/shells list:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>With this, you should be able to <code>chsh</code> and set Nu to be your login shell. After a logout, on your next login you should be greeted with a shiny Nu prompt.</p><h3 id="configuration-with-login-nu" tabindex="-1"><a class="header-anchor" href="#configuration-with-login-nu" aria-hidden="true">#</a> Configuration with <code>login.nu</code></h3><p>If Nushell is used as a login shell, you can use a specific configuration file which is only sourced in this case. Therefore a file with name <code>login.nu</code> has to be in the standard configuration directory.</p><p>The file <code>login.nu</code> is sourced after <code>env.nu</code> and <code>config.nu</code>, so that you can overwrite those configurations if you need.</p><p>There is an environment variable <code>$nu.loginshell-path</code> containing the path to this file.</p><h3 id="macos-keeping-usr-bin-open-as-open" tabindex="-1"><a class="header-anchor" href="#macos-keeping-usr-bin-open-as-open" aria-hidden="true">#</a> macOS: Keeping <code>/usr/bin/open</code> as <code>open</code></h3>`,8),C=e("code",null,"open",-1),H=e("code",null,"open",-1),M=e("code",null,"/usr/bin/open",-1),q=e("code",null,"open",-1),E=e("code",null,"open",-1),L=e("code",null,"config.nu",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`def nuopen [arg, --raw (-r)] { if $raw { open -r $arg } else { open $arg } }
alias open = ^open
`)])],-1),D=e("h2",{id:"path-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#path-configuration","aria-hidden":"true"},"#"),n(" PATH configuration")],-1),V={href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"let-env",-1),Y=e("code",null,"append",-1),W=e("code",null,"env.nu",-1),U=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`let-env PATH = ($env.PATH | split row (char esep) | append '/some/path')
`)])],-1),j=e("code",null,"/some/path",-1),F=e("code",null,"prepend",-1),G=e("code",null,"split row (char esep)",-1),K=e("code",null,"env.nu",-1),Q=e("code",null,"PATH",-1),z=e("code",null,"Path",-1),J=e("code",null,"append",-1),X=e("code",null,"prepend",-1),Z=e("h3",{id:"homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),n(" Homebrew")],-1),ee={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},ne=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# macOS ARM64 (Apple Silicon)
let-env PATH = ($env.PATH | split row (char esep) | prepend '/opt/homebrew/bin')

# Linux
let-env PATH = ($env.PATH | split row (char esep) | prepend '/home/linuxbrew/.linuxbrew/bin')
`)])],-1);function oe(te,ie){const a=l("ExternalLinkIcon"),t=l("RouterLink");return d(),r("div",null,[u,e("p",null,[e("em",null,[n("(You can think of the Nushell config loading sequence as executing two "),e("a",p,[n("REPL"),o(a)]),n(" lines on startup: "),f,n(" and "),g,n(". Therefore, using "),_,n(" for environment and "),m,n(" for other config is just a convention.)")])]),e("p",null,[n("When you launch Nushell without these files set up, Nushell will prompt you to download the "),e("a",v,[b,o(a)]),n(" and "),e("a",w,[x,o(a)]),n(".")]),T,e("p",null,[n("You can set environment variables for the duration of a Nushell session using "),o(t,{to:"/commands/docs/let-env.html"},{default:i(()=>[N]),_:1}),n(" calls inside the "),y,n(" file. For example:")]),k,e("p",null,[n("You can learn more about setting up colors and theming in the "),o(t,{to:"/book/coloring_and_theming.html"},{default:i(()=>[n("associated chapter")]),_:1}),n(".")]),P,A,I,O,e("p",null,[n("This will print out "),o(t,{to:"/commands/docs/let-env.html"},{default:i(()=>[R]),_:1}),n(" lines, one for each environment variable along with its setting.")]),$,e("p",null,[n("Some tools (e.g. Emacs) rely on an "),C,n(" command to open files on Mac. As Nushell has its own "),o(t,{to:"/commands/docs/open.html"},{default:i(()=>[H]),_:1}),n(" command which has different semantics and shadows "),M,n(", these tools will error out when trying to use it. One way to work around this is to define a custom command for Nushell's "),q,n(" and create an alias for the system's "),E,n(" in your "),L,n(" file like this:")]),S,D,e("p",null,[n("In Nushell, "),e("a",V,[n("the PATH environment variable"),o(a)]),n(" (Path on Windows) is a list of paths. To append a new path to it, you can use "),o(t,{to:"/commands/docs/let-env.html"},{default:i(()=>[B]),_:1}),n(" and "),o(t,{to:"/commands/docs/append.html"},{default:i(()=>[Y]),_:1}),n(" in "),W,n(":")]),U,e("p",null,[n("This will append "),j,n(" to the end of PATH; you can also use "),o(t,{to:"/commands/docs/prepend.html"},{default:i(()=>[F]),_:1}),n(" to add entries to the start of PATH.")]),e("p",null,[n("Note the "),G,n(" step. We need to add it because in "),K,n(", the environment variables inherited from the host process are still strings. The conversion step of environment variables to Nushell values happens after reading the config files (see also the "),o(t,{to:"/book/environment.html#environment-variable-conversions"},{default:i(()=>[n("Environment")]),_:1}),n(" section). After that, for example in the Nushell REPL when "),Q,n("/"),z,n(" is a list , you can use "),J,n("/"),X,n(" directly.")]),Z,e("p",null,[e("a",ee,[n("Homebrew"),o(a)]),n(" is a popular package manager that often requires PATH configuration. To add it to your Nushell PATH:")]),ne])}const se=c(h,[["render",oe],["__file","configuration.html.vue"]]);export{se as default};
