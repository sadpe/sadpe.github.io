var request = new XMLHttpRequest();
var data_url = 'data/data.json';

request.open('GET', data_url);

function build_html(hj, message, city, confirmed, confirmed_diff, date){
    var text;
    text = 'Execução instaurada hoje:'+hj;
    text += String(message);
    text += '<br>'
    text += '<br>'
    text += '<br>'
    text += "Cidade: " + String(city);
    text += '<br>'
    text += `Casos confirmados: ${confirmed} (+${confirmed_diff})`;
    text += '<br>'
    text += "Data de atualização: " + String(date);
    return text;
}

request.onload = function(){
    // if (this.status == 200){
        let z = 'VAZIO'
        let data = JSON.parse(this.response);
        let dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
        let monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
        let now = new Date
        let hj = dayName[now.getDay() ]+ ","+ now.getDate()+ " de "+monName [now.getMonth()]+  " de "  + now.getFullYear ();
    
        let message = ('message' in data)? data['message']:z;
        let city = ('results' in data && 'city' in data['results'][0])? data['results'][0]['city']: z;
        let confirmed_today = ('results' in data && 'confirmed' in data['results'][0])? data['results'][0]['confirmed']:z;
        let confirmed_yesterday = ('results' in data && 'confirmed' in data['results'][1])? data['results'][1]['confirmed']:z;
        let confirmed_diff = parseInt(confirmed_today) - parseInt(confirmed_yesterday);
        let update_date = ('results' in data && 'date' in data['results'][0])? data['results'][0]['date']:z;
        let html_text = build_html(hj, message, city, confirmed_today, confirmed_diff, update_date);
        
        document.body.innerHTML = html_text;
        //document.body.innerHTML = city;
   // }
}

request.onerror = function(){

}

request.send();
