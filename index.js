const HTMLdeHeader = () => {
	return `CountDown`;
};

const HTMLdeMain = () => {
	return `
<Div class="Container1">
	<Select id="StopTimer">
		<Option>1</Option>
		<Option>2</Option>
		<Option>3</Option>
		<Option>4</Option>
		<Option>5</Option>
		<Option>6</Option>
		<Option>7</Option>
		<Option>8</Option>
		<Option>9</Option>
		<Option>10</Option>
	</Select><br>
	<Button onclick="Run();" id="iniciarContador">Go!</Button>
</div>

<Div class="Container2">
	<H1  id="LCDScreen">00:00</H1>
</div>
`;
};

const HTMLdeFooter = () => {
	return `Written By Deaf-Web-Admin`;
};
//--------------------------------------------------------------------
const Header = () => {
	document.querySelector("Header").innerHTML = HTMLdeHeader();
};

const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
};

const Footer = () => {
	document.querySelector("Footer").innerHTML = HTMLdeFooter();
};
//--------------------------------------------------------------------
Header();
Main();
Footer();
//--------------------------------------------------------------------
var Interval = null;
var Minutos = 0;
var Segundos = 60;
var Total = 0;

function Run(){
if(document.getElementById("StopTimer").value > 0){
	Minutos = document.getElementById("StopTimer").value -1;
	Total = document.getElementById("StopTimer").value * 60
	console.log(Total);
	Interval = setInterval(check,1000);
	document.getElementById("iniciarContador").setAttribute("Disabled","Disabled");
}else{};
};

function check(){
	Segundos--;
	Total--;
	console.log(Total);;

	if (Segundos < 10){
	document.getElementById("LCDScreen").innerText = Minutos + ":0" + Segundos;
	} else {
	document.getElementById("LCDScreen").innerText = Minutos + ":" + Segundos;
	}

	if ((Minutos == 0) && (Segundos == 0)){
	clearInterval(Interval);
	document.getElementById("LCDScreen").innerText = "00:00";
	document.getElementById("StopTimer").value = "1";
	Total = 0;
	Minutos = 0;
	Segundos = 60;
	document.getElementById("iniciarContador").removeAttribute("Disabled");
	} else {}

	if((Segundos==0) && Total != 0){
	Minutos--;
	Segundos = 60;
	}else{};	
};