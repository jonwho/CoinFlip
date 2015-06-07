function logout() {
	var ref = new Firebase("https://cse134bteam3-hw5.firebaseio.com");
	this.ref.unauth();
	document.location = "../index.html";
}

function loadEmailChangePage() {
	document.location = "../views/change_email.html";
}

function loadTopNav() {
	document.write("    <nav>");
	document.write("        <svg class=\"icon-spinner2\">");
	document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>spinner2<\/title>");
	document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
	document.write("        <\/svg>");
	document.write("        <a href=\"wire2.html\">COINFLIP<\/a>");
	// document.write("        <svg class=\"icon-cog\" onclick=\"navDropDown()\">");
	// document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
	// document.write("                <title>cog<\/title>");
	// document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
	// document.write("            <\/symbol>");
	// document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
	// document.write("        <\/svg>");
	document.write("		<button class=\"btn-logout\" onclick=\"logout()\">Logout<\/button>");
	document.write("		<button class=\"btn-email\" onclick=\"loadEmailChangePage()\">Change Email<\/button>");
	document.write("    <\/nav>");

	// document.write("	<div class=\"modal fade\" id=\"settingsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"settings\" aria-hidden=\"true\">");
	// document.write("		<div class=\"modal-dialog\">");
	// document.write("			<div class=\"modal-content\">");
	// document.write("				<div class=\"modal-header\">");
	// document.write("					<h4 class=\"modal-title\">Settings<\/h4>");
	// document.write("				<\/div>");
	// document.write("				<div class=\"modal-body\">");
	// document.write("					<h1>WHAT UP<\/h1>");
	// document.write("				<\/div>");
	// document.write("				<div class=\"modal-footer\">");
	// document.write("					<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close<\/button>");
	// document.write("					<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save changes<\/button>");
	// document.write("				<\/div>");
	// document.write("			<\/div>");
	// document.write("		<\/div>");
	// document.write("	<\/div>");
}

function loadTopNavPersist() {
	document.write("    <nav style='display: block; visibility: visible;'>");
	document.write("        <svg class=\"icon-spinner2\">");
	document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
	document.write("                <title>spinner2<\/title>");
	document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
	document.write("            <\/symbol>");
	document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
	document.write("        <\/svg>");
	document.write("        <a href=\"wire2.html\">COINFLIP<\/a>");
	// document.write("        <svg class=\"icon-cog\">");
	// document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
	// document.write("                <title>cog<\/title>");
	// document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
	// document.write("            <\/symbol>");
	// document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
	// document.write("        <\/svg>");
	document.write("		<button class=\"btn-logout\" onclick=\"logout()\">Logout<\/button>");
	document.write("		<button class=\"btn-email\" onclick=\"loadEmailChangePage()\">Change Email<\/button>");
	document.write("    <\/nav>");
}

function loadSideNav(selected) {
	document.write("    <aside>");
	document.write("        <a href=\"wire2.html\">");
	if (selected == 0)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            <br\/>");
	document.write("              <svg class=\"icon-home2\">");
	document.write("                    <symbol id=\"icon-home2\" viewBox=\"0 0 1024 1024\">");
	document.write("                        <title>home2<\/title>");
	document.write("                        <path class=\"path1\" d=\"M426.667 853.333v-256h170.667v256h213.333v-341.333h128l-426.667-384-426.667 384h128v341.333z\"><\/path>");
	document.write("                    <\/symbol>");
	document.write("                    <use xlink:href=\"#icon-home2\"><\/use>");
	document.write("                <\/svg>");
	document.write("");
	document.write("            <figcaption>Home<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3_g.html\">");
	if (selected == 1)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Au");
	document.write("            <figcaption>My Gold<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3_s.html\">");
	if (selected == 2)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Ag");
	document.write("            <figcaption>My Silver<\/figcaption>");
	document.write("        <\/figure>       ");
	document.write("        <\/a> ");
	document.write("        <a href=\"wire3_p.html\">");
	if (selected == 3)
		document.write("        <figure class='nav-selected'>");
	else
		document.write("        <figure>");
	document.write("            Pt");
	document.write("            <figcaption>My Platinum<\/figcaption>");
	document.write("        <\/figure>");
	document.write("        <\/a> ");
	document.write("    <\/aside>");
}

function loadFooter() {
	document.write("    <footer>");
	document.write("        &copy; 2015 CoinFlip");
	document.write("    <\/footer> ");

}



