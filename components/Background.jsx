
const Background=()=>{ 
    const i=parseInt(Math.random()*(1+4-1)+1)

    document.body.style=`background-image: url(../assets/fortuna-1/fondo${i}.jpg);`
  
}

export default Background;