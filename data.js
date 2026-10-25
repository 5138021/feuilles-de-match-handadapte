/* Données d'exemple FICTIVES.
   Chaque match a SA liste de joueurs : "numéro prénom" séparés par des virgules, pour chaque équipe.
   Pour ajouter une feuille : copiez une ligne M(...), changez les valeurs, puis déposez son PDF dans feuilles/<id>.pdf. */
const EQ={
 gre:{nom:"Hand'Adapté Grenoble",color:'#E02D37'},
 mey:{nom:'Meylan Handi-Hand',color:'#4A9FFF'},
 voi:{nom:'ESAT Handball Voiron',color:'#00C17A'},
 ise:{nom:'Isère Sport Adapté',color:'#F5A623'}};
const JO=s=>s.split(',').map(x=>{x=x.trim();const i=x.indexOf(' ');return [x.slice(0,i),x.slice(i+1)]});
const CH="Championnat Hand'Adapté";
const M=(id,competition,division,journee,date,heure,gymnase,ville,h,jh,sh,a,ja,sa)=>({id,competition,division,journee,date,heure,gymnase,ville,
 home:{...EQ[h],joueurs:JO(jh)},away:{...EQ[a],joueurs:JO(ja)},scoreHome:sh,scoreAway:sa,pdf:`feuilles/${id}.pdf`});
window.MATCHS=[
 M('HA-A-001',CH,'Poule A',1,'2026-10-10','14:00','Gymnase du Rondeau','Grenoble',
  'gre','1 Lucas,4 Emma,7 Hugo,9 Inès,11 Nathan',18, 'mey','1 Karim,3 Léa,6 Tom,10 Sarah,12 Paul',15),
 M('HA-A-002',CH,'Poule A',1,'2026-10-10','16:00','Gymnase du Rondeau','Grenoble',
  'voi','2 Yanis,5 Chloé,7 Adam,13 Noah',12, 'ise','3 Sofiane,8 Malik,10 Alice,12 Rayan',12),
 M('HA-C-001',"Coupe Hand'Adapté",'Huitièmes',1,'2026-10-17','15:00','Gymnase des Écoles','Voiron',
  'ise','3 Sofiane,5 Zoé,8 Malik,10 Alice,14 Camille',14, 'gre','1 Lucas,4 Emma,8 Samir,9 Inès,15 Lina',16),
 M('HA-A-003',CH,'Poule A',2,'2026-10-24','15:00','Gymnase des Tilleuls','Meylan',
  'mey','1 Karim,3 Léa,4 Théo,6 Tom,7 Maya,9 Hugo,10 Sarah,11 Enzo,14 Jade',20,
  'voi','1 Lucas,2 Yanis,5 Chloé,8 Malik,9 Inès,12 Zoé,13 Noah,15 Emma',17)
];
