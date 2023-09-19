import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getMockData() {
    return [{id: 1,title: 'Main Data Ethiopia',suk: '#TSK_216894891',status: 'Running',color: '#0090ff',date: '2023-09-19', time:'15:55:17',image: './assets/loop.png',
        selection : [
          { name: 'Electricity Company of Ghana', checked: true },
          { name: 'Demo Region 1', checked: false },
          { name: 'Demo District 1', checked: false },
        ],
        Operations : [
          { name: 'Load Meter Profile', checked: true },
          { name: 'Commission with tariff', checked: false },
          { name: 'Demo District 1', checked: false },
        ],
        progressbar : [
          { width: 50, valuenow: 50 , class:'success',class_div:'bg-success',name:'120' },
          { width: 40, valuenow: 40 , class:'',class_div:'',name:'70' },
          { width: 30, valuenow: 30 , class:'danger',class_div:'bg-danger',name:'20' },
        ],
      },
      {id: 2,title: 'Read Main Data',suk: '#TSK_216894891',status: 'Finished',color: '#12bb12',date: '2023-09-20', time:'15:55:17',image: './assets/refresh icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 100, valuenow: 100 , class:'success',class_div:'bg-success',name:'210' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 3,title: 'Change tariff construction',suk: '#TSK_216894891',status: 'Queued',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 4,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 5,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 6,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 7,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 8,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 9,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 10,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 11,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 12,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 13,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
      {id: 14,title: 'Change Tariff',suk: '#TSK_216894891',status: 'New',color: '#00afd8',date: '2023-09-20', time:'15:55:17',image: './assets/New task icon.png',
      selection : [
        { name: 'Electricity Company of Ghana', checked: true },
        { name: 'Demo Region 1', checked: false },
      ],
      Operations : [
        { name: 'Load Meter Profile', checked: true },
        { name: 'Commission with tariff', checked: false },
        { name: 'Demo District 1', checked: false },
      ],
      progressbar : [
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
        { width: 0, valuenow: 0 , class:'success',class_div:'bg-success',name:'0' },
      ],
      },
    ];

  }
}
