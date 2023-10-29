import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as l,a as e,b as t,d as a,w as d,e as c}from"./app-1e926d2f.js";const h={},p=e("h2",{id:"standalone-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#standalone-version","aria-hidden":"true"},"#"),t(" Standalone Version")],-1),u={href:"https://raw.githubusercontent.com/abapGit/build/main/zabapgit_standalone.prog.abap",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"ZABAPGIT_STANDALONE",-1),f=e("code",null,"ZABAPGIT_FULL",-1),b=c('<h2 id="developer-version" tabindex="-1"><a class="header-anchor" href="#developer-version" aria-hidden="true">#</a> Developer Version</h2><p>If you have installed the abapGit developer version (in a separate package like <code>$ABAPGIT</code>), you can update the code automatically.</p><h3 id="online-project" tabindex="-1"><a class="header-anchor" href="#online-project" aria-hidden="true">#</a> Online project</h3><p>If your system is connected to the Internet, create an online repository for your abapGit package. When you view the repository and updates are available, a &quot;Pull&quot; link will appear in the menu. When you select &quot;Pull&quot;, the system will download and install the latest version of the code.</p><h3 id="offline-project" tabindex="-1"><a class="header-anchor" href="#offline-project" aria-hidden="true">#</a> Offline project</h3>',5),m={href:"https://github.com/abapGit/abapGit/archive/main.zip",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"user-exits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-exits","aria-hidden":"true"},"#"),t(" User Exits")],-1),g=e("ul",null,[e("li",null,[t("abapGit Standalone Version + "),e("code",null,"zabapgit_user_exit")]),e("li",null,[t("abapGit Developer Version + "),e("code",null,"zcl_abapgit_user_exit")])],-1),x=e("h3",{id:"troubleshooting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),t(" Troubleshooting")],-1),y=e("p",null,"Updates to abapGit can on occasion be quite significant and cause issues like inactive objects, diffs, or even dumps. If you run into such issues, please proceed as follows:",-1),G=e("li",null,"Install and activate the latest standalone version (see above).",-1),I=e("li",null,"Run the standalone version to update the abapGit developer version.",-1),k=e("li",null,[t("If the update is not complete, delete any inactive objects or objects with diffs completely (like inactive classes in "),e("code",null,"SE24"),t(").")],-1),w=e("li",null,'Restart the standalone version and perform a new "Pull" or "Import ZIP".',-1),j={href:"https://github.com/abapGit/abapGit/issues",target:"_blank",rel:"noopener noreferrer"};function P(T,A){const o=n("ExternalLinkIcon"),i=n("RouterLink");return s(),l("div",null,[p,e("p",null,[t("To update to the current version, upload the code from "),e("a",u,[t("zabapgit_standalone.prog.abap"),a(o)]),t(" into the "),_,t(" report (formerly "),f,t(") and activate the program.")]),b,e("p",null,[t("If your system is not connected to the Internet, create an offline repository. To update abapGit download the ZIP file from "),e("a",m,[t("https://github.com/abapGit/abapGit/archive/main.zip"),a(o)]),t(', and select "Import ZIP" in your abapGit repository.')]),v,e("p",null,[t("Occasionally, abapGit will add new "),a(i,{to:"/user-guide/reference/exits.html"},{default:d(()=>[t("user exits")]),_:1}),t(". This might cause syntax errors in abapGit since the exit code is embedded as an include. It is therefore recommended to update the following together and run a syntax check of the main programs:")]),g,x,y,e("ol",null,[G,I,k,w,e("li",null,[t("If this does not resolve the problem, open an issue on "),e("a",j,[t("GitHub"),a(o)]),t(".")])])])}const z=r(h,[["render",P],["__file","upgrade.html.vue"]]);export{z as default};