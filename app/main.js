window.onload = () => {

    // Corrige el selector para obtener todos los elementos con la clase 'questionBox'
    //let questionBoxes = document.querySelectorAll('.questionBox');

    class TheGallery extends Phaser.Scene {
        constructor() {
            super({ key: "TheGallery" });
        }

        preload() {
            // Carga la imagen que deseas utilizar
            this.load.image("background", "../assets/img/fondo.svg");
            this.load.image("startButton", "../assets/img/icon.svg");
            this.load.json(`questions`, `../assets/data/data.json`);
            this.load.image("character", "../assets/img/character.png");
            this.load.image("textBox", "../assets/img/bocadillo.svg");
            this.load.image("timerIcon", "../assets/img/timer.svg");
            this.load.image("optionBox", "../assets/img/bocadillo.svg");
            this.load.image("paintingP1","../assets/img/PP1.jpg" )
            this.load.image("paintingN1","../assets/img/PN1.jpg" )
            this.load.image("paintingP2","../assets/img/PP2.jpg" )
            this.load.image("paintingN2","../assets/img/PN2.jpg" )
            this.load.image("paintingP3","../assets/img/PP3.jpg" )
            this.load.image("paintingN3","../assets/img/PN3.jpg" )
            this.load.image("paintingP4","../assets/img/PP4.jpg" )
            this.load.image("paintingN4","../assets/img/PN4.jpg" )
            this.load.image("paintingP5","../assets/img/PP5.jpg" )
            this.load.image("paintingN5","../assets/img/PN5.jpg" )
            this.load.image("paintingP6","../assets/img/PP6.jpg" )
            this.load.image("paintingN6","../assets/img/PN6.jpg" )
            this.load.image("paintingP7","../assets/img/PP7.jpg" )
            this.load.image("paintingN7","../assets/img/PN7.jpg" )
            this.load.image("paintingP8","../assets/img/PP8.jpg" )
            this.load.image("paintingN8","../assets/img/PN8.jpg" )
        }

        create() {
            // Agrega la imagen de fondo ocupando toda la pantalla
            var backgroundImage = this.add.image(this.sys.game.canvas.width / 2,this.sys.game.canvas.height / 2,"background")
            .setDisplaySize(this.sys.game.canvas.width,this.sys.game.canvas.height).setDepth(500);


            this.character = this.add
                .image(160, 810, "character")
                .setDepth(550)
                .setScale(0.8);

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

            this.start = this.add.image(1550, 759, "startButton").setDepth(501);
            this.start = this.add.text(1550, 759, "Start", {fontFamily: "Helvetica",fontStyle: "bold",fontSize: 40,color: "#00000",})
                .setDepth(501);
            this.start
                .setInteractive()
                .on("pointerdown", () => this.startClick(1, this.start));

            this.startText = this.add.text(160, 600, "Ready, pupil?", { fontFamily: 'Helvetica', fontSize: '30px', color: '#000'});
            this.startText.setDepth(550);
            this.respuesta1 = this.add.text (600, 900, '', { fontFamily: 'Helvetica', fontSize: '30px', fill: '#000'});
            this.respuesta2 = this.add.text (1100, 900, '', { fontFamily: 'Helvetica', fontSize: '30px', fill: '#000'});

            this.respuesta1.setInteractive().on("pointerdown", () => this.respuestaClick(1, this.respuestaCorrecta));
            this.respuesta2.setInteractive().on("pointerdown", () => this.respuestaClick(2, this.respuestaCorrecta));
            
            this.paintingPixel = this.add.image (1000, 510).setDepth(0);
            this.paintingNormal = this.add.image (1000, 510).setDepth(0);

            this.paintingPixel =  this.add.image (1000, 510, "paintingP1");
            this.paintingNormal =  this.add.image (1000, 510, "paintingN1");
            this.paintingPixel1 =  this.add.image (1000, 510, "paintingP2").setScale(0.7);
            this.paintingNormal1 =  this.add.image (1000, 510, "paintingN2");
            this.paintingPixel2 =  this.add.image (1000, 510, "paintingP3");
            this.paintingNormal2 =  this.add.image (1000, 510, "paintingN3");
            this.paintingPixel3 =  this.add.image (1000, 510, "paintingP4");
            this.paintingNormal3 =  this.add.image (1000, 510, "paintingN4");
            this.paintingPixel4 =  this.add.image (1000, 510, "paintingP5");
            this.paintingNormal4 =  this.add.image (1000, 510, "paintingN5");
            this.paintingPixel5 =  this.add.image (1000, 510, "paintingP6");
            this.paintingNormal5 =  this.add.image (1000, 510, "paintingN6");
            this.paintingPixel6 =  this.add.image (1000, 510, "paintingP7");
            this.paintingNormal6 =  this.add.image (1000, 510, "paintingN7");
            this.paintingPixel7 =  this.add.image (1000, 510, "paintingP8");
            this.paintingNormal7 =  this.add.image (1000, 510, "paintingN8");

            this.next = this.add.text (1550, 700, 'Next', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next.setInteractive().on("pointerdown", () => this.nextClick());
            this.next1 = this.add.text (1550, 700, 'Next1', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next1.setInteractive().on("pointerdown", () => this.nextClick1());
            this.next2 = this.add.text (1550, 700, 'Next2', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next2.setInteractive().on("pointerdown", () => this.nextClick2());
            this.next3 = this.add.text (1550, 700, 'Next3', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next3.setInteractive().on("pointerdown", () => this.nextClick3());
            this.next4 = this.add.text (1550, 700, 'Next4', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next4.setInteractive().on("pointerdown", () => this.nextClick4());
            this.next5 = this.add.text (1550, 700, 'Next5', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next5.setInteractive().on("pointerdown", () => this.nextClick5());
            this.next6 = this.add.text (1550, 700, 'Next6', { fontFamily: 'Helvetica', fontSize: '100px', fill: '#000'}).setDepth(0);
            this.next6.setInteractive().on("pointerdown", () => this.nextClick6());

        }



        // primera cuadro
        startClick() {
            let questions = this.cache.json.get('questions');
            this.optionBox1.setDepth(600);
            this.optionBox2.setDepth(600);


            this.start.setDepth(0);
            this.start.disableInteractive();
            this.paintingPixel.setDepth(650);
            this.next.disableInteractive();

            //esto carga el texto json
            this.respuesta1.text  = questions[0].respuesta_correcta;
            this.respuesta2.text  = questions[0].respuesta_incorrecta;

            this.respuesta1.setDepth(650);
            this.respuesta2.setDepth(650);
            
            this.paintingPixel.setDepth(550);

            this.respuestaCorrecta = 1;

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
                    this.paintingNormal.setDepth(600).setScale(0.3); 
                    this.startText.text = questions[0].reply_right;
                    this.next.setInteractive().setDepth(700);

                }else{
                    
                    this.startText.text = questions[0].reply_wrong;
                    this.scene.start(`TheGallery`);
                }
                
        }


        //segundo cuadro NO FUNCIONA SE REPITE PIXEL 1
        nextClick(){
            this.paintingNormal.setDepth(0);
            this.next.disableInteractive().setDepth(0);
            this.respuesta1.setInteractive().on("pointerdown", () => this.respuestaClick2(1, this.respuestaCorrecta));
            this.respuesta2.setInteractive().on("pointerdown", () => this.respuestaClick2(2, this.respuestaCorrecta));
            let questions = this.cache.json.get('questions');
            this.next.disableInteractive().setDepth(0);
            this.next1.disableInteractive().setDepth(0);
            this.optionBox1.setDepth(600);
            this.optionBox2.setDepth(600); 

            this.start.setDepth(0);
            this.start.disableInteractive();
            this.paintingPixel1.setDepth(550);
            

            //esto carga el texto json
            this.respuesta1.text  = questions[1].respuesta_correcta;
            this.respuesta2.text  = questions[1].respuesta_incorrecta;

            this.respuesta1.setDepth(650);
            this.respuesta2.setDepth(650);
            
            this.respuestaCorrecta = 1;
        }
            respuestaClick2(respuesta, correcta){
                let questions = this.cache.json.get('questions');

                this.optionBox1.setDepth(0);
                this.optionBox2.setDepth(0);
                this.respuesta1.setDepth(0);
                this.respuesta2.setDepth(0);
                this.respuesta1.disableInteractive();
                this.respuesta2.disableInteractive();

                
                if(respuesta == correcta){
                    this.paintingNormal.setDepth(0);

                    this.paintingPixel1.setDepth(0);
                    this.paintingNormal1.setDepth(600).setScale(0.3); 
                    this.startText.text = questions[1].reply_right;
                    this.next1.setInteractive().setDepth(700);

                }else{
                    
                    this.startText.text = questions[1].reply_wrong;
                    this.scene.start(`TheGallery`);}}

            //tercer cuadro
            nextClick1(){
                let questions = this.cache.json.get('questions');
                this.paintingPixel2.setDepth(650);
                this.paintingNormal1.setDepth(0).setScale(0);
                this.next.disableInteractive().setDepth(0);
                this.next1.disableInteractive().setDepth(0).setScale(0);
                this.respuesta1.setInteractive().on("pointerdown", () => this.respuestaClick3(1, this.respuestaCorrecta));
                this.respuesta2.setInteractive().on("pointerdown", () => this.respuestaClick3(2, this.respuestaCorrecta));
                
                this.next1.disableInteractive().setDepth(0);
                this.optionBox1.setDepth(600);
                this.optionBox2.setDepth(600); 
                
                this.start.setDepth(0);
                this.start.disableInteractive();
                this.paintingPixel2.setDepth(600);
                this.paintingNormal2.setDepth(0);
    
                //esto carga el texto json
                this.respuesta1.text  = questions[2].respuesta_correcta;
                this.respuesta2.text  = questions[2].respuesta_incorrecta;
                this.next.disableInteractive().setDepth(0);
                this.next1.disableInteractive().setDepth(0).setScale(0);
                this.respuesta1.setDepth(650);
                this.respuesta2.setDepth(650);
                
                this.respuestaCorrecta = 1;
            }
                respuestaClick3(respuesta, correcta){
                    this.next.disableInteractive().setDepth(0);
                this.next1.disableInteractive().setDepth(0).setScale(0);
                this.paintingNormal1.setDepth(0).setScale(0);
                    let questions = this.cache.json.get('questions');
    
                    this.optionBox1.setDepth(0);
                    this.optionBox2.setDepth(0);
                    this.respuesta1.setDepth(0);
                    this.respuesta2.setDepth(0);
                    this.respuesta1.disableInteractive();
                    this.respuesta2.disableInteractive();
    
                    
                    if(respuesta == correcta){
                        this.paintingNormal2.setDepth(0);
                        this.paintingPixel2.setDepth(0);
                        this.paintingNormal2.setDepth(600).setScale(0.3); 
                        this.startText.text = questions[1].reply_right;
                        this.next.setInteractive().setDepth(700);
    
                    }else{
                        
                        this.startText.text = questions[1].reply_wrong;
                        this.scene.start(`TheGallery`);
    
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
    };

    var game = new Phaser.Game(config);
};
