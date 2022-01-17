//Load Jailbeak
function load_jailbreak(){
    if (sessionStorage.jbdone != "yes" || sessionStorage.jbdone == undefined)
    {
  msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'>Loading Host Exploit...Please Wait For 20-30 seconds!!!</h1>";
  LoadedMSG="Jailbreak Loaded!!!... Wait For Memory Error And After Click OK..";
  exec_type = "jailbreak";
  setTimeout(poc, 1500);
    }
    else
    {
  alert("You're Already Jailbroken!!!.. Please Launch Any Payload You Wish, You Don't Need Anymore USB Flash Drive!!!");
  return;
    }
  }
  
// EXEC Type
var exec_type = "";

//Button Function
function load_goldhen(){
msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'>Loading GoldHen V2.0B. Please wait 20-30 seconds!!!</h1>";
LoadedMSG="GoldHen V2.0B Loaded";
PLfile = "/Payload/pl_goldhen20b.bin";
exec_type = "payload";
loadPayloadData();
}
  
function load_goldhenb2(){
msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'>Loading GoldHen V2.0B2. Please wait 20-30 seconds!!!</h1>";
LoadedMSG="GoldHen V2.0B2 Loaded";
PLfile = "/Payload/pl_goldhen20b2.bin";
exec_type = "payload";
loadPayloadData();
}
  
function load_binloader(){
msgs.innerHTML="<h1 style='font-size:25px;text-align:center;'>Loading Bin Loader on Port 9020. Please wait 20-30 seconds!!!";
LoadedMSG="Awaiting For Payload on Port 9020...";
exec_type = "binloader";
setTimeout(poc, 1500);
}

function load_Orbis(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "../Payload/pl_OrbisToolbox.bin"
LoadpaylodsGhen20(PLfile);
}

function app_usb(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_app2usb.bin"
LoadpaylodsGhen20(PLfile);
}

function app_dumper(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_appdumper.bin"
LoadpaylodsGhen20(PLfile);
}

function enable_updates(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_enableupdates.bin"
LoadpaylodsGhen20(PLfile);
}
 
function exit_idu(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_exitidu.bin"
LoadpaylodsGhen20(PLfile);
}

function rifrenamer(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_rifrenamer.bin"
LoadpaylodsGhen20(PLfile);
}

function ftp(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_ftp.bin"
LoadpaylodsGhen20(PLfile);
}
      
function history_blocker(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_historyblocker.bin"
LoadpaylodsGhen20(PLfile);
}

function kernel_dumper(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_kerneldumper.bin"
LoadpaylodsGhen20(PLfile);
}

function load_ps4debug(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_ps4debug.bin"
LoadpaylodsGhen20(PLfile);
}

function load_backup(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_backup.bin"
LoadpaylodsGhen20(PLfile);
}

function load_restore(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_restore.bin"
LoadpaylodsGhen20(PLfile);
}

function load_todex(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_todex.bin"
LoadpaylodsGhen20(PLfile);
}

function load_webrte(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_webrte.bin"
LoadpaylodsGhen20(PLfile);
}

function load_uart(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_permanentuart.bin"
LoadpaylodsGhen20(PLfile);
}

function load_disableaslr(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_disbleaslr.bin"
LoadpaylodsGhen20(PLfile);
}

function load_moduledumper(){
msgs.innerHTML="Payload sending... please wait";
PLfile = "/Payload/pl_moduledumper.bin"
LoadpaylodsGhen20(PLfile);
}
                                                                        
// Stuff idk How Name it.
  function awaitpl() {
    msgs.innerHTML= LoadedMSG;
   }
  function pldone() {
    msgs.innerHTML= LoadedMSG;
  }
  
  function jailbreakdone(){
    msgs.innerHTML= LoadedMSG;
  }



//Stooged Bin Inject Method
var payloadData = "";

