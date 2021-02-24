f = ()=>{
    if(window.location.href.match(/item\/([0-9]+)\.html/gi) && window.location.href.match(/item\/([0-9]+)\.html/gi).length == 1){
        // pour ajouter un button dans la page item-detail
		// ex: https://www.aliexpress.com/item/1005001651482363.html
        if(document.getElementById('codikaweb') == null){
            let id = window.location.href.substr(window.location.href.indexOf('/item/')+6,window.location.href.indexOf('.html')-window.location.href.indexOf('/item/')-6);
            let p = document.getElementsByClassName('product-action')[0];
            let span = document.createElement('span');
            p.appendChild(span);
            span.setAttribute('class',"buy-now-wrap");
            span.setAttribute('id',"codikaweb");
            let button = document.createElement('button');
            span.appendChild(button);
            button.setAttribute('class',"next-btn next-large next-btn-success buynow");
            button.setAttribute('type',"button");
            button.setAttribute('style',"color: white;background-color: #03a9f4;border:0px");
            button.innerText="Add to Store";
            button.setAttribute("onclick", `alert('id is: ${id}')`);
        }
    }else{
		// ajouter des buttons dans le reste du site
		// ex: https://www.aliexpress.com/
    let x = document.getElementsByTagName("a");
    let n= x.length;
    let arr = [];
    for(let i=0;i<n;i++){
        if( (x[i].dataset.p4p && x[i].className =="") || x[i].href.indexOf('/item/') != -1)
            arr.push(x[i]);
    }

    Array.prototype.forEach.call(arr, el => {
        console.log(el.lastChild);
        if(el.lastChild.className != "codikaweb") {
            let id = el.href.substr(el.href.indexOf('/item/')+6,el.href.indexOf('.html')-el.href.indexOf('/item/')-6);
            let a=document.createElement("a");
            a.href = id;
            el.appendChild(a);
            a.setAttribute("onclick", `alert('id is: ${id}')`);
            a.setAttribute("href", `javascript:;`);
            let div=document.createElement("button");
            a.appendChild(div);
            div.innerText="Add to Store";
            a.setAttribute("class","codikaweb");
            div.setAttribute("style","padding: 6px 21px;font-size: large;color: white;background-color: #03a9f4;border:0px")
            console.log(el);
        }
    });
    console.log(arr);
}
}


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 5000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
docReady(f);
window.addEventListener("scroll", f);