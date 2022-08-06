const e={},t={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};t.form.addEventListener("input",(function(t){e[t.target.name]=t.target.value;const r=JSON.stringify(e);localStorage.setItem("feedback-form-state",r)}));
//# sourceMappingURL=03-feedback.da759e44.js.map
