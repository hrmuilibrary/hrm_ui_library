import{j as a}from"./jsx-runtime-3Q_sdxiq.js";import{B as v}from"./Badge-DDH4_nGJ.js";import{n as y}from"./helpers-BplHdA7F.js";import{c as d}from"./index-DqlRVWq3.js";const p=m=>{const{size:t="large",iconProps:r,badgeProps:s,label:o,className:i="",disabled:l=!1,isSelected:n,rightIconProps:e,val:c,onClick:g,dataId:u}=m;return a.jsxs("div",{"data-id":u,onClick:l?y:g,className:d("tab",{[`tab--${t}`]:t},{"tab--disabled":l},{"tab--selected":n},i),children:[r!=null&&r.Component?a.jsx(r.Component,{className:"tab__icon mr-8",size:`${t=="small"?"xsmall":"small"}`,...r}):null,a.jsx("span",{className:"tab__label","data-id":u?`${u}-label`:"",children:o}),e!=null&&e.Component?a.jsx(e.Component,{onClick:b=>{e!=null&&e.action&&(b.stopPropagation(),e==null||e.action(c))},className:"tab__icon ml-8",size:`${t=="small"?"xsmall":"small"}`,...e}):null,s!=null&&s.text?a.jsx(v,{className:"tab__badge ml-8",size:"small",type:"secondary",...s}):null]})};p.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},rightIconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  action?: (value: string | number) => void
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}},required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},badgeProps:{required:!1,tsType:{name:"TBadgeProps"},description:""},val:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T=m=>{const{selectedValue:t,tabItems:r,onSelect:s,className:o,dataId:i="",...l}=m;return a.jsx("div",{className:"tabs-container","data-id":i,children:a.jsx("div",{className:d("tabs-header-container",o),children:r.map((n,e)=>a.jsx(p,{label:n.label,badgeProps:n.badgeProps,onClick:()=>s(n.value),val:n.value,isSelected:t===n.value,dataId:(n==null?void 0:n.dataId)||(i?`${i}-item-${e}`:""),disabled:n.disabled,...l},n.value))})})};T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabItems:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`IBaseProps & {
  value: number | string
  label: string | React.ReactElement
  disabled?: boolean
  badgeProps?: TBadgeProps
  iconProps?: {
    alignment?: string
    Component?: TSVGIconComponent
  }
  rightIconProps?: {
    name?: string
    alignment?: string
    action?: (value: string | number) => void
    Component?: TSVGIconComponent
  }
}`,elements:[{name:"IBaseProps"},{name:"signature",type:"object",raw:`{
  value: number | string
  label: string | React.ReactElement
  disabled?: boolean
  badgeProps?: TBadgeProps
  iconProps?: {
    alignment?: string
    Component?: TSVGIconComponent
  }
  rightIconProps?: {
    name?: string
    alignment?: string
    action?: (value: string | number) => void
    Component?: TSVGIconComponent
  }
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"label",value:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}],required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"badgeProps",value:{name:"TBadgeProps",required:!1}},{key:"iconProps",value:{name:"signature",type:"object",raw:`{
  alignment?: string
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"alignment",value:{name:"string",required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]},required:!1}},{key:"rightIconProps",value:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  action?: (value: string | number) => void
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}},required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]},required:!1}}]}}]}],raw:"TTabItem[]"},description:""},type:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedValue:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["IFormCompProps"]};export{T};
