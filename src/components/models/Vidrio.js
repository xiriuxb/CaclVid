const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 9);
  
    return `${timestamp}-${randomString}`;
  };

export default class Vidrio {
    constructor (name, height, width, totalPrice, meterPriceA, meterPriceB, meterPriceC){
        this.id = generateUniqueId();
        this.name = name;
        this.height = height ? height : 0;
        this.width = width ? width : 0;
        this.totalPrice = totalPrice ? totalPrice : 0;
        this.meterPriceA = meterPriceA;
        this.meterPriceB = meterPriceB ? meterPriceB : 0;
        this.meterPriceC = meterPriceC ? meterPriceC : 0;
    }
}