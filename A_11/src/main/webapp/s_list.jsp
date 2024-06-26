<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>좌석예약조회</title>
</head>
<body>
<section>
	<form action="s_listAction.jsp" method="get" name="frm">
		<table border="1">
			<tr>
				<td>사원번호를 입력하세요.</td>
				<td><input type="text" name="Empno"></td>
			</tr>
			<tr>
				<td>
					<input type="button" value="좌석예약조회" onclick="add()">
					<input type="button" value="홈으로" onclick="window.location.href='index.jsp'">
				</td>
			</tr>
		
		</table>
	
	
	</form>

</section>
<script type="text/javascript" src="check.js"></script>
</body>
</html>