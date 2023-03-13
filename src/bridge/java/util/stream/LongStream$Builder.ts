import { importClass, JavaClass } from "java-bridge";
import { LongStream as java_util_stream_LongStream } from "./LongStream";
import { Long as java_lang_Long } from "./../../lang/Long";
import { LongConsumer as java_util_function_LongConsumer } from "./../function/LongConsumer";

/**
 * This class just defines types, you should import LongStream$Builder instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class LongStream$BuilderClass extends JavaClass {
    // ================== Method build ==================
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    public build(): Promise<java_util_stream_LongStream | null>;
    // ================== Method build ==================
    /**
     * @return original return type: 'java.util.stream.LongStream'
     */
    public buildSync(): java_util_stream_LongStream | null;
    // ================== Method add ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    public add(var0: java_lang_Long | bigint | number): Promise<LongStream$Builder | null>;
    // ================== Method add ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'java.util.stream.LongStream$Builder'
     */
    public addSync(var0: java_lang_Long | bigint | number): LongStream$Builder | null;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public accept(var0: java_lang_Long | bigint | number): Promise<void>;
    // ================== Method accept ==================
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    public acceptSync(var0: java_lang_Long | bigint | number): void;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    public andThen(var0: java_util_function_LongConsumer | null): Promise<java_util_function_LongConsumer | null>;
    // ================== Method andThen ==================
    /**
     * @param var0 original type: 'java.util.function.LongConsumer'
     * @return original return type: 'java.util.function.LongConsumer'
     */
    public andThenSync(var0: java_util_function_LongConsumer | null): java_util_function_LongConsumer | null;
}

/**
 * Class java.util.stream.LongStream$Builder.
 *
 * This actually imports the java class for further use.
 * The class LongStream$BuilderClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class LongStream$Builder extends importClass<typeof LongStream$BuilderClass>("java.util.stream.LongStream$Builder") {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor() {
        super();
    }
}
export default LongStream$Builder;