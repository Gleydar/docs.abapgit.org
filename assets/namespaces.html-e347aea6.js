import{_ as e,X as a,Y as o,a2 as s}from"./framework-c1ee72d8.js";const t="/img/namespace_example.png",c={},i=s('<p>abapGit supports namespaces. Objects with namespaces can be serialized and deserialized, for example <code>/FOOBAR/REPORT</code> to <code>#foobar#report.prog.abap</code>. The namespace itself is serialized as well, for example <code>/FOOBAR</code> to <code>#foobar#.nspc.xml</code>. This XML-file contains the repair license key for the namespace (but <em>not</em> the developer license key).</p><p>abapGit automatically serializes namespaces and updates existing namespaces when pulling from the repo. If a namespace does not exist in the local system, the namespace can be created by pulling only the namespace object (<code>NSPC</code>). Afterwards, all objects can be pulled as usual.</p><p>Example:</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Alternatively, you can create the namespace upfront as follows:</p><ol><li>Create namespace in transaction <code>SE03</code>, namespace role <code>C</code>, and add the repair license</li><li>Open namespace for modifications in <code>SE03</code></li><li>Create namespaced package (optional)</li><li>Clone/pull as usual</li></ol><p>Objects will appear as repaired in the customer system, compare with git source to determine if the objects are modified.</p>',7),n=[i];function l(p,r){return a(),o("div",null,n)}const m=e(c,[["render",l],["__file","namespaces.html.vue"]]);export{m as default};