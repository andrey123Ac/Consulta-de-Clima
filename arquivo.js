const apiKey = "af042ed61c29b1a3951f1d02cd1740b0";
const apiCountryURL = "https://flagsapi.com//flat/64.png";
const Bandeira = document.getElementById('imagemBandeira');
const cidade = document.getElementById('cidade');
const temperatura = document.getElementById('temperature');
const Nublado = document.getElementById('nublado');
const humidad = document.getElementById('humidade');
const vento = document.getElementById('velocidadeVento');
const botao = document.getElementById('botaoBsca');
const valor = document.getElementById('valo');
const area = document.getElementById('area');
const area2 = document.getElementById('area2');
botaoVolta = document.getElementById('botãoVoltar')

//cidades
const sãoPaulo = document.getElementById('BotaoSaopaulo');
const campinas = document.getElementById('Botaocampinas');
const salvador = document.getElementById('BotaoSalvador');
const rioDeJaneiro = document.getElementById('BotaoRiodeJaneiro');
const BeloHorizonte = document.getElementById('BotaoBeloHorizonte');
const Fortaleza = document.getElementById('BotaoFortaleza');
const Curitiba = document.getElementById('BotaoCuritiba');
const Manaus = document.getElementById('BotaoManaus');




const getWeatherData = async (city) => {

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);

  const data = await res.json();


  console.log(data);

  return data

};

getWeatherData("Ribeirão Preto");

const showWeatherData = async (city) => {
  // Chama a função para obter os dados meteorológicos da cidade especificada.
  const data = await getWeatherData(city);

  // Atualiza os elementos HTML com os dados meteorológicos obtidos.
  cidade.innerText = data.name;
  temperatura.innerHTML = `${parseInt(data.main.temp)}&deg;C`;
  Nublado.innerText = data.weather[0].description;
  humidad.innerText = `${data.main.humidity}%`;
  vento.innerText = data.wind.speed;

  Bandeira.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" height="20px" width="20px"></img>`


};


botao.addEventListener('click', (e) => {
  e.preventDefault();

  let city = valor.value;
  showWeatherData(city)



  area.classList.add('hide');

  area2.classList.remove('hide');

  botaoVolta.classList.remove('hide');

});


sãoPaulo.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('São Paulo');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});



campinas.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('campinas');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});




salvador.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('salvador');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});



rioDeJaneiro.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('Rio De Janeiro');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});



BeloHorizonte.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('Belo Horizonte');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});



Fortaleza.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('Fortaleza');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});




Curitiba.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('Curitiba');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});



Manaus.addEventListener('click', () => {
  area.classList.add('hide');

  showWeatherData('Manaus');

  area2.classList.remove('hide');
  botaoVolta.classList.remove('hide');
});

botaoVolta.addEventListener('click', () => {
  area.classList.remove('hide');
  area2.classList.add('hide');
  botaoVolta.classList.add('hide');
});


valor.addEventListener('keyup', (e) => {

  if (e.code === 'Enter') {
    let city = valor.value;
    showWeatherData(city);
  }
})