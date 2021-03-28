$(function(){

	//完了済みの個数取得・表示
	  let doneCount = $('#donetodes').children("tr").length;
	  $('#done_count').text(doneCount);

	//更新処理
	$('.todo input').change(function(){
	    const todo = $(this).parents('.todo');
	    const id = todo.find('input[name="id"]');
	    const title = todo.find('input[name="title"]');
	    const time = todo.find('input[name="time"]');
	    const isDone = todo.find('input[name="flg"]').prop("checked");
	    let flg;
	    if(isDone == true) {
	      flg = 1;
	    }else{
	      flg = 0;
	    }

	    const params = {
	        id : id.val(),
	        title : title.val(),
	        time : time.val(),
	        flg : flg
	    }
	    $.post("/update",params);

	    //完了ボタンを押した際の処理
	    doneCount =  $('#done_count').text();

	    if($(this).prop('name') == "flg"){
	      if(isDone == true){
	        $(todo).appendTo('#donetodes');
	        todo.find('input[name="title"]').css('text-decoration','line-through')
	        todo.find('input[name="time"]').hide();
	        doneCount ++;
	      }else{
	        $(todo).appendTo('#todes');
	        todo.find('input[name="title"]').css('text-decoration','none')
	        todo.find('input[name="time"]').show()
	        doneCount --;
	      }

	      $("#done_count").text(doneCount);
	    }

	})

	//完了済みタスク表示/非表示切り替え
	$('.button_for_show').click(function(){
	    let showState = $('#done_table').css('display');
	    if(showState == "none") {
	        $('#done_table').show();
	        $(this).css({ transform: ' rotate(225deg)','bottom':'-4px' });
	    }else{
	        $('#done_table').hide();
	        $(this).css({ transform: ' rotate(45deg)','bottom':'4px' });
	    }
	})

	//追加処理
	$('#add').click(function() {
	    const params = $('#add_form').serializeArray();
	    $.post("/add",params).done(function(json){
	        const clone = $('#todes tr:first').clone(true);
	        clone.find('input[name="id"]').val(json.id);
	        clone.find('input[name="title"]').val(json.title);
	        clone.find('input[name="time"]').val(json.time);
	        $('#todes').append(clone[0]);
	    })
	})

	// 削除処理
	$('#delete').click(function() {
		$.post("/delete").done(function() {
			$('#donetodes').empty();
			$('#done_count').text(0);
		})
	})
})