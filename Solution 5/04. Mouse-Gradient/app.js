function attachGradientEvents() {
    

    let GradientElement = document.getElementById('gradient');
    let ResultElement = document.getElementById('result');
    
    const gradientMouseMove = (e) => {
        
        let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100); 
        ResultElement.textContent = `${percent}%`;
        
    }
    
    GradientElement.addEventListener('mousemove', gradientMouseMove)


}