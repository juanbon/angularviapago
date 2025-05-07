import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'questions',
    get: 'questions',
    post: 'questions',
    put: 'questions',
    delete: 'questions'
};

//BUSCADOR
let filters = [
    {
        key: 'Pregunta',
        label: 'Pregunta',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'question',
        label: 'Pregunta',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'answer',
        label: 'Respuesta',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url:'',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'id',
        label: 'Ids',
        type: 'number',
        url: null,
        data: null,
        notShow: ['edit'],
        readonly: true
    },
    {
        key: 'questionCategory',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'questionCategoryId',
        label: 'Id de Categoria',
        type: 'select',
        url: "questionscategories",
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'updatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
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
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'questionCategoryId',
        label: 'Id de Categoria',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'question',
        label: 'Pregunta',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'answer',
        label: 'Respuesta',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'questionCategory',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'updatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    }
]; 

//POST
let postFields = [{
    key: 'question',
    label: 'Pregunta',
    type: 'text'
},
{
    key: 'answer',
    label: 'Respuesta',
    type: 'text'
},
{
    key: 'status',
    label: 'Estado',
    type: 'select',
    options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
    url:'',
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'questionCategoryId',
    label: 'Id de Categoria',
    type: 'select',
    url: "questionscategories",
    data: null,
    notShow: ['search'],
    readonly: true
}];


// Configuración
const Config = {
    title: "Preguntas frecuentes",
    columnId: "id",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
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
        paginated:true
}

export default Config;