let e=JSON.parse(localStorage.getItem("tasksArr")||"[]"),t=1;const a=new Date,n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],l={id:"",data:"",done:""},c=document.querySelector(".date__day"),d=document.querySelector(".date__month"),o=document.querySelector(".remove_all__btn"),r=document.querySelector(".input__field"),i=document.querySelector(".input__btn"),m=document.querySelector(".state"),u=document.querySelector(".state__btn--all"),_=document.querySelector(".state__btn--done"),v=document.querySelector(".state__btn--remain"),y=document.querySelector(".tasks__container");document.querySelector(".task__remove-btn");const b=()=>{let e=a.getDay()-1,t=a.getDate(),l=a.getMonth();c.innerHTML=`${n[e]}, ${t}`,d.innerHTML=`${s[l]} ☀️`},p=()=>{e=[],localStorage.setItem("tasksArr",JSON.stringify(e)),console.log("REMOVE",e)},L=()=>{document.querySelectorAll(".task").forEach(e=>e.remove())},S=()=>{let t=Object.create(l);t.id=Date.now(),t.data=`${r.value}`,t.done=!1,e.push(t),localStorage.setItem("tasksArr",JSON.stringify(e))},E=(t,a=1)=>{console.log("RENDER",t);let n=t;2===a&&(n=e.filter(e=>e.done)),3===a&&(n=e.filter(e=>!e.done)),n.forEach(t=>{let a=document.createElement("div");a.setAttribute("id",`${t.id}`),a.classList.add("task","flex","items-center","border-b","p-2","py-2");let s=document.createElement("i");s.classList.add("icon","ph-bold","ph-circle","text-xl");let l=document.createElement("p");l.classList.add("task__data","ml-3"),l.innerHTML=`${t.data}`;let c=document.createElement("button");c.classList.add("task__remove-btn","ml-auto");let d=document.createElement("i");d.classList.add("icon","ph-bold","ph-x"),y.appendChild(a),a.append(s),a.append(l),a.append(c),c.append(d),t.done&&(s.classList.add("text-teal-600"),s.classList.remove("ph-bold"),s.classList.add("ph-fill"),l.classList.add("task__data--done")),c.addEventListener("click",()=>{e.splice(e.indexOf(e.find(e=>e.id===t.id)),1),n.splice(n.indexOf(n.find(e=>e.id===t.id)),1),localStorage.setItem("tasksArr",JSON.stringify(e)),console.log("REMOVE ARR",n),console.log("REMOVE TASKS ARR",e),L(),E(n)})})},g=()=>{r.value="",_.classList.remove("state__btn--active"),v.classList.remove("state__btn--active"),u.classList.add("state__btn--active")},k=e=>{let t=e.target.closest("div"),a=e.target.closest(".state__btn");t.children[0].classList.remove("state__btn--active"),t.children[1].classList.remove("state__btn--active"),t.children[2].classList.remove("state__btn--active"),a.classList.add("state__btn--active")},f=t=>{let a=e.find(e=>e.id===+t.id),n=e.indexOf(a);e[n].done=!a.done,localStorage.setItem("tasksArr",JSON.stringify(e))};window.addEventListener("load",()=>{b(),E(e),console.log("LOAD",e)}),o.addEventListener("click",()=>{p(),L()}),i.addEventListener("click",()=>{S(),L(),E(e),g(),console.log("ADD",e)}),m.onclick=function(e){"div"!==e.srcElement.localName&&k(e)},u.addEventListener("click",()=>{L(),t=1,E(e)}),_.addEventListener("click",()=>{L(),E(e,t=2)}),v.addEventListener("click",()=>{L(),E(e,t=3)}),y.onclick=function(a){"i"!==a.srcElement.localName&&"button"!==a.srcElement.localName&&(f(a.target.closest("div")),console.log("UPDATE",e),L(),E(e,t))};
//# sourceMappingURL=index.925a0d81.js.map