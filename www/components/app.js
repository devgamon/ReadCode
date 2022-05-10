window.onload = ()=>{
    document.querySelector('#btnLer').addEventListener('click', () =>{
        cordova.plugins.barcodeScanner.scan(
        function (result) {
                if(result.text=="280720550"){
                    document.querySelector("#dados").innerHTML = 
                    `
                        <h1>Produto:</h1> <br>
                        <h2>Nome do Produto: iPad Mini Wi-Fi 64Gb - Cinza Espacial</h2>
                        <div class="imagens"><img src="/img/Imagem1.jpg"></div>
                        <p>Valor: R$ 3.499,00</p>
                        <p class="desc">Descrição: <br><br> 
                        Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado</p>
                        <p>Sistema operacional iOS</p>
                        <p>Tamanho da tela 7.9"</p>
                        <p>Tecnologia Wi-Fi</p>
                        <p>Resolução da câmera - Câmera traseira: 8MP; - Câmera frontal: 7MP</p>
                        <p>GPS Sim</p>
                        <p>Grava vídeos Sim</p>
                        <p>Câmera traseira Sim</p>
                        <p>Câmera frontal Sim</p>
                        <p>Memória Flash 64 GB</p>
                        <p>Funciona como celular: Não</p>
                    `;
                }else if(result.text=="989895555"){
                     document.querySelector("#dados").innerHTML =     
                    `
                        <h1>Produto:</h1> <br>
                        <h2>Nome do Produto: Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6</h2>
                        <div class="imagens"><img src="/img/Imagem2.jpg"></div>
                        <p>Valor: R$ 1.888,00</p>
                        <p>Velocidade do Processador: 1.8GHz</p>
                        <p>Tipo de Processador: Octa Core</p>
                        <p>Tamanho (Tela Principal): 153.6mm (6.0")</p>
                        <p>Resolução (Tela Principal):1480 x 720 (HD+)</p>
                        <p>Câmera Resolução - Câmera Traseira: 16.0 MP + 5.0 MP</p>
                        <p>Memória RAM(GB): 4 GB</p>
                        <p>Memória Total Interna (GB) - 64 GB*</p>
                        <p>Memória Disponível (GB) - 50.6 GB</p>
                    `;
                }else if(result.text=="85236987"){
                    document.querySelector("#dados").innerHTML =                     `
                        <h1>Produto:</h1> <br>
                        <h2>Nome do Produto: Motorola One XT1941 Branco 64GB</h2>
                        <div class="imagens"><img src="/img/Imagem3.jpg"></div>
                        <p>Sistema Operacional Android 8.1 Oreo</p>
                        <p>Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz</p>
                        <p>RAM 4GB</p>
                        <p>Tecnologia GSM, 3G e 4G</p>
                        <p>Memória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos
                        pré-instalados</p>
                        <p>Cor Branco</p> <br>
                        <div class="div_content">
                        <h3 id="tittle">Características Gerais: </h3> 
                        <p class="cont">- Tela Max Vision e design ao máximo</p>
                        <p class="cont">- Câmera dupla e armazenamento ilimitado</p>
                        <p class="cont">- Android One: primeiro do Brasil, atualizado e seguro</p>
                        <p class="cont">- Carregamento ultrarrápido TurboPower</p>
                        <p class="cont">- Últimas inovações do Google incorporadas</p>
                        <p class="cont">- Leitor Biométrico (Impressão Digital)</p>
                        </div>
                    `;
                }else if (result.text == "85369877444"){
                    document.querySelector("#dados").innerHTML =                     `
                        <h1>Produto:</h1> <br>
                        <h2>Nome do Produto: Asus Zenfone Max Pro M1</h2>
                        <div class="imagens"><img src="/img/Imagem4.jpg"></div>
                        <p>Valor: R$ 1.199,00</p>
                        <p>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache</p>
                        <p>Sistema Operacional: Android 8.1 Oreo</p>
                        <p>Memória Ram: 4 Gb</p>
                        <p>Memória Interna: 64 Gb</p>
                        <p>Memória Expansiva: 2TB Sd</p>
                        <p>Tela: 6,0" Led Backlight Ips panel (1080x2160)</p>
                        <p>Tipo de Chip: Nano - Dual Chip: Sim</p>
                        <p>Conectividade: 3G; 4G; Wi-fi</p>
                        <p>Câmera Frontal: 8MP</p>
                        <p>Câmera Traseira: 16+5MP</p>
                    `;
                }else{
                    document.querySelector("#dados").innerHTML = "<h1>Produto não encontrado</h1>";
                }

            },
        function (error) {
            alert("Scanning failed: " + error);
        },
        {    
            preferFrontCamera : false, // iOS and Android
            showFlipCameraButton : true, // iOS and Android
            showTorchButton : true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt : "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats : "CODE_39", // default: all but PDF_417 and RSS_EXPANDED
            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations : true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
    );
});
}