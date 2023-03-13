import { importClass, JavaClass } from "java-bridge";
import { Iterator as java_util_Iterator } from "./../../util/Iterator";
import { Spliterator as java_util_Spliterator } from "./../../util/Spliterator";
import { Consumer as java_util_function_Consumer } from "./../../util/function/Consumer";

/**
 * This class just defines types, you should import DirectoryStream instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DirectoryStreamClass extends JavaClass {
    // ================== Method iterator ==================
    /**
     * @return original return type: 'java.util.Iterator'
     */
    public iterator(): Promise<java_util_Iterator | null>;
    // ================== Method iterator ==================
    /**
     * @return original return type: 'java.util.Iterator'
     */
    public iteratorSync(): java_util_Iterator | null;
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public close(): Promise<void>;
    // ================== Method close ==================
    /**
     * @return original return type: 'void'
     */
    public closeSync(): void;
    // ================== Method spliterator ==================
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    public spliterator(): Promise<java_util_Spliterator | null>;
    // ================== Method spliterator ==================
    /**
     * @return original return type: 'java.util.Spliterator'
     */
    public spliteratorSync(): java_util_Spliterator | null;
    // ================== Method forEach ==================
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEach(var0: java_util_function_Consumer | null): Promise<void>;
    // ================== Method forEach ==================
    /**
     * @param var0 original type: 'java.util.function.Consumer'
     * @return original return type: 'void'
     */
    public forEachSync(var0: java_util_function_Consumer | null): void;
}

/**
 * Class java.nio.file.DirectoryStream.
 *
 * This actually imports the java class for further use.
 * The class DirectoryStreamClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DirectoryStream extends importClass<typeof DirectoryStreamClass>("java.nio.file.DirectoryStream") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default DirectoryStream;