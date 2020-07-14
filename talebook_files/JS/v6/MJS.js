var CKB=document.getElementById("ckb");
var Cbtx=document.getElementById("cbtx");
CKB.checked=false;Cbtx.style.display="none";
function CKge(){
	cekVLV();
	if(CKB.checked){Cbtx.style.display="block";Cbtx.value="z.B. Hallo X, ich mochte gerne mit etwas neue zum probiren , Aus MEE "}
	else{Cbtx.style.display="none";Cbtx.value="";};
}
var KPNB=document.getElementById("kpn");
var KPNTX=document.getElementById("cpntx");
KPNB.checked=false;KPNTX.style.display="none";
function KPNge(){
	cekVLV();
	if(KPNB.checked){KPNTX.style.display="block";KPNTX.placeholder="z.B. ABC-123"}
	else{KPNTX.style.display="none";KPNTX.placeholder="";};
}
var DTE=document.getElementById("dbe");
var DTX=document.getElementById("dte");
DTE.checked=false;DTX.style.display="none";
function DTge(){
	cekVLV();
	if(DTE.checked){DTX.style.display="block";}
	else{DTX.style.display="none";};
}

function cekVLV(){
	if(CKB.checked){CKB.value="JA";}else{CKB.value="";}
	if(KPNB.checked){KPNB.value="JA";}else{KPNB.value="";}
	if(DTE.checked){DTE.value="JA";}else{DTE.value="";}
}

function OPMD(){
	document.getElementById('formular').style.display='block';
	document.getElementById('gform').style.display='block';
	
 racunka();

	MESTI_VALUE();
}
function racunka(){
	document.getElementById("MOEbst").value=document.getElementsByClassName("sc-cart-subtotal")[0].innerHTML;
	
	BST_ID(); ///< ova e toa za shifraa 
//	document.getElementById("BST_id").innerHTML=document.getElementsByClassName("sc-cart-subtotal")[0].innerHTML;
	
	
	
}


var GOTOVAL;//listata
var SRCimg;//srkkat
var a_geter;//geterot od lista
var qti_GO;
var SRT_GO; //  
var zz=[document.getElementsByClassName("IDI")];
var m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18;
var M=[m0,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18];

var NAZIV;


var ElemtiZAemail=[
"","","","","","","","","","",
"","","","","","","","","","",
"","","","","","","","","","",
"","","","","","","","","",""
];// tuka ima okolu 40 vakvi
var EmlMMR=[];//mmroi za email 
function MESTI_VALUE(){ GOTOVAL=[document.getElementsByClassName("list-group sc-cart-item-list")[0]];
//sndBTN  ZZ da se zameni so nlemenment
for(i=0;i<zz[0].length;i++){zz[0][i].value="";}
for(i=0;i<GOTOVAL[0].children.length;i++)
{ SRCimg=GOTOVAL[0].children[i].children[1].src; 

NAZIV=GOTOVAL[0].children[i].children[2].innerHTML;
/////// ova da se izmozga kako slika identifajer !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
a_geter=parseInt(SRCimg.slice((SRCimg.length)-11,(SRCimg.length)-9));
	SRT_GO=parseInt(GOTOVAL[0].children[i].children[3].innerHTML.slice(1,2));
	qti_GO=parseInt(GOTOVAL[0].children[i].children[5].children[1].value);
	
	if(zz[0][a_geter].value==""){
		
	zz[0][a_geter].value=qti_GO+"-"+SRT_GO+"x[("+a_geter+")]";
	M[a_geter]=zz[0][a_geter].value;
	
ElemtiZAemail[a_geter]="||"+qti_GO+"*box[ ("+SRT_GO+" x inbox {typ: "+NAZIV+" } ) ]";
EmlMMR[a_geter]=ElemtiZAemail[a_geter];
	}else{
	
	zz[0][a_geter].value=M[a_geter]+"x"+SRT_GO+"-]"+qti_GO;
	
	//"||" ova e za za takvo tager
ElemtiZAemail[a_geter]=EmlMMR[a_geter]+ " and " + qti_GO+"*box[ ("+SRT_GO+" x inbox {typ: "+NAZIV+"} ) ]";
	
    }	
	
}

}
var nsv0;var nsv1;var nsv2;var nsv3;
var NSV=[nsv0,nsv1,nsv2,nsv3];
var ALL_NSV="";

var TXT_mail="";
var TXT_name;
var TXT_strse;
var TXT_stad;
var TXT_plz;

//var KNDETO_DATA; 

var TXT=[TXT_mail,TXT_name,TXT_strse,TXT_stad,TXT_plz];
////       0          1        2        3        4      

function cr8ElistaMail(){
//	if(TXT_mail==""){// kolku da blokira da se 2pati akcijata
for(i=0;i<ElemtiZAemail.length;i++){
	if(ElemtiZAemail[i]!=""){// ova e toa so po 1 artiklot od sorta
		TXT_mail=TXT_mail+ElemtiZAemail[i]+"\n";  }}
	
	TXT[0]=TXT_mail;
	TXT[1]=document.getElementsByName("nameKUNDE")[0].value;
	TXT[2]=document.getElementsByName("ADRS_STRASSE")[0].value;
	TXT[3]=document.getElementsByName("ADRS_STADT")[0].value;
	TXT[4]=document.getElementsByName("ADRS_PLZ")[0].value;
	
	NSV[0]="Bestelung#ID:  			"+BID+"||";
	NSV[1]="bestelung PRISE EURO: 			"+document.getElementsByClassName("sc-cart-subtotal")[0].innerHTML+"||";
	NSV[2]="dein bestelung detals: "+TXT[0];
	NSV[3]="||Detals fur bestelung empfanger :	" +TXT[1]+"|| ADRESE_STRASSE-			"+TXT[2]+"|| ADRESE_STADT-			"+TXT[3]+"|| ADRESE_PLZ-			"+TXT[4];

for(i=0;i<4;i++){ALL_NSV=ALL_NSV+NSV[i]}
    document.getElementsByName("KND_DTA")[0].value=ALL_NSV;
	
//}
}
	

////////////////////////////////////////////////////
var X=["&","$","#","%","^","*","=","~"];

var res;var RES;var BID;var ELniza=[null,null,null,null,null];  

function BST_ID(){var d = new Date();DRniza=[d.getSeconds(),d.getMinutes(),d.getHours(),d.getDate(),d.getMonth() + 1];
///     RES =MSC+SKD++DEN+MNT+SAT               0               1              2          3             4


for(i=0;i<5;i++){onadi(DRniza[i],i);}

RES=ELniza[4]+ELniza[0]+ELniza[3]+ELniza[1]+ELniza[2];
BID=d.getMilliseconds()+"@"+RES;
document.getElementById("BSTid").innerHTML=BID;
document.getElementById("BST_id").value=BID;
}

function onadi(a,N){
if      (a<26)   {v=a;   res = String.fromCharCode(97+v);  }
else if (a<52)   {v=a-26;res = String.fromCharCode(65+v);  }
else             {v=a-52;res = X[v];                       }ELniza[N]=res;}





