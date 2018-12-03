jQuery(document).ready(function($){
	

	var face=["面黯","面白","面赤","面浮肿","面黄","面色黯","面色无华"];
	
	var chest=["少腹冷","少腹痛","少腹胀","少腹坠胀","腹胀","胸腹胀满",
	"胸闷","胸脘","胸胁痛"];
	
	var tongue=["舌黯","舌齿痕","舌淡","舌淡红","舌干","舌红","舌尖瘀斑",
	"舌绛红","舌瘦","舌瘀点","舌紫","舌紫黯","少苔","苔白","苔白干","苔白厚",
	"苔白厚腻","苔白滑","苔白腻","苔薄","苔薄白","苔薄黄","苔薄腻","苔厚",
	"苔黄","苔黄腻","苔少"];
	
	var pulse=["脉沉","脉沉迟","脉沉滑","脉沉弱","脉沉细","脉沉细迟","脉沉细滑弱",
	"脉沉细弱","脉沉细数","脉滑数","脉缓滑","脉濡缓","脉濡细","脉弱","脉细",
	"脉细迟","脉细尺弱","脉细滑","脉细弱","脉细数","脉细弦","脉细弦弱","脉细弦数",
	"脉弦","脉弦滑","脉弦涩","脉虚数","脉右部弦细","脉右关弦细"];
	
	var others=["闭经","带下白","带下多","带下黄","带下少","带下稀","乏力","纳呆","疲劳",
	"痞闷","烦热","泛恶","肥胖","浮肿","烘热","急躁","健忘","咳","口渴","寐差","偏溏",
	"气喘","气喘而促","乳房萎缩","乳胀","便秘","便溏","便血","头痛","头晕","头重脑胀",
	"心烦","心悸","腰冷重","腰酸","腰痛","腰膝"];
	
	
	console.log(chest.length);
	
	for(var i=0; i<face.length; i++){
		
		if(i>5){
			$("#face").next().children().removeClass('btn-visibility');
			var $target=$("#face").parent().next().children();
			$target.append("<span id='heartcase"+i+"' class='label casename '>"+face[i]+"</span><span> </span>");
		}else{
			$("#face").append("<span id='heartcase"+i+"' class='label casename'>"+face[i]+"</span><span> </span>");
		}
	}

	for(var i=0; i<chest.length; i++){
		
		if(i>5){
			$("#chest").next().children().removeClass('btn-visibility');
			var $target=$("#chest").parent().next().children();
			$target.append("<span id='chestcase"+i+"' class='label casename'>"+chest[i]+"</span><span> </span>");
		}else{
			$("#chest").append("<span id='chestcase"+i+"' class='label casename'>"+chest[i]+"</span><span> </span>");
		}
	}

	for(var i=0; i<tongue.length; i++){
		
		if(i>5){
			$("#tongue").next().children().removeClass('btn-visibility');
			var $target=$("#tongue").parent().next().children();
			$target.append("<span id='tonguecase"+i+"' class='label casename'>"+tongue[i]+"</span><span> </span>");
		}else{
			$("#tongue").append("<span id='tonguecase"+i+"' class='label casename'>"+tongue[i]+"</span><span> </span>");
		}
	}

	for(var i=0; i<pulse.length; i++){
		
		if(i>5){
			$("#pulse").next().children().removeClass('btn-visibility');
			var $target=$("#pulse").parent().next().children();
			$target.append("<span id='pulsecase"+i+"' class='label casename'>"+pulse[i]+"</span><span> </span>");
		}else{
			$("#pulse").append("<span id='pulsecase"+i+"' class='label casename'>"+pulse[i]+"</span><span> </span>");
		}
	}

	for(var i=0; i<others.length; i++){
		
		if(i>5){
			$("#others").next().children().removeClass('btn-visibility');
			var $target=$("#others").parent().next().children();
			$target.append("<span id='otherscase"+i+"' class='label casename'>"+others[i]+"</span><span> </span>");
		}else{
			$("#others").append("<span id='otherscase"+i+"' class='label casename'>"+others[i]+"</span><span> </span>");
		}
	}





	$('.label').on('click',function(e){
		e.preventDefault();
		if($(this).hasClass('label-success')){

			$(this).removeClass('label-success');
			var id=$(this).attr("id");
			$(".added"+id).remove();

		}
		else{
			
			$(this).addClass('label-success');
			var info=$(this).text();
			var id=$(this).attr("id");
			console.log(id);
			$('#casecontent').append("<span class='added"+id+" label label-info'>"+info+"</span><span> </span>");
		}
	});

	$('#confirm').on('click',function(e){
		var labels=$('#casecontent').children('.label');
		//var cases=new Array();
		var cases="";
		for(var i=0;i<labels.length;i++){
			console.log(labels[i].innerHTML);
			//cases.push(labels[i].innerHTML);
			//cases.push($target.val());
			cases=cases+labels[i].innerHTML+",";
		}

		//.val();
		// for(var i=0;i<cases.length;i++){ 
		// 	console.log(cases[i]);
		// }"/Supermedical/search?cases"+cases,
		console.log(cases.length);
		console.log(labels.length);

		cases=encodeURI(cases).replace(/\+/g, '%2B');

		$.ajax({
			type: "GET",
            url: "/Service?cases="+cases,
           	dataType: "json",
            contentType: "application/json",
			success : function(data){
				console.log("back from servlet");
				//console.log(data.result);

				var medical=data.result;
				$('#medical').empty();
				for(var i=0;i<medical.length;i++){
					
					$('#medical').append("<span class='label label-warning'>"+medical[i]+"</span><span> </span>");
				}

			},
            error: function(a, b, c) {
                alert(a + b + c + "!!!");
            }
		});
	});

	$('#clean').on('click',function(e){
		$('#casecontent').empty();
		$('#medical').empty();
		$('.label').removeClass('label-success');
	});
		
});	



