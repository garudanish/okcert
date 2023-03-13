import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { CharSequence as java_lang_CharSequence } from "./CharSequence";
import { Integer as java_lang_Integer } from "./Integer";
import { Boolean as java_lang_Boolean } from "./Boolean";
import { StringBuffer as java_lang_StringBuffer } from "./StringBuffer";
import { Double as java_lang_Double } from "./Double";
import { Appendable as java_lang_Appendable } from "./Appendable";
import { Long as java_lang_Long } from "./Long";
import { Float as java_lang_Float } from "./Float";
import { Class as java_lang_Class } from "./Class";
import { IntStream as java_util_stream_IntStream } from "./../util/stream/IntStream";

/**
 * This class just defines types, you should import AbstractStringBuilder instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class AbstractStringBuilderClass extends JavaClass {
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
    // ================== Method append ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_CharSequence | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    // ================== Method append ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_CharSequence | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: (string | null)[] | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: (string | null)[] | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char[]'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: (string | null)[] | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_Boolean | boolean): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_Boolean | boolean): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.StringBuffer'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_StringBuffer | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.StringBuffer'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_StringBuffer | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_CharSequence | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_CharSequence | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_Double | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_Double | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.Appendable'
     */
    public append(var0: string | null): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.Appendable'
     */
    public appendSync(var0: string | null): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.Appendable'
     */
    public append(var0: java_lang_CharSequence | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'int'
     * @param var2 original type: 'int'
     * @return original return type: 'java.lang.Appendable'
     */
    public appendSync(var0: java_lang_CharSequence | null, var1: java_lang_Integer | number, var2: java_lang_Integer | number): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.Appendable'
     */
    public append(var0: java_lang_CharSequence | null): Promise<java_lang_Appendable | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.Appendable'
     */
    public appendSync(var0: java_lang_CharSequence | null): java_lang_Appendable | null;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_Long | bigint | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_Long | bigint | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: java_lang_Float | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: java_lang_Float | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public append(var0: BasicOrJavaType | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendSync(var0: BasicOrJavaType | null): AbstractStringBuilder | null;
    // ================== Method indexOf ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public indexOf(var0: string | null): Promise<number>;
    // ================== Method indexOf ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public indexOfSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public indexOf(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public indexOfSync(var0: string | null, var1: java_lang_Integer | number): number;
    // ================== Method length ==================
    /**
     * @return original return type: 'int'
     */
    public length(): Promise<number>;
    // ================== Method length ==================
    /**
     * @return original return type: 'int'
     */
    public lengthSync(): number;
    // ================== Method charAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'char'
     */
    public charAt(var0: java_lang_Integer | number): Promise<string | null>;
    // ================== Method charAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'char'
     */
    public charAtSync(var0: java_lang_Integer | number): string | null;
    // ================== Method codePointAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointAt(var0: java_lang_Integer | number): Promise<number>;
    // ================== Method codePointAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointAtSync(var0: java_lang_Integer | number): number;
    // ================== Method codePointBefore ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointBefore(var0: java_lang_Integer | number): Promise<number>;
    // ================== Method codePointBefore ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointBeforeSync(var0: java_lang_Integer | number): number;
    // ================== Method codePointCount ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointCount(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    // ================== Method codePointCount ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public codePointCountSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    // ================== Method offsetByCodePoints ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public offsetByCodePoints(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<number>;
    // ================== Method offsetByCodePoints ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public offsetByCodePointsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): number;
    // ================== Method getChars ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    public getChars(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (string | null)[] | null, var3: java_lang_Integer | number): Promise<void>;
    // ================== Method getChars ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'char[]'
     * @param var3 original type: 'int'
     * @return original return type: 'void'
     */
    public getCharsSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: (string | null)[] | null, var3: java_lang_Integer | number): void;
    // ================== Method lastIndexOf ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public lastIndexOf(var0: string | null): Promise<number>;
    // ================== Method lastIndexOf ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'int'
     */
    public lastIndexOfSync(var0: string | null): number;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public lastIndexOf(var0: string | null, var1: java_lang_Integer | number): Promise<number>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'int'
     * @return original return type: 'int'
     */
    public lastIndexOfSync(var0: string | null, var1: java_lang_Integer | number): number;
    // ================== Method substring ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public substring(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<string | null>;
    // ================== Method substring ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public substringSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): string | null;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public substring(var0: java_lang_Integer | number): Promise<string | null>;
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.String'
     */
    public substringSync(var0: java_lang_Integer | number): string | null;
    // ================== Method subSequence ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.CharSequence'
     */
    public subSequence(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<java_lang_CharSequence | null>;
    // ================== Method subSequence ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.CharSequence'
     */
    public subSequenceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): java_lang_CharSequence | null;
    // ================== Method replace ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public replace(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null): Promise<AbstractStringBuilder | null>;
    // ================== Method replace ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @param var2 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public replaceSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number, var2: string | null): AbstractStringBuilder | null;
    // ================== Method delete ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public delete(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    // ================== Method delete ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public deleteSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): AbstractStringBuilder | null;
    // ================== Method insert ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    // ================== Method insert ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_CharSequence | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_CharSequence | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'boolean'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_Boolean | boolean): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: BasicOrJavaType | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_Double | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'double'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_Double | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_Float | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'float'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_Float | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'long'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_Long | bigint | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: (string | null)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @param var2 original type: 'int'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: (string | null)[] | null, var2: java_lang_Integer | number, var3: java_lang_Integer | number): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: string | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: string | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: java_lang_CharSequence | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: java_lang_CharSequence | null): AbstractStringBuilder | null;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insert(var0: java_lang_Integer | number, var1: (string | null)[] | null): Promise<AbstractStringBuilder | null>;
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char[]'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public insertSync(var0: java_lang_Integer | number, var1: (string | null)[] | null): AbstractStringBuilder | null;
    // ================== Method capacity ==================
    /**
     * @return original return type: 'int'
     */
    public capacity(): Promise<number>;
    // ================== Method capacity ==================
    /**
     * @return original return type: 'int'
     */
    public capacitySync(): number;
    // ================== Method ensureCapacity ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public ensureCapacity(var0: java_lang_Integer | number): Promise<void>;
    // ================== Method ensureCapacity ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public ensureCapacitySync(var0: java_lang_Integer | number): void;
    // ================== Method trimToSize ==================
    /**
     * @return original return type: 'void'
     */
    public trimToSize(): Promise<void>;
    // ================== Method trimToSize ==================
    /**
     * @return original return type: 'void'
     */
    public trimToSizeSync(): void;
    // ================== Method setLength ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public setLength(var0: java_lang_Integer | number): Promise<void>;
    // ================== Method setLength ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'void'
     */
    public setLengthSync(var0: java_lang_Integer | number): void;
    // ================== Method setCharAt ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'void'
     */
    public setCharAt(var0: java_lang_Integer | number, var1: string | null): Promise<void>;
    // ================== Method setCharAt ==================
    /**
     * @param var0 original type: 'int'
     * @param var1 original type: 'char'
     * @return original return type: 'void'
     */
    public setCharAtSync(var0: java_lang_Integer | number, var1: string | null): void;
    // ================== Method appendCodePoint ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendCodePoint(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    // ================== Method appendCodePoint ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public appendCodePointSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    // ================== Method deleteCharAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public deleteCharAt(var0: java_lang_Integer | number): Promise<AbstractStringBuilder | null>;
    // ================== Method deleteCharAt ==================
    /**
     * @param var0 original type: 'int'
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public deleteCharAtSync(var0: java_lang_Integer | number): AbstractStringBuilder | null;
    // ================== Method reverse ==================
    /**
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public reverse(): Promise<AbstractStringBuilder | null>;
    // ================== Method reverse ==================
    /**
     * @return original return type: 'java.lang.AbstractStringBuilder'
     */
    public reverseSync(): AbstractStringBuilder | null;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    // ================== Method wait ==================
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    public waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
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
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCode(): Promise<number>;
    // ================== Method hashCode ==================
    /**
     * @return original return type: 'int'
     */
    public hashCodeSync(): number;
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
    // ================== Method chars ==================
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    public chars(): Promise<java_util_stream_IntStream | null>;
    // ================== Method chars ==================
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    public charsSync(): java_util_stream_IntStream | null;
    // ================== Method codePoints ==================
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    public codePoints(): Promise<java_util_stream_IntStream | null>;
    // ================== Method codePoints ==================
    /**
     * @return original return type: 'java.util.stream.IntStream'
     */
    public codePointsSync(): java_util_stream_IntStream | null;
}

/**
 * Class java.lang.AbstractStringBuilder.
 *
 * This actually imports the java class for further use.
 * The class AbstractStringBuilderClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class AbstractStringBuilder extends importClass<typeof AbstractStringBuilderClass>("java.lang.AbstractStringBuilder") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default AbstractStringBuilder;