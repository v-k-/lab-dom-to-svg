let tela = new p5((p) => {
            // if needed later a ref
            let cv = null;


            p.setup = () => {
              cv  = p.createCanvas(200,200)

 
            } //||\\ setup

            p.draw = () => {

              //just something animated to see if it is working
              // delete and startover :)

              let seno = p.sin (p.abs(p.radians(p.millis()/10)))*205;
              let coseno = p.sin (p.abs(p.radians(p.millis()/5)))*205;


              p.background(255 - coseno, coseno, seno) ;

            } //||\\draw





        } //||\\ p
        , 'div-ref') //||\\ p5  