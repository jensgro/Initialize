<!doctype html>
<html lang="de">
<head>
	<meta charset="utf-8">

	<title><?php if (isset($pagetitle)) {echo $pagetitle;} else { echo "Platzhalter für einen Seitentitel";} ?></title>

	<meta name="description" content="">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script>document.documentElement.className += " js";</script>

	<!-- <link rel="icon" href="favicon.ico"> -->

	<link rel="stylesheet" href="css/styleguide-neu.css" media="screen">
	<link rel="stylesheet" href="css/prism.css">
	<link rel="stylesheet" href="css/css.css">
</head>

<body class="sg-body" <?php if (isset($bodyid)){ echo ' id="'.$bodyid.'"';} ?>>
