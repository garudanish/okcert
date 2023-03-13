import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Class as java_lang_Class } from "./Class";
import { Long as java_lang_Long } from "./Long";

/**
 * This class just defines types, you should import Integer instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class IntegerClass extends JavaClass {
    // ================== Field MIN_VALUE ==================
    /**
     * Original type: 'int'
     */
    public static readonly MIN_VALUE: IntegerClass | number;
    // ================== Field MAX_VALUE ==================
    /**
     * Original type: 'int'
     */
    public static readonly MAX_VALUE: IntegerClass | number;
    // ================== Field TYPE ==================
    /**
     * Original type: 'java.lang.Class'
     */
    public static readonly TYPE: java_lang_Class | null;
    // ================== Field SIZE ==================
    /**
     * Original type: 'int'
     */
    public static readonly SIZE: IntegerClass | number;
    // ================== Field BYTES ==================
    /**
     * Original type: 'int'
     */
    public static readonly BYTES: IntegerClass | number;
    // ================== Method numberOfLeadingZeros ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static numberOfLeadingZeros(var0: IntegerClass | number): Promise<number>;
    // ================== Method numberOfLeadingZeros ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static numberOfLeadingZerosSync(var0: IntegerClass | number): number;
    // ================== Method numberOfTrailingZeros ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static numberOfTrailingZeros(var0: IntegerClass | number): Promise<number>;
    // ================== Method numberOfTrailingZeros ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static numberOfTrailingZerosSync(var0: IntegerClass | number): number;
    // ================== Method bitCount ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static bitCount(var0: IntegerClass | number): Promise<number>;
    // ================== Method bitCount ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static bitCountSync(var0: IntegerClass | number): number;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equals(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method equals ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public equalsSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method toString ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toString(var0: IntegerClass | number, var1: IntegerClass | number): Promise<string>;
    // ================== Method toString ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toStringSync(var0: IntegerClass | number, var1: IntegerClass | number): string;
    /**
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toString(var0: IntegerClass | number): Promise<string>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toStringSync(var0: IntegerClass | number): string;
    // ================== Method hashCode ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static hashCode(var0: IntegerClass | number): Promise<number>;
    // ================== Method hashCode ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static hashCodeSync(var0: IntegerClass | number): number;
    /**
     * @return original return type: 'int'
     */
    public hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    public hashCodeSync(): number;
    // ================== Method min ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static min(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method min ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static minSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method max ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static max(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method max ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static maxSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method reverseBytes ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static reverseBytes(var0: IntegerClass | number): Promise<number>;
    // ================== Method reverseBytes ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static reverseBytesSync(var0: IntegerClass | number): number;
    // ================== Method compareTo ==================
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'int'
     */
    public compareTo(var0: IntegerClass | number | null): Promise<number>;
    // ================== Method compareTo ==================
    /**
     * @param var0 original type: 'java.lang.Integer'
     * @return original return type: 'int'
     */
    public compareToSync(var0: IntegerClass | number | null): number;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compareTo(var0: BasicOrJavaType | null): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'int'
     */
    public compareToSync(var0: BasicOrJavaType | null): number;
    // ================== Method byteValue ==================
    /**
     * @return original return type: 'byte'
     */
    public byteValue(): Promise<number>;
    // ================== Method byteValue ==================
    /**
     * @return original return type: 'byte'
     */
    public byteValueSync(): number;
    // ================== Method shortValue ==================
    /**
     * @return original return type: 'short'
     */
    public shortValue(): Promise<number>;
    // ================== Method shortValue ==================
    /**
     * @return original return type: 'short'
     */
    public shortValueSync(): number;
    // ================== Method intValue ==================
    /**
     * @return original return type: 'int'
     */
    public intValue(): Promise<number>;
    // ================== Method intValue ==================
    /**
     * @return original return type: 'int'
     */
    public intValueSync(): number;
    // ================== Method longValue ==================
    /**
     * @return original return type: 'long'
     */
    public longValue(): Promise<number>;
    // ================== Method longValue ==================
    /**
     * @return original return type: 'long'
     */
    public longValueSync(): number;
    // ================== Method floatValue ==================
    /**
     * @return original return type: 'float'
     */
    public floatValue(): Promise<number>;
    // ================== Method floatValue ==================
    /**
     * @return original return type: 'float'
     */
    public floatValueSync(): number;
    // ================== Method doubleValue ==================
    /**
     * @return original return type: 'double'
     */
    public doubleValue(): Promise<number>;
    // ================== Method doubleValue ==================
    /**
     * @return original return type: 'double'
     */
    public doubleValueSync(): number;
    // ================== Method valueOf ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOf(var0: IntegerClass | number): Promise<number | null>;
    // ================== Method valueOf ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOfSync(var0: IntegerClass | number): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOf(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOfSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOf(var0: string | null, var1: IntegerClass | number): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static valueOfSync(var0: string | null, var1: IntegerClass | number): number | null;
    // ================== Method toHexString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toHexString(var0: IntegerClass | number): Promise<string | null>;
    // ================== Method toHexString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toHexStringSync(var0: IntegerClass | number): string | null;
    // ================== Method decode ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static decode(var0: string | null): Promise<number | null>;
    // ================== Method decode ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static decodeSync(var0: string | null): number | null;
    // ================== Method compare ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static compare(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method compare ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static compareSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method reverse ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static reverse(var0: IntegerClass | number): Promise<number>;
    // ================== Method reverse ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static reverseSync(var0: IntegerClass | number): number;
    // ================== Method sum ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static sum(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method sum ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static sumSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method toUnsignedLong ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'long'
     */
    public static toUnsignedLong(var0: IntegerClass | number): Promise<number>;
    // ================== Method toUnsignedLong ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'long'
     */
    public static toUnsignedLongSync(var0: IntegerClass | number): number;
    // ================== Method parseInt ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public static parseInt(var0: string | null): Promise<number>;
    // ================== Method parseInt ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public static parseIntSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static parseInt(var0: string | null, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static parseIntSync(var0: string | null, var1: IntegerClass | number): number;
    // ================== Method toUnsignedString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toUnsignedString(var0: IntegerClass | number): Promise<string | null>;
    // ================== Method toUnsignedString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toUnsignedStringSync(var0: IntegerClass | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toUnsignedString(var0: IntegerClass | number, var1: IntegerClass | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toUnsignedStringSync(var0: IntegerClass | number, var1: IntegerClass | number): string | null;
    // ================== Method toOctalString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toOctalString(var0: IntegerClass | number): Promise<string | null>;
    // ================== Method toOctalString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toOctalStringSync(var0: IntegerClass | number): string | null;
    // ================== Method toBinaryString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toBinaryString(var0: IntegerClass | number): Promise<string | null>;
    // ================== Method toBinaryString ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public static toBinaryStringSync(var0: IntegerClass | number): string | null;
    // ================== Method parseUnsignedInt ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public static parseUnsignedInt(var0: string | null): Promise<number>;
    // ================== Method parseUnsignedInt ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public static parseUnsignedIntSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static parseUnsignedInt(var0: string | null, var1: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static parseUnsignedIntSync(var0: string | null, var1: IntegerClass | number): number;
    // ================== Method getInteger ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static getInteger(var0: string | null, var1: IntegerClass | number): Promise<number | null>;
    // ================== Method getInteger ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static getIntegerSync(var0: string | null, var1: IntegerClass | number): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static getInteger(var0: string | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static getIntegerSync(var0: string | null): number | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    public static getInteger(var0: string | null, var1: IntegerClass | number | null): Promise<number | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.Integer'
     * @return original return type: 'java.lang.Integer'
     */
    public static getIntegerSync(var0: string | null, var1: IntegerClass | number | null): number | null;
    // ================== Method compareUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static compareUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method compareUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static compareUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method divideUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static divideUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method divideUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static divideUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method remainderUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static remainderUnsigned(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method remainderUnsigned ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static remainderUnsignedSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method highestOneBit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static highestOneBit(var0: IntegerClass | number): Promise<number>;
    // ================== Method highestOneBit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static highestOneBitSync(var0: IntegerClass | number): number;
    // ================== Method lowestOneBit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static lowestOneBit(var0: IntegerClass | number): Promise<number>;
    // ================== Method lowestOneBit ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static lowestOneBitSync(var0: IntegerClass | number): number;
    // ================== Method rotateLeft ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static rotateLeft(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method rotateLeft ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static rotateLeftSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method rotateRight ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static rotateRight(var0: IntegerClass | number, var1: IntegerClass | number): Promise<number>;
    // ================== Method rotateRight ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public static rotateRightSync(var0: IntegerClass | number, var1: IntegerClass | number): number;
    // ================== Method signum ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static signum(var0: IntegerClass | number): Promise<number>;
    // ================== Method signum ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public static signumSync(var0: IntegerClass | number): number;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number, var1: IntegerClass | number): Promise<void>;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number, var1: IntegerClass | number): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @return original return type: 'void'
     */
    public wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    public waitSync(): void;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClass(): Promise<java_lang_Class>;
    // ================== Method getClass ==================
    /**
     * @return original return type: 'java.lang.Class'
     */
    public getClassSync(): java_lang_Class;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notify(): Promise<void>;
    // ================== Method notify ==================
    /**
     * @return original return type: 'void'
     */
    public notifySync(): void;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAll(): Promise<void>;
    // ================== Method notifyAll ==================
    /**
     * @return original return type: 'void'
     */
    public notifyAllSync(): void;
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.Integer'
     */
    public static newInstance(var0: IntegerClass | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.Integer'
     */
    public static newInstance(var0: string | null): Promise<number>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'int'
     */
    public constructor(var0: IntegerClass | number);
    /**
     * @param var0 original type: 'java.lang.String'
     */
    public constructor(var0: string | null);
}

/**
 * Class java.lang.Integer.
 *
 * This actually imports the java class for further use.
 * The class IntegerClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Integer extends importClass<typeof IntegerClass>("java.lang.Integer") {
}
export default Integer;