
  window.__ow = window.__ow || {};
  window.__ow.organizationId = "29db0954-b1ff-403f-b70e-f03ca2c92086";
  window.__ow.template_id = "4b93e159-faae-4460-81cc-5bc2f4c4c578";
  window.__ow.integration_name = "manual_settings";
  window.__ow.product_name = "chatbot";   
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))




    // Seleciona o botão do chat (mude o seletor conforme o seu botão)
const botaoChat = document.querySelector('.openwidget-btn');

// Verifica se o botão existe
if (botaoChat) {
  // Inicializa o contador no localStorage, se não existir ainda
  if (!localStorage.getItem('contadorClicksChat')) {
    localStorage.setItem('contadorClicksChat', '0');
  }

  botaoChat.addEventListener('click', () => {
    // Pega o valor atual, incrementa e salva de novo
    let contador = parseInt(localStorage.getItem('contadorClicksChat'), 10);
    contador++;
    localStorage.setItem('contadorClicksChat', contador.toString());

    console.log('Contador de cliques no chat:', contador);
    // Aqui você pode mostrar o contador na tela, enviar para servidor, etc.
  });
}

const contadorSpan = document.getElementById('contador-clicks');

if (botaoChat && contadorSpan) {
  // Atualiza o contador na tela no carregamento
  contadorSpan.textContent = localStorage.getItem('contadorClicksChat') || '0';

  botaoChat.addEventListener('click', () => {
    let contador = parseInt(localStorage.getItem('contadorClicksChat'), 10);
    contador++;
    localStorage.setItem('contadorClicksChat', contador.toString());
    contadorSpan.textContent = contador;
  });
}



