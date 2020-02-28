export interface Book {
    id?: string;
    tag_id?: string;
    title?: string;
    // language?:String,
    genere?:string,
    academic_type?:string,
    academy_standard?:number,
    fields?:Array<any>;
    is_premium?:boolean;
    created_at?: Date;
}