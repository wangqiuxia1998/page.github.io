
	$(function(){ 
			//表单校验聚焦失焦
			$("#inputSearch").focus(function(){ 
				$(this).addClass("focus").val("");
			})
			//失焦
			$("#inputSearch").blur(function(){
				$(this).removeClass("focus");
				if($(this).val()==""){
					$(this).val("输入名称");
				}else{
					alert($(this).val());
				}
				//键盘提交事件
			}).keydown(function(event){
				if(event.keyCode==13 &&$(this).val()!=""){
					alert($(this).val());
				}
			})
			//替换皮肤
			var colors=["gray","plum","red","blue","green","yellow"]
			
			$("#skin>li").each(function(index,item){
				$(item).click(function(){
					$(this).addClass("selected").siblings().removeClass("selected");
					$("#caption").css("background-color",colors[index]);
					$("#jnCatalog>h2").css("background-color",colors[index]);

					
				})
			})
			//二级菜单
			$(".mainNav>ul>li").each(function(index,item){
				$(item).mouseover(function(){
					$(item).children("div").stop().show();
				})
				$(item).mouseout(function(){
//					$(".jnNa").stop().hide();
					$(item).children("div").hide();
				})
			})
			//切换男鞋女鞋长图轮播
			/*添加去除类*/	
			$("#jnBrandTab>ul>li").click(function(){
//				$(this).attr("class","chos").siblings().remove("class");
				$(this).addClass("chos").siblings().removeClass("chos");
				var index=$(this).index();
				$("#jnBrandList").animate({
					"left":-index*780+"px"
				},1000)//1s内的点击跳转
				
			}).eq(0).trigger("click")
			//模拟点击()上面一句
			//热点
			var hot=$("<del class='hot'></del>");
			$(".promoted").append(hot);
			//jnImageroll定时器透明度0.7
			var index=0;
			var timer=null;
			$("#jnImageroll>div>a").css("opacity","0.7");
			$("#jnImageroll>div>a").mouseover(function(){
				$(this).addClass("chos").css("opacity","1").siblings().
				removeClass("chos").css("opacity","0.7");
			 	index=$(this).index();
				$("#jnImageroll>a>img").eq(index).show().siblings().hide();
			}).eq(0).trigger("mouseover");
			//自动播放封装方法
			function showImg(){
				timer=setInterval(function(){
				index++;
				/*if(index<4){
					index++
				}else{
					index=0
				}*/
				index<4?index++:index=0;
				$("#jnImageroll>div>a").eq(index).trigger("mouseover");
				},2000);
			
			}
			$("#JS_imgWrap").mouseover(function(){
				clearInterval(timer);
			})
			
			$("#JS_imgWrap").mouseout(function(){
				showImg();	
				
			})//么跟上
		//选择状态尺码切换
		$(".pro_size>ul>li").click(function(){
//			alert();
			$(this).addClass("cur").siblings().removeClass("cur");
			var text=$(this).text();//获取修改值
			$(".pro_size>strong").text(text);
		
		})
		//数量
			$("#num_sort").change(function(){
				//获取数量
				console.log($(this).val());
				//获取单价
				var danJia=$(".tbDetailPrice strong").text()
				console.log(danJia);
				//获取总价
				var price=danJia*($(this).val());
				$(".pro_price strong").text(price);
			})
			
			//评分
			$(".pro_rating>ul>li").each(function(index,item){
				$(item).click(function(){
					$(item).addClass("one").siblings().removeClass("one");
					$(item).css("background-color","gold")
				})
			})
			//tab切换
			$(".tab_menu>ul>li").each(function(index,item){
				$(item).mouseover(function(){
				$(this).addClass("chos").siblings().removeClass("chos");
				$(".tab_box div").eq(index).removeClass("hide").siblings().addClass("hide");
			})
			}).eq(0).trigger("mouseover");
	})
		

