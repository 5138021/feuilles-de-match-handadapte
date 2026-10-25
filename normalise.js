/* Ne pas modifier : transforme data.js (format lisible) en données utilisables par les pages. */
(function(){
 const lire=s=>String(s||'').split(/\r?\n|,/).map(x=>x.trim()).filter(Boolean).map(x=>{const i=x.search(/\s/);return i<0?[x,'']:[x.slice(0,i),x.slice(i).trim()]});
 const eq=t=>({nom:t.nom,color:(window.EQUIPES||{})[t.nom]||'#8A9BBE',joueurs:lire(t.joueurs)});
 window.MATCHS=(window.MATCHS||[]).map(m=>({...m,home:eq(m.domicile),away:eq(m.exterieur),
  scoreHome:+m.domicile.score,scoreAway:+m.exterieur.score,pdf:m.pdf||`feuilles/${m.id}.pdf`}));
})();
