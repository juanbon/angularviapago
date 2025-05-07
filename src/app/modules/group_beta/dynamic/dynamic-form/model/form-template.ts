import { FieldBase } from "./field-base";

export class FormTemplate {
    fields: FieldBase<any>[];
    title: string;
    action: ACTION_FORM;
    post_url: string;
    show_url: string;
    id?: number;
    logs_url?: string;
    maxlength?: number;
  
    constructor(
        fields: FieldBase<any>[],
        title: string,
        action: ACTION_FORM,
        post_url: string,
        show_url: string,
        id?: number,
        logs_url?: string,
        maxlength?: number
    ) {
        this.fields = fields;
        this.title = title;
        this.action = action;
        this.post_url = post_url;
        this.show_url = show_url;
        this.id = id;
        this.logs_url = logs_url;
        this.maxlength = maxlength;
    }
}

export enum ACTION_FORM {
    EDIT = 1,
    SAVE = 2,
    SHOW = 3,
    LOGS = 4,
}
