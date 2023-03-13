import { importClass, JavaClass } from "java-bridge";
import { File as java_io_File } from "./File";

/**
 * This class just defines types, you should import FilenameFilter instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class FilenameFilterClass extends JavaClass {
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    public accept(var0: java_io_File | null, var1: string | null): Promise<boolean>;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'java.io.File'
     * @param var1 original type: 'java.lang.String'
     * @return original return type: 'boolean'
     */
    public acceptSync(var0: java_io_File | null, var1: string | null): boolean;
}

/**
 * Class java.io.FilenameFilter.
 *
 * This actually imports the java class for further use.
 * The class FilenameFilterClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class FilenameFilter extends importClass<typeof FilenameFilterClass>("java.io.FilenameFilter") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default FilenameFilter;