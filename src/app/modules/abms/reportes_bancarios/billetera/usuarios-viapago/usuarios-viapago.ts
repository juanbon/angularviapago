import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'users/getusersWallet',
    get: 'users/getusersWallet',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [''];

//CAMPOS
let typesEdit = ['']; 

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
        key: 'updatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'CreatedAt',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    }
]; 

//POST
let postFields = [''];


// Configuración
const Config = {
    title: "Reporte Usuarios Billetera",
    columnId: "AltaUsuario",
    url: urls,
    filters: filters,
    types: typesEdit,
    showGet: false,
    showAdd: false,
    showEdit: false,
    showDelete: false,
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