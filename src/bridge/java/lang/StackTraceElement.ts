import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Long as java_lang_Long } from "./Long";
import { Integer as java_lang_Integer } from "./Integer";
import { Class as java_lang_Class } from "./Class";

/**
 * This class just defines types, you should import StackTraceElement instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class StackTraceElementClass extends JavaClass {
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
     * @return original return type: 'java.lang.String'
     */
    public toString(): Promise<string>;
    // ================== Method toString ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public toStringSync(): string;
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
    // ================== Method getFileName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getFileName(): Promise<string | null>;
    // ================== Method getFileName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getFileNameSync(): string | null;
    // ================== Method getLineNumber ==================
    /**
     * @return original return type: 'int'
     */
    public getLineNumber(): Promise<number>;
    // ================== Method getLineNumber ==================
    /**
     * @return original return type: 'int'
     */
    public getLineNumberSync(): number;
    // ================== Method getClassName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getClassName(): Promise<string | null>;
    // ================== Method getClassName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getClassNameSync(): string | null;
    // ================== Method getMethodName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getMethodName(): Promise<string | null>;
    // ================== Method getMethodName ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getMethodNameSync(): string | null;
    // ================== Method isNativeMethod ==================
    /**
     * @return original return type: 'boolean'
     */
    public isNativeMethod(): Promise<boolean>;
    // ================== Method isNativeMethod ==================
    /**
     * @return original return type: 'boolean'
     */
    public isNativeMethodSync(): boolean;
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
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     * @return original return type: 'java.lang.StackTraceElement'
     */
    public static newInstance(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number): Promise<StackTraceElement>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'int'
     */
    public constructor(var0: string | null, var1: string | null, var2: string | null, var3: java_lang_Integer | number);
}

/**
 * Class java.lang.StackTraceElement.
 *
 * This actually imports the java class for further use.
 * The class StackTraceElementClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class StackTraceElement extends importClass<typeof StackTraceElementClass>("java.lang.StackTraceElement") {
}
export default StackTraceElement;