import { Pipe, PipeTransform} from '@angular/core';
@Pipe({ name: 'filter' })
export class Filter implements PipeTransform {
  public transform(values: any[], args: string, obj: any[]) {      
    if (!values || !values.length) return [];
    if (!args) return values;     
    var tamanho = obj.length;
    let keys = [];       
    for(var k in obj[0]){
    	let isnum = /^\d+$/.test(obj[0][k]);
    }

    function filtrar(){
    	var tamanho = obj.length;    	
    	var retorno = [];
    	var keys = [];
    	for(let k in obj[0]) keys.push(k);


    	for(var i = 0; i < tamanho; i++){
    		for(let j = 0; j < keys.length; j++){               
    			if(obj[i][keys[j]] !== null && obj[i][keys[j]].toString().toLowerCase().indexOf(args.toLowerCase()) > -1){     				  			
    				retorno.push(obj[i]);    				    				
    				break;
    			}
    		}            
    	}

    	return retorno;

    }

   	return filtrar();
  }
}

