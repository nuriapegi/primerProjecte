/**
 * 
 */
function taulesAmbArrays(numTaules){
	var resultat [];
	for (var i=0; i<=10; i++){
		resultat[i]=[];
		for (var j=0; j<=10; j++) {
			resultat[i][j]=i+j;
		}
	}
	return resultat
}