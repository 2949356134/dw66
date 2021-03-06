window.onload=function(){
    document.getElementById("id-face").addEventListener("change", function(){       
        onFileChange(this,"face-result","face-empty-result")
    });
    // document.getElementsByClassName("btn")[0].addEventListener("click", function(){       
    //     submit();
    // });
};

/**
 * 选中图片时的处理
 * @param {*} fileObj input file元素
 * @param {*} el //选中后用于显示图片的元素ID
 * @param {*} btnel //未选中图片时显示的按钮区域ID
 */
function onFileChange(fileObj,el,btnel){
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var imgObj = document.getElementById(el);
    imgObj.style.display="block";
    if (fileObj && fileObj.files && fileObj.files[0]) {
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        imgObj.src=dataURL;
    } else {
        dataURL = fileObj.value;
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
}

/**
 * 将图片压缩后返回base64格式的数据
 * @param {*} image img元素
 * @param {*} width 压缩后图片宽度
 * @param {*} height 压缩后图片高度
 * @param {*} qua //图片质量1-100
 */
function compressImageTobase64(image,width,height,qua){
    var quality = qua ? qua / 100 : 0.8;
    var canvas = document.createElement("canvas"),     
        ctx = canvas.getContext('2d');     
    var w = image.naturalWidth,     
        h = image.naturalHeight;   
		  console.log(w);
		  console.log(h);
    canvas.width = width||w;     
    canvas.height = height||h;     
    ctx.drawImage(image, 0, 0, w, h, 0, 0, width||w, height||h);
    var data = canvas.toDataURL("image/jpeg", quality); 
	console.log(data);
    return data;
}