/**************************************
 * loadForm(data, metal) :
 *
 * Use JS to populate form to accomodate two types of forms with
 * similar structure. Use string for easy appending.
 *  - data: existing data to use as default
 *  - metal: metal type influences defaults
 */	
function loadForm(data, metal, type, values) {
	var strVar = "";
	if(type == ""){
		type = 'coin';
	}
	var childName = metal + ((type == 'coin') ? 'Coins' : 'Bullions');
		
	strVar += "<tr>";
	strVar += "    <td>Metal<\/td>";
	strVar += "    <td>";
	if(data){
		strVar += "		<input id=\"fbm\" readonly=\"readonly\" name=\"quantity\" value=\"" + metal + "\">";
	} else {
		strVar += "        <select id=\"fbm\">";

		strVar += "            <option value=\"gold\"" + ((metal == 'gold')? "selected=\"selected\"" : "") + ">Gold<\/option>";
		strVar += "            <option value=\"silver\"" + ((metal == 'silver')? "selected=\"selected\"" : "") + ">Silver<\/option>";
		strVar += "            <option value=\"platinum\"" + ((metal == 'platinum')? "selected=\"selected\"" : "") + ">Platinum<\/option>";

		strVar += "        <\/select>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Type<\/td>";
	strVar += "    <td>";
	if(data){
		strVar += "		<input id=\"fbt\" readonly=\"readonly\" name=\"quantity\" value=\"" + type + "\">";
	} else {
		strVar += "			<select id =\"fbt\">";
		if(type == 'coin'){
			strVar += "            <option value=\"coin\" selected=\"selected\">Coin<\/option>";
			strVar += "            <option value=\"bullion\">Bullion<\/option>";
		}
		if(type == 'bullion'){
			strVar += "            <option value=\"coin\" >Coin<\/option>";
			strVar += "            <option value=\"bullion\" selected=\"selected\">Bullion<\/option>";
		}
		strVar += "        <\/select>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Name<\/td>";
	strVar += "    <td>";
	if(data){
		strVar += "		<input id=\"fbn\" readonly=\"readonly\" name=\"quantity\" value=\"" + data['name'] + "\">";
	} else {
		strVar += "			<select id=\"fbn\" >";
		for(value in values){
			strVar += "				<option value=\"" + values[value].name + "\"" + ((data['name'] == values[value].name) ? "selected=\"selected\"" : "") + ">" + values[value].name + "<\/option>"; 
		}
		strVar += "			<\/select>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Purchase Date<\/td>";
	strVar += "    <td>";
	if (data) {
		strVar += "        <input id=\"fbpd\" readonly=\"readonly\" name=\"quantity\" value=\"" + data['pdate'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbpd\" readonly=\"readonly\" name=\"quantity\" placeholder=\"yyyy-mm-dd\" \/>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Qty.<\/td>";
	strVar += "    <td>";
	if (data) {
		strVar += "        <input id=\"fbq\" name=\"quantity\" value=\"" + data['qty'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbq\" name=\"quantity\" placeholder=\"1\" \/>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Premium<\/td>";
	strVar += "    <td>";
	if (data) {
		strVar += "        <input id=\"fbp\" name=\"quantity\" value=\"" + data['pre'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbp\" name=\"quantity\" placeholder=\"25.60\" \/>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Unit Price<\/td>";
	strVar += "    <td>";
	if (data) {
		strVar += "        <input id=\"fbpri\" name=\"quantity\" value=\"" + data['price'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbpri\" name=\"quantity\" placeholder=\"1250.60\" \/>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Purity %<\/td>";
	strVar += "    <td>";

	if (data) {
		strVar += "        <input id=\"fbpure\" name=\"quantity\" value=\"" + data['pure'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbpure\" name=\"quantity\" placeholder=\"0.999\" \/>";
	}
	strVar += "    <\/td>";

	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Weight\/unit (g)<\/td>";
	strVar += "    <td>";

	if (data) {
		strVar += "        <input id=\"fbwu\" name=\"quantity\" value=\"" + data['wu'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbwu\" name=\"quantity\" placeholder=\"1.244\" \/>";
	}
	strVar += "    <\/td>";

	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Metal g\/u<\/td>";
	strVar += "    <td>";

	if (data) {
		strVar += "        <input id=\"fbgu\" name=\"quantity\" value=\"" + data['gu'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbgu\" name=\"quantity\" placeholder=\"1.244\" \/>";
	}
	strVar += "    <\/td>";

	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Metal ozt\/u<\/td>";
	strVar += "    <td>";

	if (data) {
		strVar += "        <input id=\"fboz\" name=\"quantity\" value=\"" + data['oz'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fboz\" name=\"quantity\" placeholder=\"0.0400\" \/>";
	}
	strVar += "    <\/td>";

	strVar += "<\/tr>";
	strVar += "<tr>";
	strVar += "    <td>Total metal (ozt)<\/td>";
	strVar += "    <td>";

	if (data) {
		strVar += "        <input id=\"fbtl\" name=\"quantity\" value=\"" + data['tlw'] + "\" \/>";
	} else {
		strVar += "        <input id=\"fbtl\" name=\"quantity\" placeholder=\"0.0400\" \/>";
	}
	strVar += "    <\/td>";

	strVar += "<\/tr>";
	if(type == 'coin'){
		strVar += "<tr id=\"diaRow\">";
		strVar += "    <td>Diameter (mm)<\/td>";
		strVar += "    <td>";
		if(data){
			strVar += "		<input id=\"fbdia\" name=\"quantity\" value=\"" + data['dia'] + "\" \/>";
		} else {
			strVar += "		<input id=\"fbdia\" name=\"quantity\" placeholder=\"30.00\" \/>";
		}
		strVar += "    <\/td>";
		strVar += "<\/tr>";
	}
	strVar += "<tr>";
	strVar += "    <td>Thickness (mm)<\/td>";
	strVar += "    <td>";
	if(data){
		strVar += "		<input id=\"fbthk\" name=\"quantity\" value=\"" + data['thk'] + "\" \/>";
	} else {
		strVar += "		<input id=\"fbthk\" name=\"quantity\" placeholder=\"2.9\" \/>";
	}
	strVar += "    <\/td>";
	strVar += "<\/tr>";

	return strVar;
}

/**************************************
 * extractFromTuple(tuples, element) :
 *
 * Used to extract all of the first element of tuples or second.
 * - tuples: the tuples to extract from
 * - element: which one to extract
 */
function extractFromTuple(tuples, element) {
	var extract = [];
	for (tuple in tuples) {
		extract[tuple] = tuples[tuple][element];
	}
	return extract;
}

/**************************************
 * formatDate(date) :
 *
 * Used to convert date objects into yyyy-mm-dd strings
 * - date: date to convert
 */
function formatDate(date) {
	var dd = date.getDate();
	var mm = date.getMonth() + 1;
	var yyyy = date.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	date = yyyy + '-' + mm + '-' + dd;

	return date;
}

/**************************************
 * getXYearBack() :
 *
 * Used to retrieve time ranges of appropriate range
 */
function getThreeYearBack() {
	var today = new Date();
	today = formatDate(today);

	var fiveBack = new Date();
	fiveBack = formatDate(new Date(fiveBack.setDate(fiveBack.getDate() - 365 * 3)));
	return [today, fiveBack];
}

function getYearBack() {
	var today = new Date();
	today = formatDate(today);

	var fiveBack = new Date();
	fiveBack = formatDate(new Date(fiveBack.setDate(fiveBack.getDate() - 365)));
	return [today, fiveBack];
}

function getThreeMonthBack() {
	var today = new Date();
	today = formatDate(today);

	var fiveBack = new Date();
	fiveBack = formatDate(new Date(fiveBack.setDate(fiveBack.getDate() - 90)));
	return [today, fiveBack];
}

function getMonthBack() {
	var today = new Date();
	today = formatDate(today);

	var fiveBack = new Date();
	fiveBack = formatDate(new Date(fiveBack.setDate(fiveBack.getDate() - 30)));
	return [today, fiveBack];
}

function getWeekBack() {
	var today = new Date();
	today = formatDate(today);

	var fiveBack = new Date();
	fiveBack = formatDate(new Date(fiveBack.setDate(fiveBack.getDate() - 8)));
	return [today, fiveBack];
}

/**************************************
 * roundResults(num, factor) :
 *
 * Function used to trim the number of digits in float
 * - num: number to trim
 * - factor: number of sig figs to keep
 */
function roundResults(num, factor) {
    return Math.ceil(num * Math.pow(10, factor)) / (Math.pow(10, factor));
}

// Globalize drawGraph
var drawGraph;

var resetCanvas = function() {
	$('#total-chart').remove(); // this is my <canvas> element
	$('.chart-wrap').append('<canvas id="total-chart"><canvas>');
	canvas = document.querySelector('#total-chart');
	ctx = canvas.getContext('2d');
	ctx.canvas.width = $('.chart-wrap').width(); // resize to parent width
	ctx.canvas.height = $('.chart-wrap').height(); // resize to parent height
};

var graphPages = ['wire2.html', 'wire3_s.html', 'wire3_p.html', 'wire3_g.html'];

$(window).load(function() {
	var path = window.location.pathname;
	var page = path.split("/").pop();



	/* * * * * * * * * * * * * *
	 *                         *
	 *        GENERAL          *
	 *                         *
	 * * * * * * * * * * * * * */

	$('.icon-spinner2').click(function() {
		location.reload();
	});

	$('tr').click(function() {
		if ($(this).find('a')[0]) {
			$(this).find('a')[0].click();
		}
	});

	/* * * * * * * * * * * * * *
	 *                         *
	 *        GRAPHING         *
	 *                         *
	 * * * * * * * * * * * * * */
	// graph for wire2 page
	drawGraph = function(data) {
		resetCanvas();
		var pointStroke = "rgba(255,255,255,0.6)";
		var pointHighlightFill = "#fff";
		var pointHighlightStroke = "#fff";
		if (page == "wire2.html") {
			// Extract data from all labels
			var gLabels = extractFromTuple(data[0], 0);
			var sLabels = extractFromTuple(data[1], 0);
			var pLabels = extractFromTuple(data[2], 0);
			var gValues = extractFromTuple(data[0], 1);
			var sValues = extractFromTuple(data[1], 1);
			var pValues = extractFromTuple(data[2], 1);
			var data = {
				labels: gLabels,
				datasets: [{
					label: "Gold Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: gValues
				}, {
					label: "Platinum Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FFA859",
					pointColor: "#FFA859",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: pValues
				}, {
					label: "Silver (x70) Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#F3FF88",
					pointColor: "#F3FF88",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: sValues
				}]
			};

			var options = {

				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines: true,

				//String - Colour of the grid lines
				scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

				//Number - Width of the grid lines
				scaleGridLineWidth: 1,

				//Boolean - Whether to show horizontal lines (except X axis)
				scaleShowHorizontalLines: true,

				//Boolean - Whether to show vertical lines (except Y axis)
				scaleShowVerticalLines: true,

				//Boolean - Whether the line is curved between points
				bezierCurve: true,

				//Number - Tension of the bezier curve between points
				bezierCurveTension: 0.4,

				//Boolean - Whether to show a dot for each point
				pointDot: true,

				//Number - Radius of each point dot in pixels
				pointDotRadius: 4,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth: 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius: 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke: true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth: 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill: true,

				//String - A legend template
				legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

				responsive: true,

				maintainAspectRatio: false,


			};

			var ctx = document.getElementById("total-chart").getContext("2d");
			var coinChart = new Chart(ctx).Line(data, options);
			coinChart.update();
		} else if (page == "wire3_g.html") { // Gold page
			var gLabels = extractFromTuple(data[0], 0);
			var gValues = extractFromTuple(data[0], 1);
			var data = {
				labels: gLabels,
				datasets: [{
					label: "Gold Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: gValues
				}, ]
			};

			var options = {

				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines: true,

				//String - Colour of the grid lines
				scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

				//Number - Width of the grid lines
				scaleGridLineWidth: 1,

				//Boolean - Whether to show horizontal lines (except X axis)
				scaleShowHorizontalLines: true,

				//Boolean - Whether to show vertical lines (except Y axis)
				scaleShowVerticalLines: true,

				//Boolean - Whether the line is curved between points
				bezierCurve: true,

				//Number - Tension of the bezier curve between points
				bezierCurveTension: 0.4,

				//Boolean - Whether to show a dot for each point
				pointDot: true,

				//Number - Radius of each point dot in pixels
				pointDotRadius: 4,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth: 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius: 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke: true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth: 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill: true,

				//String - A legend template
				legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

				responsive: true,

				maintainAspectRatio: false,


			};

			var ctx = document.getElementById("total-chart").getContext("2d");
			var coinChart = new Chart(ctx).Line(data, options);
			coinChart.update();
		} else if (page == "wire3_s.html") { // Silver page
			var sLabels = extractFromTuple(data[1], 0);
			var sValues = extractFromTuple(data[1], 1);
			var data = {
				labels: sLabels,
				datasets: [{
					label: "Silver Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: sValues
				}, ]
			};

			var options = {

				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines: true,

				//String - Colour of the grid lines
				scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

				//Number - Width of the grid lines
				scaleGridLineWidth: 1,

				//Boolean - Whether to show horizontal lines (except X axis)
				scaleShowHorizontalLines: true,

				//Boolean - Whether to show vertical lines (except Y axis)
				scaleShowVerticalLines: true,

				//Boolean - Whether the line is curved between points
				bezierCurve: true,

				//Number - Tension of the bezier curve between points
				bezierCurveTension: 0.4,

				//Boolean - Whether to show a dot for each point
				pointDot: true,

				//Number - Radius of each point dot in pixels
				pointDotRadius: 4,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth: 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius: 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke: true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth: 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill: true,

				//String - A legend template
				legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

				responsive: true,

				maintainAspectRatio: false,


			};

			var ctx = document.getElementById("total-chart").getContext("2d");
			var coinChart = new Chart(ctx).Line(data, options);
			coinChart.update();
		} else if (page == "wire3_p.html") { // Platinum page
			var pLabels = extractFromTuple(data[2], 0);
			var pValues = extractFromTuple(data[2], 1);
			var data = {
				labels: pLabels,
				datasets: [{
					label: "Platinum Total",
					fillColor: "rgba(104, 206, 222, 0.05)",
					strokeColor: "#FF6D67",
					pointColor: "#FF6D67",
					pointStrokeColor: pointStroke,
					pointHighlightFill: pointHighlightFill,
					pointHighlightStroke: pointHighlightStroke,
					data: pValues
				}, ]
			};

			var options = {

				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines: true,

				//String - Colour of the grid lines
				scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

				//Number - Width of the grid lines
				scaleGridLineWidth: 1,

				//Boolean - Whether to show horizontal lines (except X axis)
				scaleShowHorizontalLines: true,

				//Boolean - Whether to show vertical lines (except Y axis)
				scaleShowVerticalLines: true,

				//Boolean - Whether the line is curved between points
				bezierCurve: true,

				//Number - Tension of the bezier curve between points
				bezierCurveTension: 0.4,

				//Boolean - Whether to show a dot for each point
				pointDot: true,

				//Number - Radius of each point dot in pixels
				pointDotRadius: 4,

				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth: 1,

				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius: 20,

				//Boolean - Whether to show a stroke for datasets
				datasetStroke: true,

				//Number - Pixel width of dataset stroke
				datasetStrokeWidth: 2,

				//Boolean - Whether to fill the dataset with a colour
				datasetFill: true,

				//String - A legend template
				legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

				responsive: true,

				maintainAspectRatio: false,


			};

			var ctx = document.getElementById("total-chart").getContext("2d");
			var coinChart = new Chart(ctx).Line(data, options);
			coinChart.update();
		}
	};

	// Initialize charts to one month ranges
	monthlyData = getMonthBack();
	if (graphPages.indexOf(page) >= 0) {
		getAggregateData(monthlyData[1], monthlyData[0], (page == "wire3_s.html") ? false : true);
	}

	/* * * * * * * * * * * * * *
	 *                         *
	 *     MOBILE HANDLING     *
	 *                         *
	 * * * * * * * * * * * * * */

	$('.mtb-1').click(function() {
		$('.graph-panel').removeClass('graph-panel-show');
		$('.market-status').fadeIn(0);
		$('.market-list').fadeIn(0);
		if (page == "wire3.html")
			$('.my_stack').fadeIn(0);
		$('.mtb-2').removeClass('mobile-toggle-selected');
		$('.mtb-1').addClass('mobile-toggle-selected');

	});

	$('.mtb-2').click(function() {
		$('.market-status').fadeOut(0);
		$('.market-list').fadeOut(0);
		if (page == "wire3.html")
			$('.my_stack').fadeOut(0);
		$('.mtb-1').removeClass('mobile-toggle-selected');
		$('.mtb-2').addClass('mobile-toggle-selected');
		$('.graph-panel').addClass('graph-panel-show');
		getAggregateData(getMonthBack()[1], getMonthBack()[0], (page == "wire3_s.html") ? false : true);
	});

	var resizer = function() {
		winWidth = $(window).width();
		winHeight = $(window).height();

		if (winWidth > 999) {
			$('.graph-panel').removeClass('graph-panel-show');
			$('.market-status').fadeIn(0);
			$('.market-list').fadeIn(0);
			if (page == "wire3.html")
				$('.my_stack').fadeIn(0);
			$('.mtb-2').removeClass('mobile-toggle-selected');
			$('.mtb-1').addClass('mobile-toggle-selected');
		}
	};

	$(window).resize(resizer);


});