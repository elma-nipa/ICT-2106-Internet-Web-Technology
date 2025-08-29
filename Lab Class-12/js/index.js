function buttonClick1() {
  alert("Hello nipaa");
}

function paraClick() {
  var text = document.getElementById("paraId");
  text.innerHTML = "This is second para";
}

//images

function ImageClick() {
  var text = document.getElementById("imgID"); //getelementbyid r queryselector eki kotha. eki kaaj kore
  text.src = "images/img1.jpg";
}

//hw hoilo slider banano with 2 button . 
// like previous dile ager image e ashbe ar next e dile er porer image e jabe. 
// 3 ta pic thakto

        const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
        let currentIndex = 0;

        function showImage(i) {
            const img = document.getElementById("imgSliderof3");
            img.src = images[i];
        }

        function previousImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1; // loop back to last
            }
            showImage(currentIndex);
        }

        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0; // loop back to first
            }
            showImage(currentIndex);
        }
