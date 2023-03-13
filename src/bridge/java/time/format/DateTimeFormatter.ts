import { importClass, JavaClass, BasicOrJavaType } from "java-bridge";
import { Chronology as java_time_chrono_Chronology } from "./../chrono/Chronology";
import { ZoneId as java_time_ZoneId } from "./../ZoneId";
import { Locale as java_util_Locale } from "./../../util/Locale";
import { FormatStyle as java_time_format_FormatStyle } from "./FormatStyle";
import { TemporalQuery as java_time_temporal_TemporalQuery } from "./../temporal/TemporalQuery";
import { DecimalStyle as java_time_format_DecimalStyle } from "./DecimalStyle";
import { ResolverStyle as java_time_format_ResolverStyle } from "./ResolverStyle";
import { Set as java_util_Set } from "./../../util/Set";
import { TemporalField as java_time_temporal_TemporalField } from "./../temporal/TemporalField";
import { TemporalAccessor as java_time_temporal_TemporalAccessor } from "./../temporal/TemporalAccessor";
import { Appendable as java_lang_Appendable } from "./../../lang/Appendable";
import { CharSequence as java_lang_CharSequence } from "./../../lang/CharSequence";
import { ParsePosition as java_text_ParsePosition } from "./../../text/ParsePosition";
import { Format as java_text_Format } from "./../../text/Format";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";

