<?php
	$nameis = $_POST['nameis'];
	$roll = $_POST['roll'];
	$year = $_POST['year'];
	$section = $_POST['section'];
	$dept = $_POST['dept'];
	$subname = $_POST['subname'];
	$subcode = $_POST['subcode'];
	$tecname= $_POST['tecname'];
	$rate = $_POST['rate'];
	$ct = $_POST['ct'];
	$tqa= $_POST['tqa'];
	$eqa = $_POST['eqa'];
	$tqb= $_POST['tqb'];
	$eqb = $_POST['eqb'];
	$tqc= $_POST['tqc'];
	$eqc = $_POST['eqc'];
	$itone = $_POST['itone'];
	$ntone=$_POST['ntone'];
	$ittwo= $_POST['ittwo'];
	$nttwo = $_POST['nttwo'];
	$itthree = $_POST['itthree'];
	$ntthree = $_POST['ntthree'];
	$itfour = $_POST['itfour'];
	$ntfour = $_POST['ntfour'];
	$itfive = $_POST['itfive'];
	$ntfive = $_POST['ntfive'];
;
	
	// Database connection
	$conn = new mysqli('localhost','root','', 'thebd');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into thetable(nameis,roll,year,section,dept,subname,subcode,tecname,rate,ct,tqa,eqa,tqb,eqb,tqc,eqc,itone,ntone,ittwo,nttwo,itthree,ntthree,itfour,ntfour,itfive,ntfive) 
		values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
		// $stmt->store_result();
		$stmt->bind_param("siisssssisiiiiiissssssssss", $nameis, $roll, $year, $section, $dept,$subname,$subcode,$tecname,$rate,$ct,$tqa,$eqa,$tqb,$eqb,$tqc,$eqc,$itone,$ntone,$ittwo,$nttwo,$itthree,$ntthree,$itfour,$ntfour,$itfive,$ntfive);
		$execval = $stmt->execute();
		echo $execval;
		echo "your response loaded";
		$stmt->close();
		$conn->close();
	}
?>