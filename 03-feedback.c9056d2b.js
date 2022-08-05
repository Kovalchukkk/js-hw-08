const e={};({form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")}).form.addEventListener("input",(function(t){e[t.target.name]=t.target.value;const r=JSON.stringify(e);localStorage.setItem("feedback-form-state",r)}));
//# sourceMappingURL=03-feedback.c9056d2b.js.map
