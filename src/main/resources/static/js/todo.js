/**
 *
 */
$(function() {

	// 完了済みの個数取得・表示
		let doneCount = $("#donetodos").children("tr").length;
		$("done_count").text(doneCount);

})