const show=(sussybaka)=>{
    let a=document.querySelector(".n1")
    let b=document.querySelector(".n2")
    let c=document.querySelector(".n3")
    let d=document.querySelector(".n4")
    let e=document.querySelector(".n5")

    a.classList.add("d-none")
    b.classList.add("d-none")
    c.classList.add("d-none")
    d.classList.add("d-none")
    e.classList.add("d-none")
    switch (Number(sussybaka)){
        case 1:
            a.classList.remove("d-none")
            break
        case 2:
            b.classList.remove("d-none")
            break
        case 3:
            c.classList.remove("d-none")
            break
        case 4:
            d.classList.remove("d-none")
            break
        case 5:
            e.classList.remove("d-none")
        default:
            console.log("Fortnite")
    }
}
