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
        this.individualArea = parseFloat((Math.ceil(this.width/10)*Math.ceil(this.height/10))/100).toFixed(2);
        this.totalArea = parseFloat(this.individualArea * this.quantity).toFixed(2);
        this.individualPriceA = parseFloat(this.individualArea * glassType.meterPriceA).toFixed(2);
        this.individualPriceB = glassType.meterPriceB && this.individualArea * glassType.meterPriceB;
        this.individualPriceC = glassType.meterPriceC && this.individualArea * glassType.meterPriceC;
        this.totalPriceA = parseFloat(parseFloat(this.individualPriceA) * parseFloat(this.quantity)).toFixed(2);
        this.totalPriceB = this.individualPriceB && this.individualPriceB * this.quantity;
        this.totalPriceC = this.individualPriceC && this.individualPriceC * this.quantity;
    }
}