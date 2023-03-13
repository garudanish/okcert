import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Provider as java_security_Provider } from "./Provider";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";
import { List as java_util_List } from "./../util/List";
import { Map as java_util_Map } from "./../util/Map";

/**
 * This class just defines types, you should import Provider$Service instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class Provider$ServiceClass extends JavaClass {
    // ================== Method getAlgorithm ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getAlgorithm(): Promise<string | null>;
    // ================== Method getAlgorithm ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getAlgorithmSync(): string | null;
    // ================== Method getProvider ==================
    /**
     * @return original return type: 'java.security.Provider'
     */
    public getProvider(): Promise<java_security_Provider | null>;
    // ================== Method getProvider ==================
    /**
     * @return original return type: 'java.security.Provider'
     */
    public getProviderSync(): java_security_Provider | null;
    // ================== Method supportsParameter ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public supportsParameter(var0: BasicOrJavaType | null): Promise<boolean>;
    // ================== Method supportsParameter ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    public supportsParameterSync(var0: BasicOrJavaType | null): boolean;
    // ================== Method getAttribute ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    public getAttribute(var0: string | null): Promise<string | null>;
    // ================== Method getAttribute ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.lang.String'
     */
    public getAttributeSync(var0: string | null): string | null;
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
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public newInstance(var0: BasicOrJavaType | null): Promise<BasicOrJavaType | null>;
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'java.lang.Object'
     */
    public newInstanceSync(var0: BasicOrJavaType | null): BasicOrJavaType | null;
    // ================== Method getType ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getType(): Promise<string | null>;
    // ================== Method getType ==================
    /**
     * @return original return type: 'java.lang.String'
     */
    public getTypeSync(): string | null;
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
    // ================== Method newInstance ==================
    /**
     * @param var0 original type: 'java.security.Provider'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.util.List'
     * @param var5 original type: 'java.util.Map'
     * @return original return type: 'java.security.Provider$Service'
     */
    public static newInstance(var0: java_security_Provider | null, var1: string | null, var2: string | null, var3: string | null, var4: java_util_List | null, var5: java_util_Map | null): Promise<Provider$Service>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.security.Provider'
     * @param var1 original type: 'java.lang.String'
     * @param var2 original type: 'java.lang.String'
     * @param var3 original type: 'java.lang.String'
     * @param var4 original type: 'java.util.List'
     * @param var5 original type: 'java.util.Map'
     */
    public constructor(var0: java_security_Provider | null, var1: string | null, var2: string | null, var3: string | null, var4: java_util_List | null, var5: java_util_Map | null);
}

/**
 * Class java.security.Provider$Service.
 *
 * This actually imports the java class for further use.
 * The class Provider$ServiceClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class Provider$Service extends importClass<typeof Provider$ServiceClass>("java.security.Provider$Service") {
}
export default Provider$Service;