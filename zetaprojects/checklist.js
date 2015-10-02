function calculaPorcentagem(x , y){
	var soma = (x / y) * 100;
	var resultadoSoma = parseInt(soma);
	var label = "";

	if(soma >= 75){
		label = "[URGENTE] ";
	}else if(soma >= 55){
		label = "[ATENÇÃO] ";
	}else{
		label = label;
	}

	console.log("");
	console.log("|" + "‾".repeat(100) + "|");
	console.log("|" + "█".repeat(resultadoSoma) + "*".repeat(100 - resultadoSoma) + "|");
	console.log("|" + "_".repeat(100) + "|");

	return label + resultadoSoma + '%';
}



function checklistMetas() {
	var $title 		 		= $("title").html();
	var $titleLenght 		= $title.replace(/ /g,'').length;
	var $descriptionLenght  = $("[name='description']").attr("content").replace(/ /g,'').length;

	console.log("Metas:");

	console.log("  favicon:                  " + window.location.origin + $("[rel='shortcut icon']").attr("href"));
	console.log("  viewport:                 " + $("[name='viewport']").attr("content"));
	console.log("  http-equiv:               " + $("[http-equiv]").attr("content"));
	console.log("  google-site-verification: " + $("[name='google-site-verification']").attr("content"));

	console.log("  title:                    " + $title + " " + "[Tamanho: " +  $titleLenght + "/10~70 caracteres ]");
	console.log("  description:              " + $("[name='description']").attr("content") + " " + "[Tamanho: " +  $descriptionLenght + "/70~160 caracteres ]");

	console.log(" ");

	console.log("  Open Graph / Facebook");
	console.log("    og:prefix:              " + $("html").attr("prefix"));
	console.log("    og:title:               " + $("[property='og:title']").attr("content"));
	console.log("    og:type:                " + $("[property='og:type']").attr("content"));
	console.log("    og:url:                 " + $("[property='og:url']").attr("content"));
	console.log("    og:image:               " + $("[property='og:image']").attr("content"));
	console.log("    og:description:         " + $("[property='og:description']").attr("content"));

	console.log(" ");
}

function checklistCss() {
	var $index = 0;

	console.log("CSS's:");

	$("link[rel=stylesheet]").each(function (i) {
			var href = $(this).attr("href");

			if (href.substring(0, 4) != "http") {
				href = window.location.origin + href;
			} else {
				href = href;
			}

			console.log("  " + (i + 1) + ") " + href);

			$index++;
	});

	console.log(calculaPorcentagem($index , 10) + " de uso da cota máxima permitida para CSS!");
	console.log(" ");
}

function checklistLinks() {
	var $index     = 0;
	var $undefined = 0;

	console.log("Links:");

	$("a").each(function (i) {
		var $text  = $(this).text();
		var $url   = $(this).attr("href");
		var $id    = $(this).attr("id");
		var $title = $(this).attr("title");

		if ($url.substring(0, 4) != "http") {
			$url = window.location.origin + $url;
		} else {
			$url = $url;
		}

		if ($text === "" || $text === undefined) {
			$text = "[sem texto]";
		} else {
			$text = $text.trim();
		}

		if ($id) {
			$id = "   [id = " + $id + "]";
		} else {
			$id = "";
		}

		console.log("  " + (i + 1) + ") " + $text + " " + $url + " [title: " + $title + "]" + $id);

		if( $title === undefined){
			$undefined++;
		}

		$index++;
	});

	console.log(calculaPorcentagem($undefined , $index) + " dos links estão sem [title]");
	console.log(" ");
}

function checklistButtons() {
	console.log("Buttons:");

	$("button").each(function (index) {
		console.log("  " + (index + 1) + ") " + $(this).text());
	});

	console.log(" ");
}

function checklistImgs() {
	var $index     = 0;
	var $undefined = 0;

	console.log("Img's:");

	$("img").each(function (index) {
		var $src = window.location.origin + $(this).attr("src");
		var $alt = $(this).attr("alt");

		if ($alt === "" || $alt === undefined) {
			$alt = "[sem alt]";
			$undefined++;
		} else {
			$alt = "[alt = " + $alt + "]";
		}

		console.log("  " + (index + 1) + ") " + $src + ": " + $alt);

		$index++;
	});

	console.log(calculaPorcentagem($undefined , $index) + " das images estão sem [alt]");
	console.log(" ");
}

function checklistScripts() {
	console.log("Scripts:");

	$("script").each(function (index) {
		console.log("  " + (index + 1) + ") " + $(this).attr("src"));
	});

	console.log(" ");
}

/***/

checklistMetas();
checklistCss();
checklistLinks();
checklistButtons();
checklistImgs();
checklistScripts();