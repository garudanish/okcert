import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { URL as java_net_URL } from "./../net/URL";
import { Certificate as java_security_cert_Certificate } from "./cert/Certificate";
import { CodeSigner as java_security_CodeSigner } from "./CodeSigner";
import { Long as java_lang_Long } from "./../lang/Long";
import { Integer as java_lang_Integer } from "./../lang/Integer";
import { Class as java_lang_Class } from "./../lang/Class";

/**
 * This class just defines types, you should import CodeSource instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class CodeSourceClass extends JavaClass {
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
    // ================== Method getLocation ==================
    /**
     * @return original return type: 'java.net.URL'
     */
    public getLocation(): Promise<java_net_URL | null>;
    // ================== Method getLocation ==================
    /**
     * @return original return type: 'java.net.URL'
     */
    public getLocationSync(): java_net_URL | null;
    // ================== Method getCertificates ==================
    /**
     * @return original return type: 'java.security.cert.Certificate[]'
     */
    public getCertificates(): Promise<(java_security_cert_Certificate | null)[] | null>;
    // ================== Method getCertificates ==================
    /**
     * @return original return type: 'java.security.cert.Certificate[]'
     */
    public getCertificatesSync(): (java_security_cert_Certificate | null)[] | null;
    // ================== Method implies ==================
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @return original return type: 'boolean'
     */
    public implies(var0: CodeSourceClass | null): Promise<boolean>;
    // ================== Method implies ==================
    /**
     * @param var0 original type: 'java.security.CodeSource'
     * @return original return type: 'boolean'
     */
    public impliesSync(var0: CodeSourceClass | null): boolean;
    // ================== Method getCodeSigners ==================
    /**
     * @return original return type: 'java.security.CodeSigner[]'
     */
    public getCodeSigners(): Promise<(java_security_CodeSigner | null)[] | null>;
    // ================== Method getCodeSigners ==================
    /**
     * @return original return type: 'java.security.CodeSigner[]'
     */
    public getCodeSignersSync(): (java_security_CodeSigner | null)[] | null;
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
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.cert.Certificate[]'
     * @return original return type: 'java.security.CodeSource'
     */
    public static newInstance(var0: java_net_URL | null, var1: (java_security_cert_Certificate | null)[] | null): Promise<CodeSource>;
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.CodeSigner[]'
     * @return original return type: 'java.security.CodeSource'
     */
    public static newInstance(var0: java_net_URL | null, var1: (java_security_CodeSigner | null)[] | null): Promise<CodeSource>;
    // ================== Constructors ==================
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.cert.Certificate[]'
     */
    public constructor(var0: java_net_URL | null, var1: (java_security_cert_Certificate | null)[] | null);
    /**
     * @param var0 original type: 'java.net.URL'
     * @param var1 original type: 'java.security.CodeSigner[]'
     */
    public constructor(var0: java_net_URL | null, var1: (java_security_CodeSigner | null)[] | null);
}

/**
 * Class java.security.CodeSource.
 *
 * This actually imports the java class for further use.
 * The class CodeSourceClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class CodeSource extends importClass<typeof CodeSourceClass>("java.security.CodeSource") {
}
export default CodeSource;