/**
 * This class just defines types, you should import DateTimeFormatter instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DateTimeFormatterClass extends JavaClass {
    // ================== Field ISO_LOCAL_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_LOCAL_DATE: DateTimeFormatterClass | null;
    // ================== Field ISO_OFFSET_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_OFFSET_DATE: DateTimeFormatterClass | null;
    // ================== Field ISO_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_DATE: DateTimeFormatterClass | null;
    // ================== Field ISO_LOCAL_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_LOCAL_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_OFFSET_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_OFFSET_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_LOCAL_DATE_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_LOCAL_DATE_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_OFFSET_DATE_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_OFFSET_DATE_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_ZONED_DATE_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_ZONED_DATE_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_DATE_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_DATE_TIME: DateTimeFormatterClass | null;
    // ================== Field ISO_ORDINAL_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_ORDINAL_DATE: DateTimeFormatterClass | null;
    // ================== Field ISO_WEEK_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_WEEK_DATE: DateTimeFormatterClass | null;
    // ================== Field ISO_INSTANT ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly ISO_INSTANT: DateTimeFormatterClass | null;
    // ================== Field BASIC_ISO_DATE ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly BASIC_ISO_DATE: DateTimeFormatterClass | null;
    // ================== Field RFC_1123_DATE_TIME ==================
    /**
     * Original type: 'java.time.format.DateTimeFormatter'
     */
    public static readonly RFC_1123_DATE_TIME: DateTimeFormatterClass | null;
    // ================== Method getChronology ==================
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    public getChronology(): Promise<java_time_chrono_Chronology | null>;
    // ================== Method getChronology ==================
    /**
     * @return original return type: 'java.time.chrono.Chronology'
     */
    public getChronologySync(): java_time_chrono_Chronology | null;
    // ================== Method getZone ==================
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    public getZone(): Promise<java_time_ZoneId | null>;
    // ================== Method getZone ==================
    /**
     * @return original return type: 'java.time.ZoneId'
     */
    public getZoneSync(): java_time_ZoneId | null;
    // ================== Method withZone ==================
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withZone(var0: java_time_ZoneId | null): Promise<DateTimeFormatter | null>;
    // ================== Method withZone ==================
    /**
     * @param var0 original type: 'java.time.ZoneId'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withZoneSync(var0: java_time_ZoneId | null): DateTimeFormatter | null;
    // ================== Method ofPattern ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofPattern(var0: string | null): Promise<DateTimeFormatter | null>;
    // ================== Method ofPattern ==================
    /**
     * @param var0 original type: 'java.lang.String'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofPatternSync(var0: string | null): DateTimeFormatter | null;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofPattern(var0: string | null, var1: java_util_Locale | null): Promise<DateTimeFormatter | null>;
    /**
     * @param var0 original type: 'java.lang.String'
     * @param var1 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofPatternSync(var0: string | null, var1: java_util_Locale | null): DateTimeFormatter | null;
    // ================== Method ofLocalizedDate ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDate(var0: java_time_format_FormatStyle | null): Promise<DateTimeFormatter | null>;
    // ================== Method ofLocalizedDate ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDateSync(var0: java_time_format_FormatStyle | null): DateTimeFormatter | null;
    // ================== Method ofLocalizedTime ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedTime(var0: java_time_format_FormatStyle | null): Promise<DateTimeFormatter | null>;
    // ================== Method ofLocalizedTime ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedTimeSync(var0: java_time_format_FormatStyle | null): DateTimeFormatter | null;
    // ================== Method ofLocalizedDateTime ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDateTime(var0: java_time_format_FormatStyle | null): Promise<DateTimeFormatter | null>;
    // ================== Method ofLocalizedDateTime ==================
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDateTimeSync(var0: java_time_format_FormatStyle | null): DateTimeFormatter | null;
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @param var1 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDateTime(var0: java_time_format_FormatStyle | null, var1: java_time_format_FormatStyle | null): Promise<DateTimeFormatter | null>;
    /**
     * @param var0 original type: 'java.time.format.FormatStyle'
     * @param var1 original type: 'java.time.format.FormatStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public static ofLocalizedDateTimeSync(var0: java_time_format_FormatStyle | null, var1: java_time_format_FormatStyle | null): DateTimeFormatter | null;
    // ================== Method parsedExcessDays ==================
    /**
     * @return original return type: 'java.time.temporal.TemporalQuery'
     */
    public static parsedExcessDays(): Promise<java_time_temporal_TemporalQuery | null>;
    // ================== Method parsedExcessDays ==================
    /**
     * @return original return type: 'java.time.temporal.TemporalQuery'
     */
    public static parsedExcessDaysSync(): java_time_temporal_TemporalQuery | null;
    // ================== Method parsedLeapSecond ==================
    /**
     * @return original return type: 'java.time.temporal.TemporalQuery'
     */
    public static parsedLeapSecond(): Promise<java_time_temporal_TemporalQuery | null>;
    // ================== Method parsedLeapSecond ==================
    /**
     * @return original return type: 'java.time.temporal.TemporalQuery'
     */
    public static parsedLeapSecondSync(): java_time_temporal_TemporalQuery | null;
    // ================== Method getLocale ==================
    /**
     * @return original return type: 'java.util.Locale'
     */
    public getLocale(): Promise<java_util_Locale | null>;
    // ================== Method getLocale ==================
    /**
     * @return original return type: 'java.util.Locale'
     */
    public getLocaleSync(): java_util_Locale | null;
    // ================== Method withLocale ==================
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withLocale(var0: java_util_Locale | null): Promise<DateTimeFormatter | null>;
    // ================== Method withLocale ==================
    /**
     * @param var0 original type: 'java.util.Locale'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withLocaleSync(var0: java_util_Locale | null): DateTimeFormatter | null;
    // ================== Method getDecimalStyle ==================
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public getDecimalStyle(): Promise<java_time_format_DecimalStyle | null>;
    // ================== Method getDecimalStyle ==================
    /**
     * @return original return type: 'java.time.format.DecimalStyle'
     */
    public getDecimalStyleSync(): java_time_format_DecimalStyle | null;
    // ================== Method withDecimalStyle ==================
    /**
     * @param var0 original type: 'java.time.format.DecimalStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withDecimalStyle(var0: java_time_format_DecimalStyle | null): Promise<DateTimeFormatter | null>;
    // ================== Method withDecimalStyle ==================
    /**
     * @param var0 original type: 'java.time.format.DecimalStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withDecimalStyleSync(var0: java_time_format_DecimalStyle | null): DateTimeFormatter | null;
    // ================== Method withChronology ==================
    /**
     * @param var0 original type: 'java.time.chrono.Chronology'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withChronology(var0: java_time_chrono_Chronology | null): Promise<DateTimeFormatter | null>;
    // ================== Method withChronology ==================
    /**
     * @param var0 original type: 'java.time.chrono.Chronology'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withChronologySync(var0: java_time_chrono_Chronology | null): DateTimeFormatter | null;
    // ================== Method getResolverStyle ==================
    /**
     * @return original return type: 'java.time.format.ResolverStyle'
     */
    public getResolverStyle(): Promise<java_time_format_ResolverStyle | null>;
    // ================== Method getResolverStyle ==================
    /**
     * @return original return type: 'java.time.format.ResolverStyle'
     */
    public getResolverStyleSync(): java_time_format_ResolverStyle | null;
    // ================== Method withResolverStyle ==================
    /**
     * @param var0 original type: 'java.time.format.ResolverStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverStyle(var0: java_time_format_ResolverStyle | null): Promise<DateTimeFormatter | null>;
    // ================== Method withResolverStyle ==================
    /**
     * @param var0 original type: 'java.time.format.ResolverStyle'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverStyleSync(var0: java_time_format_ResolverStyle | null): DateTimeFormatter | null;
    // ================== Method getResolverFields ==================
    /**
     * @return original return type: 'java.util.Set'
     */
    public getResolverFields(): Promise<java_util_Set | null>;
    // ================== Method getResolverFields ==================
    /**
     * @return original return type: 'java.util.Set'
     */
    public getResolverFieldsSync(): java_util_Set | null;
    // ================== Method withResolverFields ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField[]'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverFields(var0: (java_time_temporal_TemporalField | null)[] | null): Promise<DateTimeFormatter | null>;
    // ================== Method withResolverFields ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalField[]'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverFieldsSync(var0: (java_time_temporal_TemporalField | null)[] | null): DateTimeFormatter | null;
    /**
     * @param var0 original type: 'java.util.Set'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverFields(var0: java_util_Set | null): Promise<DateTimeFormatter | null>;
    /**
     * @param var0 original type: 'java.util.Set'
     * @return original return type: 'java.time.format.DateTimeFormatter'
     */
    public withResolverFieldsSync(var0: java_util_Set | null): DateTimeFormatter | null;
    // ================== Method formatTo ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @param var1 original type: 'java.lang.Appendable'
     * @return original return type: 'void'
     */
    public formatTo(var0: java_time_temporal_TemporalAccessor | null, var1: java_lang_Appendable | null): Promise<void>;
    // ================== Method formatTo ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @param var1 original type: 'java.lang.Appendable'
     * @return original return type: 'void'
     */
    public formatToSync(var0: java_time_temporal_TemporalAccessor | null, var1: java_lang_Appendable | null): void;
    // ================== Method parseBest ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.temporal.TemporalQuery[]'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseBest(var0: java_lang_CharSequence | null, var1: (java_time_temporal_TemporalQuery | null)[] | null): Promise<java_time_temporal_TemporalAccessor | null>;
    // ================== Method parseBest ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.temporal.TemporalQuery[]'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseBestSync(var0: java_lang_CharSequence | null, var1: (java_time_temporal_TemporalQuery | null)[] | null): java_time_temporal_TemporalAccessor | null;
    // ================== Method parseUnresolved ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.text.ParsePosition'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseUnresolved(var0: java_lang_CharSequence | null, var1: java_text_ParsePosition | null): Promise<java_time_temporal_TemporalAccessor | null>;
    // ================== Method parseUnresolved ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.text.ParsePosition'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseUnresolvedSync(var0: java_lang_CharSequence | null, var1: java_text_ParsePosition | null): java_time_temporal_TemporalAccessor | null;
    // ================== Method toFormat ==================
    /**
     * @return original return type: 'java.text.Format'
     */
    public toFormat(): Promise<java_text_Format | null>;
    // ================== Method toFormat ==================
    /**
     * @return original return type: 'java.text.Format'
     */
    public toFormatSync(): java_text_Format | null;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.text.Format'
     */
    public toFormat(var0: java_time_temporal_TemporalQuery | null): Promise<java_text_Format | null>;
    /**
     * @param var0 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.text.Format'
     */
    public toFormatSync(var0: java_time_temporal_TemporalQuery | null): java_text_Format | null;
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
    // ================== Method format ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.lang.String'
     */
    public format(var0: java_time_temporal_TemporalAccessor | null): Promise<string | null>;
    // ================== Method format ==================
    /**
     * @param var0 original type: 'java.time.temporal.TemporalAccessor'
     * @return original return type: 'java.lang.String'
     */
    public formatSync(var0: java_time_temporal_TemporalAccessor | null): string | null;
    // ================== Method parse ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    public parse(var0: java_lang_CharSequence | null, var1: java_time_temporal_TemporalQuery | null): Promise<BasicOrJavaType | null>;
    // ================== Method parse ==================
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.time.temporal.TemporalQuery'
     * @return original return type: 'java.lang.Object'
     */
    public parseSync(var0: java_lang_CharSequence | null, var1: java_time_temporal_TemporalQuery | null): BasicOrJavaType | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.text.ParsePosition'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parse(var0: java_lang_CharSequence | null, var1: java_text_ParsePosition | null): Promise<java_time_temporal_TemporalAccessor | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @param var1 original type: 'java.text.ParsePosition'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseSync(var0: java_lang_CharSequence | null, var1: java_text_ParsePosition | null): java_time_temporal_TemporalAccessor | null;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parse(var0: java_lang_CharSequence | null): Promise<java_time_temporal_TemporalAccessor | null>;
    /**
     * @param var0 original type: 'java.lang.CharSequence'
     * @return original return type: 'java.time.temporal.TemporalAccessor'
     */
    public parseSync(var0: java_lang_CharSequence | null): java_time_temporal_TemporalAccessor | null;
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
}

/**
 * Class java.time.format.DateTimeFormatter.
 *
 * This actually imports the java class for further use.
 * The class DateTimeFormatterClass only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export class DateTimeFormatter extends importClass<typeof DateTimeFormatterClass>("java.time.format.DateTimeFormatter") {
}
export default DateTimeFormatter;