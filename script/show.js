window.onload = () => {
    mainContainerInit();
}

mainContainerInit = () => {    
    const element = document.querySelector('.image-container');
    const matrix = $(element).css('transform').split(',');     
    let angular = -0.1;

    setInterval(()=> {     
        const martixFloat = Number(matrix[1]);
        if (martixFloat === -0.7) {
            angular = -0.1;            
        }
        else if (martixFloat === -0.1) {                  
            angular = +0.1;            
        } 

        matrix[1] = Number(martixFloat - angular).toFixed(1);                

        $(element).css('transform', matrix.join(','));        
        console.log($(element).css('transform'))        
    }, 100)
}