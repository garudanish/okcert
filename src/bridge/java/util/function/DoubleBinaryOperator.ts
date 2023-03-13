import { importClass, JavaClass } from "java-bridge";
import { Double as java_lang_Double } from "./../../lang/Double";

/**
 * This class just defines types, you should import DoubleBinaryOperator instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DoubleBinaryOperatorClass extends JavaClass {
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    public applyAsDouble(var0: java_lang_Double | number, var1: java_lang_Double | number): Promise<number>;
    // ================== Method applyAsDouble ==================
    /**
     * @param var0 original type: 'double'
     * @param var1 original type: 'double'
     * @return original return type: 'double'
     */
    public applyAsDoubleSync(var0: java_lang_Double | number, var1: java_lang_Double | number): number;
}

/**
 * Class java.util.function.DoubleBinaryOperator.
 *
 * This actually imports the java class for further use.
 * The class DoubleBinaryOperatorClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DoubleBinaryOperator extends importClass<typeof DoubleBinaryOperatorClass>("java.util.function.DoubleBinaryOperator") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default DoubleBinaryOperator;