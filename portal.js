

  function toggleExercise(exerciseId) {
    var exercise = document.getElementById(exerciseId);
    if (exercise.style.display === "none" || exercise.style.display === "") {
        exercise.style.display = "block";
    } else {
        exercise.style.display = "none";
    }
}


function showImage(imgSrc) {
    // Create image element
    var img = document.createElement('img');
    img.src = imgSrc;

    // Create popup element
    var popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.zIndex = '1';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'rgba(255,255,255,1)';
    popup.style.borderRadius = '5px';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0px 0px 10px 0px rgba(0,0,0,0.5)';

    // Create close button
    var closeButton = document.createElement('div');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.width = '10px';        
    closeButton.style.height = '10px';   
    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.justifyContent = 'center';
    closeButton.style.borderRadius = '50%';
    closeButton.style.fontSize = '16px';     
    closeButton.style.cursor = 'pointer';
    closeButton.innerHTML = 'X';   
    closeButton.style.padding = '5px';
    closeButton.style.cursor ='pointer';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };





    // Append elements to popup and body
    popup.appendChild(closeButton);
    popup.appendChild(img);
    document.body.appendChild(popup);
}