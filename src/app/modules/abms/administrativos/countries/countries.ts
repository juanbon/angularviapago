import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'countries',
    get: 'countries',
    post: 'countries',
    put: 'countries',
    delete: 'countries' 
};

//BUSCADOR
let filters = [
    {
        key: 'idCountry',
        label: 'Id Pais',
        type: 'number',
        url: null,
        data: null,
        value: null
    },
        {
        key: 'reference',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'idCountry',
        label: 'Id Pais',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'reference',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'idCountry',
        label: 'Id Pais',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'reference',
        label: 'Descripcion',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
]; 

//POST
let postFields = [
    {
    key: 'idCountry',
    label: 'Id Pais',
    type: 'number',
    url: '',
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'reference',
    label: 'Descripcion',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: false
},
{
    key: 'codeIso2',
    label: 'Iso 2',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: false
},
{
    key: 'codeIso3',
    label: 'Iso 3',
    type: 'text',
    url: '',
    data: null,
    notShow: ['search'],
    readonly: false
}

];


// Configuración
const Config = {
    title: "Paises",
    columnId: "idCountry",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: true,
    showAdd: true,
    showEdit: true,
    showDelete: true,
    permiso: 0,
    showForm: new FormTemplate(JSON.parse(JSON.stringify(typeShow)), "",
        ACTION_FORM.SHOW, '', urls.get , 1),
    editForm: new FormTemplate(JSON.parse(JSON.stringify(typesEdit)), "",
        ACTION_FORM.EDIT, '', urls.put , 1),
    saveForm: new FormTemplate(JSON.parse(JSON.stringify(postFields)), "",
        ACTION_FORM.SAVE, urls.post, ''),
  //   logsForm: null,
        paginated:true
}

export default Config;