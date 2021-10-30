	//按钮被按下获取定位
	function subm() {
		document.getElementById('mak').hidden=false;
		document.getElementById('Address').innerHTML="";
		initcontainer();
    };
	//获取定位回调再调用请求
	function requst(result){
		var url='https://www.luofc.top/gettest/gg';
		// var url='http://localhost:886/gettest/gg';
		var addre=result.formattedAddress;//地址
		var location=result.position.lng+","+result.position.lat;
		var img_data;//图片地址
		var tel=document.getElementById("tel").value
		var img_data=$('#id-face')[0].files[0];
	
	  var formData = new FormData();
	  formData.append("addre",addre);
	  formData.append("tel",tel);
	  formData.append("location",location);
	  //是否添加文件
	  if(img_data!=undefined){
		  formData.append('file',compressImageTobase64(document.getElementById("face-result"),1080,1920,50));  //添加图片信息的参数
	  }else{
		  // url='http://localhost:886/gettest/gg1'
		  url='https://www.luofc.top/gettest/gg1';
	  }
	  
	$.ajax({
	    type:'POST',
	    url:url,
	    async:false,
	    // contentType:"application/x-www-form-urlencoded;",
	    data:formData,
		processData: false, // 告诉jQuery不要去处理发送的数据
		contentType: false, // 告诉jQuery不要去设置Content-Type请求头
	    dataType:'json',
	    success:function(r) {
			if(r.code=="dw200"){
				document.getElementById('tis').innerHTML="已成功发送定位信息";
				//隐藏提交中图片
				document.getElementById('mak').hidden=true;
				window.location.href = "success.html";
			}else if(r.code=="dw400"){
				document.getElementById('tis').innerHTML="发送失败,未成功获取你的定位信息";
			}
			console.log(r.code)
		},
		error:function(r){
		}
	});
	}