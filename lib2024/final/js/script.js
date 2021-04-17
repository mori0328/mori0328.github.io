function showImgLightbox(){
	var targetImgID = this.getAttribute("data-img-id");
	console.log(targetImgID);
	document.querySelector(<#image-gallery-overlay).style.display ="block";
	document.querySelector('.image-slide.active').classList.remove('active');
	document.querySelector("#"+targetImgID).classList.add('active');

}

function hideImgLightBox() {
	document.querySelector('#image-gallery-overlay').style.display ="none";

}