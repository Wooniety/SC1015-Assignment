(self.webpackChunk_axlair_jupyterlab_vim=self.webpackChunk_axlair_jupyterlab_vim||[]).push([[830],{830:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(767),l=n(346),i=n(598);const a=!!navigator.platform.match(/Mac/i);class c{constructor({commands:e,cm:t,enabled:n,userKeybindings:o}){this._commands=e,this._cm=t,this.enabled=n,this.lastActiveCell=null,this.userKeybindings=null!=o?o:[]}onActiveCellChanged(e,t){this.modifyCell(t)}modifyCell(e){if(!e)return;this.lastActiveCell=e;const t=e.editor;if(this.enabled){t.setOption("keyMap","vim");const n=t.getOption("extraKeys")||{};n.Esc=this._cm.prototype.leaveInsertMode,a||(n["Ctrl-C"]=!1),this._cm.prototype.save=()=>{this._commands.execute("docmanager:save")},t.setOption("extraKeys",n);const o=this._cm.Vim;["normal","visual","insert"].forEach((e=>o.mapclear(e))),this.userKeybindings.forEach((({command:e,keys:t,context:n,mapfn:l,enabled:i})=>{i&&("map"===l?o.map(e,t,n):o.noremap(e,t,n))})),o.defineEx("quit","q",(e=>{this._commands.execute("notebook:enter-command-mode")})),this._cm.Vim.handleKey(t.editor,"<Esc>");const l=(t,n,o,i)=>{const a=n;let c=a.ch;const d=e;switch(null==i?void 0:i.lastMotion){case t.moveByLines:case t.moveByDisplayLines:case t.moveByScroll:case t.moveToColumn:case t.moveToEol:case l:c=i.lastHPos;break;default:i.lastHPos=c}const s=o.repeat+(o.repeatOffset||0);let m=o.forward?a.line+s:a.line-s;const r=t.firstLine(),u=t.lastLine(),C=t.findPosV(a,o.forward?s:-s,"line",i.lastHSPos);if((o.forward?C.line>m:C.line<m)&&(m=C.line,c=C.ch),!(m<r||m>u))return o.toFirstChar&&(c=function(e){if(!e)return 0;const t=e.search(/\S/);return-1===t?e.length:t}(t.getLine(m)),i.lastHPos=c),i.lastHSPos=t.charCoords(this._cm.Pos(m,c),"div").left,this._cm.Pos(m,c);if(null!==d&&"markdown"===d.model.type&&(o.handleArrow||(d.rendered=!0)),o.forward)if(o.handleArrow){const e=t.getCursor(),n=t.doc.getLine(u).length;e.line===u&&e.ch===n||(t.setCursor({line:u,ch:n}),this._commands.execute("notebook:move-cursor-down"))}else this._commands.execute("notebook:move-cursor-down");else if(o.handleArrow){const e=t.getCursor();0===e.line&&0===e.ch||(t.setCursor({line:0,ch:0}),this._commands.execute("notebook:move-cursor-up"))}else this._commands.execute("notebook:move-cursor-up")};o.defineMotion("moveByLinesOrCell",l),o.mapCommand("<Up>","motion","moveByLinesOrCell",{forward:!1,linewise:!0,handleArrow:!0},{context:"normal"}),o.mapCommand("<Down>","motion","moveByLinesOrCell",{forward:!0,linewise:!0,handleArrow:!0},{context:"normal"}),o.mapCommand("k","motion","moveByLinesOrCell",{forward:!1,linewise:!0},{context:"normal"}),o.mapCommand("j","motion","moveByLinesOrCell",{forward:!0,linewise:!0},{context:"normal"}),o.defineAction("moveCellDown",((e,t)=>{this._commands.execute("notebook:move-cell-down")})),o.defineAction("moveCellUp",((e,t)=>{this._commands.execute("notebook:move-cell-up")})),o.mapCommand("<C-e>","action","moveCellDown",{},{extra:"normal"}),o.mapCommand("<C-y>","action","moveCellUp",{},{extra:"normal"}),o.defineAction("splitCell",((e,t)=>{this._commands.execute("notebook:split-cell-at-cursor")})),o.mapCommand("-","action","splitCell",{},{extra:"normal"})}else"vim"===t.getOption("keyMap")&&t.setOption("keyMap","default")}}var d=n(520);const s="@axlair/jupyterlab_vim",m="jupyterlab-vim:toggle";let r=!1;const u={id:s,autoStart:!0,activate:async function(e,t,n,l){e.commands.addCommand(m,{label:"Enable Notebook Vim mode",execute:()=>{l&&l.set(`${s}:plugin`,"enabled",!r)},isToggled:()=>r});const i=(await l.get(`${s}:plugin`,"extraKeybindings")).composite,a=n.CodeMirror;let u=null,C=null,v=!1;async function b(o){const i=(await l.get(`${s}:plugin`,"extraKeybindings")).composite;r=!0===o.get("enabled").composite,e.commands.notifyCommandChanged(m),u&&(u.enabled=r,u.userKeybindings=i),r?(null==C||C.dispose(),v||(v=!0,await e.restored,await n.ensureVimKeymap())):C=e.commands.addKeyBinding({command:"notebook:enter-command-mode",keys:["Escape"],selector:".jp-Notebook.jp-mod-editMode"}),t.forEach((e=>{e.node.dataset.jpVimMode=`${r}`})),null==u||u.modifyCell(u.lastActiveCell),t.widgetAdded.connect(((e,t)=>{t.node.dataset.jpVimMode=`${r}`}))}return u=new c({commands:e.commands,cm:a,enabled:r,userKeybindings:i}),t.activeCellChanged.connect(u.onActiveCellChanged,u),function(e,t,n){const{commands:l,shell:i}=e;function a(e){const n=t.currentWidget;return!1!==e.activate&&n&&i.activateById(n.id),n}function c(){return null!==t.currentWidget&&t.currentWidget===e.shell.currentWidget}l.addCommand("vim:run-select-next-edit",{label:"Run Cell and Edit Next Cell",execute:e=>{const t=a(e);if(t){const{context:e,content:n}=t;o.NotebookActions.runAndAdvance(n,e.sessionContext),t.content.mode="edit"}},isEnabled:c}),l.addCommand("vim:run-cell-and-edit",{label:"Run Cell and Edit Cell",execute:e=>{const t=a(e);if(t){const{context:e,content:n}=t;o.NotebookActions.run(n,e.sessionContext),t.content.mode="edit"}},isEnabled:c}),l.addCommand("vim:cut-cell-and-edit",{label:"Cut Cell(s) and Edit Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;o.NotebookActions.cut(e),e.mode="edit"}},isEnabled:c}),l.addCommand("vim:copy-cell-and-edit",{label:"Copy Cell(s) and Edit Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;o.NotebookActions.copy(e),e.mode="edit"}},isEnabled:c}),l.addCommand("vim:paste-cell-and-edit",{label:"Paste Cell(s) and Edit Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;o.NotebookActions.paste(e,"below"),e.mode="edit"}},isEnabled:c}),l.addCommand("vim:merge-and-edit",{label:"Merge and Edit Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;o.NotebookActions.mergeCells(e),t.content.mode="edit"}},isEnabled:c}),l.addCommand("vim:enter-insert-mode",{label:"Enter Insert Mode",execute:e=>{const t=a(e);if(t){const{content:e}=t;if(null!==e.activeCell){const o=e.activeCell.editor;t.content.mode="edit",n.Vim.handleKey(o.editor,"i")}}},isEnabled:c}),l.addCommand("vim:leave-insert-mode",{label:"Leave Insert Mode",execute:e=>{const t=a(e);if(t){const{content:e}=t;if(null!==e.activeCell){const t=e.activeCell.editor;n.Vim.handleKey(t.editor,"<Esc>")}}},isEnabled:c}),l.addCommand("vim:leave-current-mode",{label:'Move Insert to Normal to Jupyter Command Mode"',execute:e=>{const t=a(e);if(t){const{content:e}=t;if(null!==e.activeCell){const t=e.activeCell.editor;t.editor.state.vim.insertMode||t.editor.state.vim.visualMode?n.Vim.handleKey(t.editor,"<Esc>"):l.execute("notebook:enter-command-mode")}}},isEnabled:c}),l.addCommand("vim:select-below-execute-markdown",{label:"Execute Markdown and Select Cell Below",execute:e=>{const t=a(e);if(t){const{content:e}=t;return null!==e.activeCell&&"markdown"===e.activeCell.model.type&&(t.content.activeCell.rendered=!0),o.NotebookActions.selectBelow(t.content)}},isEnabled:c}),l.addCommand("vim:select-above-execute-markdown",{label:"Execute Markdown and Select Cell Below",execute:e=>{const t=a(e);if(t){const{content:e}=t;return null!==e.activeCell&&"markdown"===e.activeCell.model.type&&(t.content.activeCell.rendered=!0),o.NotebookActions.selectAbove(t.content)}},isEnabled:c}),l.addCommand("vim:select-first-cell",{label:"Select First Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;e.activeCellIndex=0,e.deselectAll(),null!==e.activeCell&&d.ElementExt.scrollIntoViewIfNeeded(e.node,e.activeCell.node)}},isEnabled:c}),l.addCommand("vim:select-last-cell",{label:"Select Last Cell",execute:e=>{const t=a(e);if(t){const{content:e}=t;e.activeCellIndex=t.content.widgets.length-1,e.deselectAll(),null!==e.activeCell&&d.ElementExt.scrollIntoViewIfNeeded(e.node,e.activeCell.node)}},isEnabled:c}),l.addCommand("vim:center-cell",{label:"Center Cell",execute:e=>{const t=a(e);if(t&&null!==t.content.activeCell){const e=t.content.activeCell.inputArea.node.getBoundingClientRect();t.content.scrollToPosition(e.bottom,0)}},isEnabled:c})}(e,t,a),l.load(`${s}:plugin`).then((e=>{b(e),e.changed.connect(b)}),(e=>{console.error(`Could not load settings, so did not active ${s}: ${e}`)})),Promise.resolve()},requires:[o.INotebookTracker,l.ICodeMirror,i.ISettingRegistry]}}}]);