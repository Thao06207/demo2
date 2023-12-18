// ĐỌC HÌNH ẢNH NGƯỜI DÙNG
function readImageUser(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#avatar').attr('src', e.target.result);
		};
		reader.readAsDataURL(input.files[0]);
	}
}