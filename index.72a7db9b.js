async function e(){try{const e=await fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_QMAtmTQkiGazrxebG23AS3wtLILf4Zqg5dX2f7pphHKbPeLUhSV5yTLIfmU4s3pe"}});if(!e.ok)throw new Error("Failed to fetch breeds");return await e.json()}catch(e){throw new Error(e.message)}}async function t(e){try{const t=await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_QMAtmTQkiGazrxebG23AS3wtLILf4Zqg5dX2f7pphHKbPeLUhSV5yTLIfmU4s3pe"}});if(!t.ok)throw new Error("Failed to fetch cat");return(await t.json())[0]}catch(e){throw new Error(e.message)}}const n=document.querySelector(".breed-select"),a=document.querySelector(".loader"),c=document.querySelector(".error"),r=document.querySelector(".cat-info");!async function(){try{a.classList.remove("hidden");const t=await e();for(const e of t){const t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}}catch(e){c.classList.remove("hidden")}finally{a.classList.add("hidden")}}(),n.addEventListener("change",(async function(e){try{a.classList.remove("hidden");const n=e.target.value,d=await t(n);c.classList.add("hidden"),function(e){r.innerHTML="";const t=document.createElement("img");t.src=e.url,t.alt=e.breeds[0].name,r.appendChild(t);const n=document.createElement("div"),a=document.createElement("h2");a.textContent=e.breeds[0].name,n.appendChild(a);const c=document.createElement("p");c.textContent=e.breeds[0].description,n.appendChild(c);const d=document.createElement("span");d.textContent="Temperament: ",d.style.fontWeight="bold";const o=document.createElement("span");o.textContent=e.breeds[0].temperament,n.appendChild(d),n.appendChild(o),r.appendChild(n)}(d)}catch(e){c.classList.remove("hidden")}finally{a.classList.add("hidden")}}));
//# sourceMappingURL=index.72a7db9b.js.map