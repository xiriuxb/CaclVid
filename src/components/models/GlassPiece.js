const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 9);
  
    return `${timestamp}-${randomString}`;
  };

export default class GlassPiece {
    constructor (height, width, quantity, glassType){
        this.id = generateUniqueId();
        this.height = height;
        this.width = width;
        this.quantity = quantity ? quantity : 1;
        this.glassType = glassType.name;
        this.individualArea = parseFloat((Math.ceil(this.width/10)*Math.ceil(this.height/10))/100);
        this.totalArea = parseFloat(this.individualArea * this.quantity);
        this.individualPriceA = parseFloat(this.individualArea * glassType.meterPriceA);
        this.individualPriceB = glassType.meterPriceB && parseFloat(this.individualArea * glassType.meterPriceB);
        this.individualPriceC = glassType.meterPriceC && parseFloat(this.individualArea * glassType.meterPriceC);
        this.totalPriceA = parseFloat(parseFloat(this.individualPriceA) * parseFloat(this.quantity));
        this.totalPriceB = this.individualPriceB && parseFloat(this.individualPriceB * this.quantity);
        this.totalPriceC = this.individualPriceC && parseFloat(this.individualPriceC * this.quantity);
    }
}