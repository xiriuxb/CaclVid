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
        return parseFloat(this.glassPieces.reduce((acc,currentElement)=>acc+currentElement.totalArea,0)).toFixed(2);
    }

    totalPriceA(){
        return parseFloat(this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceA, 0)).toFixed(2);
    }

    totalPriceB(){
        return parseFloat(this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceB, 0)).toFixed(2);
    }

    totalPriceC(){
        return parseFloat(this.glassPieces.reduce((acc, currentElement)=>acc+currentElement.totalPriceC, 0)).toFixed(2);
    }
}