const insert = document.querySelector("#insert");
 window.addEventListener("keydown",(e)=>{
    insert.innerHTML=`
    <div>
    <table>
        <tr>
            <td>key</td>
            <td>key code</td>
            <td>coed</td>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
       </table>
    </div>
    
    `
 })