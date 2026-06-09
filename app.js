
const phrases=[
'LA VERDAD NO SE NEGOCIA',
'EL HOMBRE APARECE CUANDO DEJA DE MENTIRSE',
'LO QUE TEMES MIRAR CONTROLA TU VIDA',
'TODO CAMBIA CUANDO DEJAS DE ENGAÑARTE',
'EL SILENCIO REVELA MÁS QUE MIL EXCUSAS',
'NO BUSQUES APROBACIÓN. BUSCA VERDAD',
'LA DISCIPLINA ES RECORDAR LO QUE QUIERES'
];
const el=document.getElementById('phrase');
let i=0;
function r(){
el.style.opacity=0;
setTimeout(()=>{
el.textContent=phrases[i];
el.style.opacity=1;
i=(i+1)%phrases.length;
},500);
}
r();
setInterval(r,6000);
