import GlassPiece from "./GlassPiece";

const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 9);
  
    return `${timestamp}-${randomString}`;
  };

export default class Ventana {
    constructor (name, glassPieces){
        this.id = generateUniqueId();
        this.name = name;
        this.glassPieces = glassPieces;
    }

    setGlassPieces(newGlassPieces){
        this.glassPieces = newGlassPieces;
    }

    totalGlasses() {
        return this.glassPieces.reduce((acc, currentElement)=>acc+parseInt(currentElement.quantity), 0);
    }

    totalArea(){
        return this.glassPieces.reduce((acc,currentElement)=>acc+currentElement.totalArea,0);
    }

    totalPriceA(){
        return this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceA, 0);
    }

    totalPriceB(){
        return this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceB, 0);
    }

    totalPriceC(){
        return this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceC, 0);
    }
}