

const BASE_URL = "https://baylor-board.herokuapp.com/"


var SLIDE = 2000

var INTV = 6000

class config {

    geturl(){

        return BASE_URL;
        
    }

    setslide(s){

        SLIDE = s;
        
    }

    getslide(){

        return SLIDE;
        
    }

    setintv(s){

        INTV = s;
        
    }

    getintv(){

        return INTV;
        
    }

}

export default new config()