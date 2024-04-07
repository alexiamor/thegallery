window.onload = () => {

    class TheGallery extends Phaser.Scene {
        constructor() {
            super({ key: "TheGallery" });
        }

        preload() {
            
            // Carga la imagen que deseas utilizar
            this.load.image("background", `./assets/img/fondo.svg`);
            this.load.image("startButton", `./assets/img/icon.svg`);
            this.load.json(`questions`, `./assets/data/data.json`);
            this.load.image("character", `../assets/img/character.png`);
            this.load.image("happy", `./assets/img/happychr.png`);
            this.load.image("bad", `./assets/img/bad.png`);
            this.load.image("optionBox", `./assets/img/bocadillo.svg`);
            this.load.image("feedbackBox", `./assets/img/feedback.svg`);
            this.load.image("paintingP1",`./assets/img/PP1.png`);
            this.load.image("paintingN1",`./assets/img/PN1.png`);
            this.load.image("paintingP2",`./assets/img/PP2.png`);
            this.load.image("paintingN2",`./assets/img/PN2.png`);
            this.load.image("paintingP3",`./assets/img/PP3.png`);
            this.load.image("paintingN3",`./assets/img/PN3.png`);
            this.load.image("paintingP4",`./assets/img/PP4.png`);
            this.load.image("paintingN4",`./assets/img/PN4.png`);
            this.load.image("paintingP5",`./assets/img/PP5.png`);
            this.load.image("paintingN5",`./assets/img/PN5.png`);
            this.load.image("paintingP6",`./assets/img/PP6.png`);
            this.load.image("paintingN6",`./assets/img/PN6.png`);
            this.load.image("paintingP7",`./assets/img/PP7.png`);
            this.load.image("paintingN7",`./assets/img/PN7.png`);
            this.load.image("cuadrado",`./assets/img/cuadradofondo.png`);

            //music

            this.load.audio('THEMESONG', 'assets/audio/equus.mp3');
        }

        create() {
            // Agrega la imagen de fondo ocupando toda la pantalla
            var backgroundImage = this.add.image(this.sys.game.canvas.width / 2,this.sys.game.canvas.height / 2,"background")
            .setDisplaySize(this.sys.game.canvas.width,this.sys.game.canvas.height).setDepth(500);


            this.character = this.add
                .image(160, 810, "character")
                .setDepth(550)
                .setScale(0.8);

                this.happy = this.add
                .image(160, 810, "happy")
                .setDepth(0)
                .setScale(0.8);

                this.bad = this.add
                .image(160, 810, "bad")
                .setDepth(0)
                .setScale(0.9);

            this.optionBox1 = this.add.image(700, 910, "optionBox").setDepth(0);//aqui mueve las cajas de texto opt
            this.optionBox2 = this.add.image(1200, 910, "optionBox").setDepth(0);

            // Agrega texto a la escena
            this.add
                .text(630, 420, "THE GALLERY", {
                    fontFamily: "Helvetica",
                    fontStyle: "bold",
                    fontSize: 80,
                    color: "#00000",
                })
                .setDepth(501);

            this.start = this.add.image(1600, 759, "startButton").setDepth(501);
            this.start = this.add.text(1550, 735, "Start", {fontFamily: "Helvetica",fontStyle: "bold",fontSize: 40,color: "#00000",})
                .setDepth(501);
            this.start
                .setInteractive()
                .on("pointerdown", () => this.startClick(1, this.start));

            //character text
            

            this.startInfoBox = this.add.image(250, 495, "optionBox").setScale(1.3).setDepth(530);

            this.startInfo = this.add.text(120, 440, "Tienes que adivinar cuál es el artista de cada cuadro, tienes 2 opciones. ¡Buena suerte!", { fontFamily: 'Helvetica', fontSize: '24px', color: '#000', wordwrap:{width: 300, useAdvancedWrap:true}});
            this.startInfo.setDepth(550);
            this.startInfo.setWordWrapWidth(300);

            this.startTextBox = this.add.image(300, 550, "optionBox").setScale(1).setDepth(0);

            this.startText = this.add.text(200, 530, "¿Listo, alumno?", { fontFamily: 'Helvetica', fontSize: '24px', color: '#000', wordwrap:{width: 200, useAdvancedWrap:true}});
            this.startText.setDepth(0);
            this.startText.setWordWrapWidth(400);
            
            //opciones botones
            this.respuesta1 = this.add.text (620, 890, '', { fontFamily: 'Helvetica', fontSize: '26px', fill: '#000'});
            this.respuesta2 = this.add.text (1100, 890, '', { fontFamily: 'Helvetica', fontSize: '26px', fill: '#000'});

            //texto feedback
            this.feedback1 = this.add.text (700, 850, '', { fontFamily: 'Helvetica', fontSize: '25px', fill: '#000'});
            this.feedback1.setWordWrapWidth(550);
            this.feedback1.setDepth(0);
            this.feedback2 = this.add.text (780, 820, '', { fontFamily: 'Helvetica', fontSize: '25px', fill: '#000'});
            this.feedback2.setWordWrapWidth(400);
            this.feedback2.setDepth(0);

            this.respuesta1.setInteractive().on("pointerdown", () => this.respuestaClick(1, this.respuestaCorrecta));
            this.respuesta2.setInteractive().on("pointerdown", () => this.respuestaClick(2, this.respuestaCorrecta));
            
            this.paintingPixel = this.add.image (1000, 510).setDepth(0);
            this.paintingNormal = this.add.image (1000, 510).setDepth(0);
            this.cuadrado = this.add.image (955, 550,"cuadrado").setDepth(0);

            this.game.config.contadorCuadros =0;

            this.next = this.add.text (1550, 735, 'Next', { fontFamily: 'Helvetica', fontSize: '40px', fontStyle: "bold", fill: '#000'}).setDepth(0);
            this.next.setInteractive().on("pointerdown", () => this.nextClick());

            this.perder = this.add.text (1550, 735, 'Reset', { fontFamily: 'Helvetica', fontSize: '40px', fontStyle: "bold", fill: '#000'}).setDepth(0);
            this.perder.setInteractive().on("pointerdown", () => this.PerderClick());
            this.perder.disableInteractive();

        //musica

        this.backgroundMusic = this.sound.add('THEMESONG', { loop: true, volume: 0.4 });
        this.backgroundMusic.play();

        

        }

        PerderClick() {
            window.location.reload();
        }

        // primer cuadro
        startClick() {
            this.startInfoBox.setDepth(0);
            this.startInfo.setDepth(0);
            this.startText.setDepth(550);
            this.startTextBox.setDepth(540)
            this.cuadrado.setDepth(510);
            this.start.setDepth(0);
            this.start.disableInteractive();

            this.next.disableInteractive();

            this.respuesta1.setDepth(650);
            this.respuesta2.setDepth(650);

            this.respuestaCorrecta = 1;
            this.nextClick();
        }
        
        respuestaClick(respuesta, correcta){
                let questions = this.cache.json.get('questions');

                this.optionBox1.setDepth(0);
                this.optionBox2.setDepth(0);
                this.respuesta1.setDepth(0);
                this.respuesta2.setDepth(0);
                this.respuesta1.disableInteractive();
                this.respuesta2.disableInteractive();

                if(respuesta == correcta){
                    this.paintingPixel.setDepth(0);
                    this.paintingNormal.setDepth(600); 
                    this.startText.text = questions[this.game.config.contadorCuadros-1].reply_right;
                    
                    this.next.setInteractive().setDepth(700);
                    this.character.setDepth(0);
                    this.happy.setDepth(550);
                    this.bad.setDepth(0);

                    this.optionBox3 = this.add.image(950, 920, "feedbackBox").setScale(0.85).setDepth(700);//caja de texto para el feedback
                    this.feedback1.text = questions[this.game.config.contadorCuadros-1].right_info;
                    this.feedback1.setDepth(750);

                }else{
                    this.startText.text = questions[this.game.config.contadorCuadros-1].reply_wrong;
                    this.perder.setInteractive().setDepth(700);
                    this.character.setDepth(0);
                    this.happy.setDepth(0);
                    this.bad.setDepth(550);

                    this.optionBox3 = this.add.image(950, 920, "feedbackBox").setScale(0.85).setDepth(700);//caja de texto para el feedback
                    this.feedback2.text = questions[this.game.config.contadorCuadros-1].wrong_info;
                    this.feedback2.setDepth(750);

                }
                
        }


        //otros cuadros
        //pantalla de fin de juego
        nextClick(){
            if  (this.game.config.contadorCuadros==7) {
                this.end = this.add.text(630, 420, "¡Gracias por tu visita al museo,\n esperamos verte pronto!", {fontFamily: "Helvetica",fontStyle: "bold",fontSize: 50,color: "#00000", wordwrap:{width: 100, useAdvancedWrap:true}})//coloca bien the end a la derecha
                .setDepth(550);
                this.next.setText("Home");
                this.paintingNormal.setDepth(0);
                this.optionBox3.setDepth(0);
                this.feedback1.setDepth(0);
                this.feedback2.setDepth(0);
                this.game.config.contadorCuadros++;
                } else if (this.game.config.contadorCuadros==8){
                    window.location.reload();
                    
            }else{
            
            this.paintingNormal.setDepth(0);
            this.next.disableInteractive().setDepth(0);
        
            let questions = this.cache.json.get('questions');
            this.next.disableInteractive().setDepth(0);
        
            this.optionBox1.setDepth(600);
            this.optionBox2.setDepth(600);
        

            this.start.setDepth(0);
            this.start.disableInteractive();
            

            if(Math.random()<0.5) {
            this.respuesta1.text  = questions[this.game.config.contadorCuadros].respuesta_correcta;
            this.respuesta2.text  = questions[this.game.config.contadorCuadros].respuesta_incorrecta;

            this.respuestaCorrecta = 1;
            } else{
                this.respuesta1.text  = questions[this.game.config.contadorCuadros].respuesta_incorrecta;
                this.respuesta2.text  = questions[this.game.config.contadorCuadros].respuesta_correcta;
    
                this.respuestaCorrecta = 2;
            }
            this.game.config.contadorCuadros ++;
            this.paintingPixel =  this.add.image (1000, 510, `paintingP${this.game.config.contadorCuadros}`).setDepth(550);
            this.paintingNormal =  this.add.image (1000, 510, `paintingN${this.game.config.contadorCuadros}`).setDepth(0);


            this.respuesta1.setInteractive().setDepth(650);
            this.respuesta2.setInteractive().setDepth(650);
            this.optionBox3.setDepth(0);
            this.feedback1.setDepth(0);
            this.feedback2.setDepth(0);
        }
        }


    }

    var config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            parent: "game-container",
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 1920,
            height: 1083,
        },
        scene: [TheGallery],
        contadorCuadros: 0
    };

    var game = new Phaser.Game(config);
};
