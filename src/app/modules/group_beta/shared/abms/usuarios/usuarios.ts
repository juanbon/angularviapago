import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/shared/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'users',
    get: 'enc/diasoperativosmovil',
    post: 'enc/diasoperativosmovil',
    put: 'enc/diasoperativosmovil',
    delete: 'enc/diasoperativosmovil'
};

//BUSCADOR
let filters = [
    {
        key: 'email',
        label: 'Email',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let types = [
    {
        key: 'createdAt',
        label: 'createdAt',
        type: 'datetime',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = null;


// Configuración
const Config = {
    title: "Usuarios",
    columnId: "id",
    url: urls,
    filters: filters,
    types: types,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: false,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(types)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, '')
}

export default Config;