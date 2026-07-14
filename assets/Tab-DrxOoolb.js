import{j as a}from"./jsx-runtime-B7SU4NzS.js";import{B as b}from"./Badge-D1SbDQiV.js";import{n as y}from"./helpers-LcuiYgGm.js";import{c as o}from"./index-BMnlszqU.js";const u=i=>{const{size:t="large",iconProps:r,badgeProps:s,label:m,className:l="",disabled:e=!1,isSelected:d,rightIconProps:n,val:p,onClick:c,dataId:g}=i;return a.jsxs("div",{onClick:e?y:c,className:o("tab",{[`tab--${t}`]:t},{"tab--disabled":e},{"tab--selected":d},l),children:[r!=null&&r.Component?a.jsx(r.Component,{className:"tab__icon mr-8",size:`${t=="small"?"xsmall":"small"}`,...r}):null,a.jsx("span",{className:"tab__label","data-id":g,children:m}),n!=null&&n.Component?a.jsx(n.Component,{onClick:v=>{n!=null&&n.action&&(v.stopPropagation(),n==null||n.action(p))},className:"tab__icon ml-8",size:`${t=="small"?"xsmall":"small"}`,...n}):null,s!=null&&s.text?a.jsx(b,{className:"tab__badge ml-8",size:"small",type:"secondary",...s}):null]})};u.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{label:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},rightIconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  action?: (value: string | number) => void
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}},required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},badgeProps:{required:!1,tsType:{name:"TBadgeProps"},description:""},val:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T=i=>{const{selectedValue:t,tabItems:r,onSelect:s,className:m,...l}=i;return a.jsx("div",{className:"tabs-container",children:a.jsx("div",{className:o("tabs-header-container",m),children:r.map(e=>a.jsx(u,{label:e.label,badgeProps:e.badgeProps,onClick:()=>s(e.value),val:e.value,isSelected:t===e.value,dataId:(e==null?void 0:e.dataId)||"",disabled:e.disabled,...l},e.value))})})};T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{tabItems:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`IBaseProps & {
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
