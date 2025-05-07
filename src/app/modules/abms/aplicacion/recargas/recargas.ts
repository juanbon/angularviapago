import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'recharge?filter[where][id][eq]=1',
    get: 'recharge',
    post: 'recharge',
    put: '',
    delete: 'recharge'
};

//BUSCADOR
let filters = [
    {
        key: 'id',
        label: 'Recargas',
        type: 'number',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'id',
        label: 'Ids',
        type: 'number',
        url: null,
        data: null,
        notShow: ['edit'],
        readonly: true
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'id',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = [
{
    key: 'id',
    label: 'Valor',
    type: 'number',
    url: '',
    data: null,
//  maxlength:8,
//  notShow: ['],
    readonly: true
}
];


// Configuración
const Config = {
    title: "Recargas",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
    showAdd: true,
    showEdit: false,
    showDelete: true,
    permiso: 0,
    maxItemsValue:8,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, ''),
        paginated:true
}

export default Config;