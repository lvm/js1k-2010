k={
  a:450,e:456,i:451,o:457,u:453,n:531,w:454,
  ba:496,be:499,bi:502,bo:505,bu:508,
  da:480,di:482,du:485,de:487,'do':489,
  ga:460,gi:462,gu:464,ge:466,go:468,
  ha:495,hi:498,fu:501,he:504,ho:507,
  ka:459,ki:461,ku:463,ke:465,ko:467,
  ma:510,mi:511,mu:512,me:513,mo:514,
  na:490,ni:491,nu:492,ne:493,no:494,
  pa:497,pi:500,pu:503,po:509,
  ra:521,ri:522,ru:523,re:524,ro:525,
  sa:469,shi:471,si:471,se:475,so:477,
  ta:479,chi:481,tsu:484,tu:484,te:486,to:488,
  va:535,vi:536,vu:532,ve:537,vo:538,
  wa:527,wo:530,
  ya:516,yu:518,yo:520,
  za:470,ji:472,zo:476
  };
w=window;
w.h=0; // "switch" for hiragana use;
d=document;
b=d.body;
b.removeChild(d.getElementById('c'));
i=b.appendChild(d.createElement('input'));
i.focus();
i.onkeyup=function(){
  j();
};
l=d.getElementsByTagName('input')[0];
x=b.appendChild(d.createElement('p'));
d.write("<style>p{font-size:9em;margin:0}</style>");
function j(){
  i=l.value;
  if(i=='H'){ // switch hiragana ON
    w.h=-96;
    return;
  }
  if(i=='K'){  // switch katakana ON || switch hiragana OFF
    w.h=0;
    return;
  }
  if(i.length<4&&k[i]){
    x.innerHTML+="&#12"+(k[i]+w.h)+";";
    l.value='';
  }
  if(!isNaN(l.value)){
    x.innerHTML+=l.value;
    l.value='';
  }
}
