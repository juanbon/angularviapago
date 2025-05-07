import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'postalcodes',
    get: 'postalcodes',
    post: 'postalcodes',
    put: 'postalcodes',
    delete: 'postalcodes/' 
};

//BUSCADOR
let filters = [
       {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        value: null,
        dependence:true,
        children:'localities',  // URL del select hijo
        dependentFields:'idLocality'
    },
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'select',
        url: 'localities',
        data: null,
        value: null,
        dependence:true
    },
        {
        key: 'idPostalCode',
        label: 'codigo postal',
        type: 'number',
        url: 'postalcodes',
        data: null,
        value: null
    }
];

//CAMPOS
let typesEdit = [

    

        {
        key: 'idPostalCode',
        label: 'Codigo Postal',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: [''],
        readonly: true,
        dependence:true,
        children:'localities',  // URL del select hijo
        dependentFields:'idLocality'
    },
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'select',
        url: 'localities',
        data: null,
        notShow: ['search'],
        readonly: true,
        dependence:true,
        parent:'idProvince'
    },
    {
        key: 'reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
        
        {
        key: 'provinces.idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    },
        {
        key: 'provinces.reference',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    } ,  
        {
        key: 'localities.idLocality',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    },

        {
        key: 'localities.reference',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    },

        {
        key: 'localities.provinces.idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    },

        {
        key: 'localities.provinces.reference',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: ['edit'],
        readonly: true
    }
]; 

//SHOW
let typeShow = [
   
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'number',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }

    ,
        {
        key: 'reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    }
    ,
        {
        key: 'provinces.reference',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    } ,
        {
        key: 'provinces.idProvince',
        label: 'Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    } ,
        {
        key: 'idProvince',
        label: 'Id Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search','edit'],  // 
        readonly: true
    },
        {
        key: 'localities.reference',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'localities.idLocality',
        label: 'Localidad',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search','edit'],
        readonly: true
    },
    {
        key: 'idPostalCode',
        label: 'Codigo Postal',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'localities.provinces.idProvince',
        label: 'Id Provincia',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
        {
        key: 'localities.provinces.reference',
        label: 'Provincia',
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
        key: 'idPostalCode',
        label: 'Codigo Postal',
        type: 'number',
        url: null,
        data: null,
        notShow: ['search'],
       // readonly: true
    },
    {
        key: 'idProvince',
        label: 'Provincia',
        type: 'select',
        url: 'provinces',
        data: null,
        notShow: [''],
        readonly: true,
        dependence:true,
        children:'localities',  // URL del select hijo
        dependentFields:'idLocality'
    },
    {
        key: 'idLocality',
        label: 'Id Localidad',
        type: 'select',
        url: 'localities',
        data: null,
        notShow: ['search'],
        readonly: true,
        dependence:true
    },
];


// Configuración
const Config = {
    title: "Codigos Postal",
    columnId: "idPostalCode",
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
    paginated:true
}

export default Config;