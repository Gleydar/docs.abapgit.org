import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c,a as e,b as t,d as n,w as r,e as d}from"./app-35778fa2.js";const h={},p=e("p",null,"abapGit does not have a predefined release cycle. However, we strive to tag a new version once a month (or two).",-1),_=e("h2",{id:"version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#version","aria-hidden":"true"},"#"),t(" Version")],-1),u={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[t("Example release sequence: "),e("code",null,"1.118.0 > 1.119.0 > 1.120.0")],-1),m=e("h2",{id:"changelog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changelog","aria-hidden":"true"},"#"),t(" Changelog")],-1),b=e("p",null,"Reorgs, refactoring, or changes related to testing or repo actions are omitted from the changelog.",-1),f={href:"https://github.com/abapGit/abapGit/commits/main",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"process",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#process","aria-hidden":"true"},"#"),t(" Process")],-1),w=e("p",null,"The following steps need to be taken to create a new abapGit version:",-1),x=e("li",null,[t("Create a new branch name like the new version. For example, "),e("code",null,"v1.121.0"),t(".")],-1),k={href:"https://github.com/abapGit/abapGit/blob/main/src/zif_abapgit_version.intf.abap",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"zif_abapgit_version",-1),y=e("code",null,"c_abap_version",-1),C=e("code",null,"'1.120.0' > '1.121.'",-1),E={href:"https://github.com/abapGit/abapGit/blob/main/changelog.txt",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"changelog.txt",-1),T=e("code",null,"main",-1),V={href:"https://github.com/abapGit/abapGit/compare/v1.123.0...main",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"v1.123.0",-1),N=e("code",null,"main",-1),R=d("<li>Label each change (PR) corresponding to the legend (<code>*</code>: fixed, <code>!</code>: changed, <code>+</code>: added, <code>-</code>: removed).</li><li>Create a new, draft pull request from the new branch.</li><li>Have the changes reviewed by someone else.</li><li>On the release day, update the date in the changelog, and merge the pull request.</li>",4),B=e("p",null,[t("The merge will trigger a GitHub action to automatically tag the new release and perform some downstream tasks (like updating the "),e("code",null,"build"),t(" repository).")],-1);function H(z,A){const a=s("RouterLink"),o=s("ExternalLinkIcon");return l(),c("div",null,[e("p",null,[t("abapGit is continuously developed and updated. The main branch always represents the latest "),n(a,{to:"/user-guide/getting-started/install.html"},{default:r(()=>[t("development version")]),_:1}),t(" and corresponds to the published "),n(a,{to:"/user-guide/getting-started/install.html"},{default:r(()=>[t("standalone version")]),_:1}),t(".")]),p,_,e("p",null,[t("abapGit follows "),e("a",u,[t("semantic version"),n(o)]),t(" format. The community has settled on releasing enhancements and changes as minor versions. A more granular approach to releasing every change as a patch is adding too much overhead.")]),g,m,e("p",null,[t("All additions, changes, fixes, and removals that are relevant to abapGit users are listed in the "),n(a,{to:"/development-guide/read-first/changelog.html"},{default:r(()=>[t("changelog")]),_:1}),t(".")]),b,e("p",null,[t("Since abapGit is enforcing a linear history, you can find all changes in "),e("a",f,[t("commit list"),n(o)]),t(" of the main branch.")]),v,w,e("ol",null,[x,e("li",null,[t("Update "),e("a",k,[G,n(o)]),t(" and increase the minor version of constant "),y,t(" by one. Example: "),C,t(".")]),e("li",null,[t("Update "),e("a",E,[L,n(o)]),t(" and add a section at the top for the new version.")]),e("li",null,[t("Compile a list of the relevant pull requests (see above) based on a comparison between the most recent tag and "),T,t(". For example, "),e("a",V,[q,t(" vs "),N,n(o)]),t(".")]),R]),B])}const P=i(h,[["render",H],["__file","versioning.html.vue"]]);export{P as default};
