var request = new XMLHttpRequest();
var data_url = 'data/data.json';

request.open('GET', data_url);


function build_html(message, city, confirmed, confirmed_diff, date){
    var text;
    text = 'Execução instaurada hoje:'+String(date);
    text += String(message);
    // text += '<br>'
    // text += '<br>'
    // text += '<br>'
    // text += "Cidade: " + String(city);
    // text += '<br>'
    // text += `Casos confirmados: ${confirmed} (+${confirmed_diff})`;
    // text += '<br>'
    // text += "Data de atualização: " + String(date);
    return 'teste <br>';
}

request.onload = function(){
    // if (this.status == 200){
        let data = JSON.parse(this.response);
        //let message = data['message'];
        //let city = data['results'][0]['city'];
        //let confirmed_today = data['results'][0]['confirmed']
        //let confirmed_yesterday = data['results'][1]['confirmed']
        //let confirmed_diff = parseInt(confirmed_today) - parseInt(confirmed_yesterday)
        //let update_date = data['results'][0]['date']
        //let html_text = build_html(message, city, confirmed_today, confirmed_diff, update_date)
        
        //document.body.innerHTML = html_text;
        document.body.innerHTML = data['message'];
   // }
}

request.onerror = function(){

}

request.send();
