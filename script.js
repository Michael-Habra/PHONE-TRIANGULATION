function main(){
    window.addEventListener('deviceorientation',onOrientationChange)

// CAMERA INPUT FROM THE BACK CAMERA
// permission to access the user camera
// signal which represents the stream of data from the camera

navigator.mediaDevices.getUserMedia({video:{
    facingMode:'environment'
}
})
        .then(function(signal){
            const video=document.getElementById("myVideo");
            video.srcObject=signal;
            video.play()
        })
         .catch(function(err){
            alert("The camera  can not be accessed");
        })

}


function onOrientationChange(event){
// we want to limit the angles where it should be between 0 and 90
// where 0 will a position of the phone and 90 will represnt another position 
   
    let angle=event.beta-90;

    // where we remove the negative angles

    if(angle<0){
        angle=0;
    }

    // assumed distance from  the object
    // myslider is an input from html

    const distance = document.getElementById("mySlider").value;
    document.getElementById("myLabel").innerHTML=
    "Distance to tree: "+ distance +" meters";
    // calculation to get the height

    const height= Math.tan(angle*Math.PI/180)*distance;
    document.getElementById("heightInfo").innerHTML=
         height.toFixed(1) + "m(" +angle.toFixed(1)+"&deg;)";

    console.log(angle);
}