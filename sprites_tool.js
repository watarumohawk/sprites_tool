/*
* 
* License: MIT license 
* This script depends on jQuery
*
*
*/

$(function(){
	// image's default URL
	var img_path = "http://www.pakutaso.com/assets_c/2014/05/PAK86_smonitatocode20140517500-thumb-900x600-4606.jpg";
	// gnav's default size
	var preview_img_width = "680";
	var preview_img_height = "160";

	$(".horizontal_btn").addClass("btn horizontal_btn btn-success");
	$(".vertical_btn").addClass("btn vertical_btn btn-success");
	$(".offset_input").val(0);
	$("#display_path").val(img_path);
	$("#path_input_modal").val(img_path);
	$("#original_img_area").append("<img src='"+ img_path +"' id='overall_original_img'>");
	$("#small_img_area").append("<img src='"+ img_path +"' id='small_overall_original_img'>");

	/* preview */
	$("#gnav .preview_img").css("background", "url("+ img_path +") no-repeat");
	$("#gnav .preview_img").css("width", preview_img_width + "px");
	$("#gnav .preview_img").css("height", preview_img_height + "px");
	// default values
	$("#preview_width").val(preview_img_width);
	$("#preview_height").val(preview_img_height);
	// Width Height H-offset V-offset 
	show_css_result("preview_width", "preview_height", "horizontal_offset", "vertical_offset");
	// output from storage
	get_json_data();
	change_img();
	change_preview_size();
	trans_val();
	$("#path_input_modal").val( $("#display_path").val() );
	result_to_textarea();

	/* event */
	$(".preview_btn_area").click(function(){
		show_css_result("preview_width", "preview_height", "horizontal_offset", "vertical_offset");
		result_to_textarea();
	});
	$(".horizontal_btn").click(function(){
		sumUp( $(this), "horizontal_offset");
		trans_val();
		result_to_textarea();
	});
	$(".vertical_btn").click(function(){
		sumUp( $(this), "vertical_offset");
		trans_val();
		result_to_textarea();
	});
	$(".offset_input").change(function(){
		trans_val();
		result_to_textarea();
	});
	$("#reset_horizontal_btn").click(function(){
		$("#horizontal_offset").val(0);
		trans_val();
		result_to_textarea();
	});
	$("#reset_vertical_btn").click(function(){
		$("#vertical_offset").val(0);
		trans_val();
		result_to_textarea();
	});
	$("#reset_preview_width_btn").click(function(){
		$("#preview_width").val(preview_img_width);
		change_preview_size();
		result_to_textarea();
	});
	$("#reset_preview_height_btn").click(function(){
		$("#preview_height").val(preview_img_height);
		change_preview_size();
		result_to_textarea();
	});
	$("#myModal").on("shown.bs.modal", function(){
	    $("#path_input_modal").focus();
	});
	$("#path_input_modal").change(function(){
		$("#display_path").val( $(this).val() );
		change_img();
		result_to_textarea();
	});
	$(".preview_input").change(function(){
		change_preview_size();
	});
	$(".preview_width_btn").click(function(){
		sumUp( $(this), "preview_width");
		change_preview_size();
	});
	$(".preview_height_btn").click(function(){
		sumUp( $(this), "preview_height");
		change_preview_size();
	});
	$(".source_textarea").click(function(){
		$(this).select();
	});
	$("#small_img_area").click(function(){
		$("#overall_original_img").toggle();
	});
	$("#original_img_area").click(function(){
		$("#overall_original_img").toggle();
	});
});

function result_to_textarea(){
	var width = $("#horizontal_offset").val() + "px";
	var height = $("#vertical_offset").val() + "px";
	var img_path = $("#display_path").val();
	var default_css = "#gnav .preview_img {display: block; background: url("+ img_path +") no-repeat; background-position: "+width+" "+height+";}";
	var textarea_css_arry = [default_css];
	var preview_img_width = $(".preview_img").css("width");
	var preview_img_height = $(".preview_img").css("height");
	textarea_css_arry.push(".preview_img{width:"+ preview_img_width +"; height:"+ preview_img_height +"}");
	var result_text = "<style>" + "\n" +textarea_css_arry[0] + "\n" + textarea_css_arry[1] + "\n"
						+"</style>"
						+ "\n\n" 
						+ "<div id='gnav' class='img_area gnav_img'>" + "\n" +"<span class='preview_img'></span>"+ "\n" +"</div>";
	$("#html_textarea").val(result_text);
}

function save_json_data(){
	var json_obj = {url: $("#display_path").val(), width: $("#preview_width").val(), height: $("#preview_height").val(), 
						h_offset: $("#horizontal_offset").val(), v_offset: $("#vertical_offset").val() }
	localStorage.setItem("json_data", JSON.stringify(json_obj));
}

function get_json_data(){
	var str = localStorage.getItem("json_data");
	var json_obj = JSON.parse(str);
	$("#display_path").val( json_obj["url"] );
	$("#preview_width").val( json_obj["width"] );
	$("#preview_height").val( json_obj["height"] );
	$("#horizontal_offset").val( json_obj["h_offset"] );
	$("#vertical_offset").val( json_obj["v_offset"] );
}

function change_preview_size(){
	$("#gnav .preview_img").css("width", $("#preview_width").val() + "px");
	$("#gnav .preview_img").css("height", $("#preview_height").val() + "px");
	save_json_data();
}

function change_img(){
	var img_path = $("#display_path").val();
	$("#gnav .preview_img").css("background", "url("+ img_path + ") no-repeat");
	$("#overall_original_img").remove();
	$("#original_img_area").append("<img src='"+ img_path +"' id='overall_original_img' class='overall_original'>");
	$("#small_overall_original_img").remove();
	$("#small_img_area").append("<img src='"+ img_path +"' id='small_overall_original_img'>");
	save_json_data();
	trans_val();
	change_preview_size();
}

function show_css_result(width_id, height_id, h_offset_id, v_offset_id){
	var width = $("#"+ width_id +"").val();
	var height = $("#"+ height_id +"").val();
	var h_offset = $("#"+ h_offset_id +"").val();
	var v_offset = $("#"+ v_offset_id +"").val();
	$("#css_result_val").val("width:"+ width +"; height:"+ height +"; h-offset:"+ h_offset +"; v-offset:"+ v_offset +";");
}

function sumUp(btn, kind){
	var this_val = $("#"+ kind +"").val();
	$("#"+ kind +" input").remove();
	// input = input + clicked button's val
	$("#"+ kind +"").val( parseInt(this_val) + parseInt( $(btn).val() ) );
}

function trans_val(){
	var vertical = $("#vertical_offset").val();
	var horizon = $("#horizontal_offset").val();
	var trans_val = (horizon + "px" + " " + vertical + "px");
	$("#gnav .preview_img").css("background-position", trans_val);
	//Width Height H-offset V-offset 
	show_css_result("preview_width", "preview_height", "horizontal_offset", "vertical_offset");
	save_json_data();
}