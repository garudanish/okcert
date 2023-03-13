import { importClass, JavaClass } from "java-bridge";
import { Long as java_lang_Long } from "./../../lang/Long";

/**
 * This class just defines types, you should import LongToDoubleFunction instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongToDoubleFunctionClass extends JavaClass {
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'double'
     */
    public applyAsDouble(var0: java_lang_Long | bigint | number): Promise<number>;
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'double'
     */
    public applyAsDoubleSync(var0: java_lang_Long | bigint | number): number;
}

/**
 * Class java.util.function.LongToDoubleFunction.
 *
 * This actually imports the java class for further use.
 * The class LongToDoubleFunctionClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class LongToDoubleFunction extends importClass<typeof LongToDoubleFunctionClass>("java.util.function.LongToDoubleFunction") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default LongToDoubleFunction;