import { FormTemplate, ACTION_FORM } from "src/app/modules/group_beta/dynamic/dynamic-form/model/form-template";

//URLs
let urls =
{
    search: 'menu/search',
    get: 'menu',
    post: 'menu',
    put: 'menu',
    delete: 'menu'
};

//BUSCADOR
let filters = [
     {
        key: 'menu',
        label: 'Menu',
        type: 'text',
        url: null,
        data: null,
        controlType: 'select',
    },
    {
        key: 'url',
        label: 'URL',
        type: 'text',
        url: null,
        data: null,
        controlType: 'select',
    }
];

//CAMPOS
let typesEdit = [
    {
        key: 'id',
        label: 'ID',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'menu',
        label: 'Descripción',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'url',
        label: 'URL',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'type',
        label: 'Tipo De Menú',
        type: 'select',
        options:[ {key: 1 ,value:'Dropdown principal'}
                ,{key: 2 ,value:'Dropdown interno'}
                ,{key: 3 ,value:'Item'}
                ],
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'idmain',
        label: 'Id Menu Padre',
        type: 'select',
        url: 'menu/search/main',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'access',
        label: 'Privilegios',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'permission',
        label: 'Permiso',
        type: 'select',
        url: 'menu/search/permissions',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'restrict',
        label: 'restrict',
        type: 'select',
        options:[{key:'1',value:'SI'},{key:'0',value:'NO'}],
        url: null,
        data: null,
        notShow: ['edit'],
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
      label: 'updatedAt',
      type: 'number',
      url: null,
      data: null,
      notShow: ['search', 'edit'],
      readonly: true
    },
    {
      key: 'createdAt',
      label: 'createdAt',
      type: 'number',
      url: null,
      data: null,
      notShow: ['search', 'edit'],
      readonly: true
    }
];

//SHOW
let typeShow = [
    {
        key: 'id',
        label: 'ID',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'menu',
        label: 'Descripción',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'url',
        label: 'URL',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'type',
        label: 'Tipo De Menú',
        type: 'select',
        options:[ {key: 1 ,value:'Dropdown principal'}
                ,{key: 2 ,value:'Dropdown interno'}
                ,{key: 3 ,value:'Item'}
                ],
        url: null,
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'idmain',
        label: 'Id Menu Padre',
        type: 'select',
        url: 'menu/search/main',
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'access',
        label: 'Privilegios',
        type: 'text',
        url: null,
        data: null,
        notShow: ['search'],
        readonly: false
    },
    {
        key: 'permission',
        label: 'Permiso',
        type: 'select',
        url: 'menu/search/permissions',
        data: null,
        notShow: [''],
        readonly: true
    },
    {
        key: 'restrict',
        label: 'restrict',
        type: 'select',
        options:[{key:'1',value:'SI'},{key:'0',value:'NO'}],
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
        key: 'status',
        label: 'Estado',
        type: 'select',
        options:[{key:'enable',value:'enable'},{key:'disable',value:'disable'}],
        url: null,
        data: null,
        notShow: ['search'],
        readonly: true
    },
    {
      key: 'updatedAt',
      label: 'updatedAt',
      type: 'number',
      url: null,
      data: null,
      notShow: ['search', 'edit'],
      readonly: true
    },
    {
      key: 'createdAt',
      label: 'createdAt',
      type: 'number',
      url: null,
      data: null,
      notShow: ['search', 'edit'],
      readonly: true
    }
];

//POST
let postFields = [
    {
        key: 'menu',
        label: 'Descripción',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'url',
        label: 'URL',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'type',
        label: 'Tipo De Menú',
        type: 'select',
        options:[ {key: 1 ,value:'Dropdown principal'}
                ,{key: 2 ,value:'Dropdown interno'}
                ,{key: 3 ,value:'Item'}
                ],
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'idmain',
        label: 'Id Menu Padre',
        type: 'select',
        url: 'menu/search/main',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'access',
        label: 'Privilegios',
        type: 'text',
        url: null,
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'permission',
        label: 'Permiso',
        type: 'select',
        url: 'menu/search/permissions',
        data: null,
        notShow: [''],
        readonly: false
    },
    {
        key: 'restrict',
        label: 'restrict',
        type: 'select',
        options:[{key:'1',value:'SI'},{key:'0',value:'NO'}],
        url: null,
        data: null,
        notShow: ['edit'],
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
    }
];

// Configuración
const Config = {
    title: "Menu",
    columnId: "id",
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
        paginated: true
}

export default Config;
