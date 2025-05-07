import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'viapago/Usuariosbilletera/search',
    get: '',
    post: '',
    put: '',
    delete: ''
};

//BUSCADOR
let filters = [
    {
        key: 'NroDNI',
        label: 'Nro Documento',
        type: 'text',
        url: null,
        data: 1,
        value: null 
    },
    {
        key: 'CUIT',
        label: 'CUIT',
        type: 'text',
        url: null,
        data: 2,
        value: null 
    },
    {
        key: 'Nombre',
        label: 'Nombre',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let types = ['']; 

//POST
let postFields = [
   ''
];



// Configuración
const Config = {
    title: "Usuarios Billetera", 
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
        ACTION_FORM.SAVE, urls.post, ''),
     paginated:false,
     usaApiBoletos: true,
}

export default Config;