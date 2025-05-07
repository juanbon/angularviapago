import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'feeTaxConfigs/all',
    get: 'feeTaxConfigs/all',
    post: 'feeTaxConfigs',
    put: 'feeTaxConfigs',
    delete: 'feeTaxConfigs'
};

//BUSCADOR
let filters = [
    {
        key: 'FeeTaxConfig',
        label: 'Configuración de impuesto y comision',
        type: 'text',
        url: null,
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'id',
        label: 'Id',
        type: 'number',
        url: null,
        data: null,
        notShow: ['edit'],
        readonly: true
    },
    {
        key: 'typeTransaction',
        label: 'Tipo de transacción',
        type: 'select',
        url: 'typesTransactions',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'accountType',
        label: 'Tipo de cuenta',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'sourceFee',
        label: 'Comisión de operación saliente',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'minSourceFee',
        label: 'Comisión mínima de operacion saliente',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'minSourceOperationValue',
        label: 'Monto mínimo de operación saliente',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'targetFee',
        label: 'Comisión de operación entrante',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'minTargetFee',
        label: 'Comisión de operación entrante mínima',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'minTargetOperationValue',
        label: 'Monto mínimo de operación entrante',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'sourceTax',
        label: 'Impuesto a la comisión por operación saliente',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'targetTax',
        label: 'Impuesto a la comisión por operación entrante',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'cardReplacementAmount',
        label: 'Cargo por reemplazo de tarjeta (solo card_rep_pomelo)',
        type: 'number',
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
        key: 'updatedAt',
        label: 'updatedAt',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'createdAt',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'deletedAt',
        label: 'deletedAt',
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
        key: 'reason',
        label: 'Motivo',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'description',
        label: 'Descripcion',
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
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'updatedAt',
        label: 'updatedAt',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'createdAt',
        label: 'createdAt',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'deletedAt',
        label: 'deletedAt',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    }
]; 

//POST
let postFields = [ {
    key: 'typeTransaction',
    label: 'Tipo de transacción',
    type: 'select',
    url: 'typesTransactions',
    data: null,
    notShow: [''],
    readonly: false,
    require: 'required'
},
{
    key: 'accountType',
    label: 'Tipo de cuenta',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false,
    require: 'required'//Se activa el color rojo en los label y el * de requerido, valido para form de creacion
},
{
    key: 'sourceFee',
    label: 'Comisión de operación saliente',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'minSourceFee',
    label: 'Comisión de operación saliente mínima',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search','edit'],
    readonly: true
},
{
    key: 'minSourceOperationValue',
    label: 'Monto mínimo de operación saliente',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search','edit'],
    readonly: true
},
{
    key: 'targetFee',
    label: 'Comisión de operación entrante',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'minTargetFee',
    label: 'Comisión de operación entrante mínima',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search','edit'],
    readonly: true
},
{
    key: 'minTargetOperationValue',
    label: 'Monto mínimo de operación entrante',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search','edit'],
    readonly: true
},
{
    key: 'sourceTax',
    label: 'Impuesto a la comisión por operación saliente',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
},
{
    key: 'targetTax',
    label: 'Impuesto a la comisión por operación entrante',
    type: 'text',
    url: null,
    data: null,
    notShow: [''],
    readonly: false
},{
    key: 'cardReplacementAmount',
    label: 'Cargo por reemplazo de tarjeta (solo card_rep_pomelo)',
    type: 'number',
    url: null,
    data: null,
    notShow: ['search','edit'],
    readonly: true
},
{
    key: 'status',
    label: 'Estado',
    type: 'select',
    options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
    url:'',
    data: null,
    notShow: [''],
    readonly: false,
    require:'required'
}];


// Configuración
const FeeTaxConfigs = {
    title: "Configuracion de comisiones",
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

export default FeeTaxConfigs;