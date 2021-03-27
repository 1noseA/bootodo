/**
 *
 */
$(function() {

	// 更新処理
	$('.todo input').change(function(){
		const todo = $(this).parents('.todo');
		const id = todo.find('input[name="id"]').val();
		const title = todo.find('input[name="title"]').val();
		const time = todo.find('input[name="time"]').val();
		const is_done = todo.find('input[name="flg"]').prop("checked");
		let flg;
		if (is_done == true) {
			flg = 1;
		} else {
			flg = 0;
		}

		const params = {
			id : id,
			title : title,
			time : time,
			flg : flg
		}

		$.post("/update", params);

		// 完了ボタンを押した際の処理
		doneCount = $("done_count").text();

		if ($(this).prop('name') == "flg") {
			// 完了済みの場合
			if (isDone == true) {
				$(tidi).appendTo("#donetodos");
				todo.find('input[name="title"]').css('text-decoration', 'line-through')
				todo.find('input[name="time"]').hide();
				doneCount++;
			} else {
				// 未完了の場合
				$(todo).appendTo("#todos");
				todo.find('input[name="title"]').css('text-decoration', 'none')
				todo.find('input[name="time"]').show()
				doneCount--;
			}

			$("done_cont").text(doneCount);
		}
	})
})