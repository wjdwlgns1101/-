function add(){
	if(frm.Empno.value.length == 0){
		alert("사원번호가 입력되지 않았습니다.");
		frm.Empno.foucs();
		return false;
	}
	else{
		alert("찾는중");
		document.frm.submit();
		return true;
	}
}