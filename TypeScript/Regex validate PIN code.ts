// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// 检查长度再检查是否全是数字
export class Kata {
    static validatePin(pin: string): boolean {
      return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
      throw new Error("The method or operation is not implemented.");
    }
  }

// 直接检查是否满足格式要求，正则表达式可能不是非常直观

export class Kata {
    static pinFormat: RegExp = new RegExp(/^\d{4}(\d{2})?$/);
    
    static validatePin(pin: string): boolean {
      return Kata.pinFormat.test(pin);
    }
  }