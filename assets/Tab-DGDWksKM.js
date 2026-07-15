import{j as a}from"./jsx-runtime-BNdl7zfN.js";import{B as b}from"./Badge-C9jtpKdG.js";import{n as v}from"./helpers-tWzEQIDg.js";import{c as d}from"./index-C2AFq9e_.js";const p=m=>{const{size:t="large",iconProps:r,badgeProps:s,label:o,className:i="",disabled:l=!1,isSelected:n,rightIconProps:e,val:c,onClick:g,dataTestId:u}=m;return a.jsxs("div",{"data-test-id":u,onClick:l?v:g,className:d("tab",{[`tab--${t}`]:t},{"tab--disabled":l},{"tab--selected":n},i),children:[r!=null&&r.Component?a.jsx(r.Component,{className:"tab__icon mr-8",size:`${t=="small"?"xsmall":"small"}`,...r}):null,a.jsx("span",{className:"tab__label","data-test-id":u?`${u}-label`:"",children:o}),e!=null&&e.Component?a.jsx(e.Component,{onClick:y=>{e!=null&&e.action&&(y.stopPropagation(),e==null||e.action(c))},className:"tab__icon ml-8",size:`${t=="small"?"xsmall":"small"}`,...e}):null,s!=null&&s.text?a.jsx(b,{className:"tab__badge ml-8",size:"small",type:"secondary",...s}):null]})};p.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | React.ReactElement",elements:[{name:"string"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},rightIconProps:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name?: string
  alignment?: string
  action?: (value: string | number) => void
  Component?: TSVGIconComponent
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}},required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]}},description:""},badgeProps:{required:!1,tsType:{name:"TBadgeProps"},description:""},val:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T=m=>{const{selectedValue:t,tabItems:r,onSelect:s,className:o,dataTestId:i="",...l}=m;return a.jsx("div",{className:"tabs-container","data-test-id":i,children:a.jsx("div",{className:d("tabs-header-container",o),children:r.map((n,e)=>a.jsx(p,{label:n.label,badgeProps:n.badgeProps,onClick:()=>s(n.value),val:n.value,isSelected:t===n.value,dataTestId:(n==null?void 0:n.dataTestId)||(i?`${i}-item-${e}`:""),disabled:n.disabled,...l},n.value))})})};T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isValid:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"TFormValue"},description:""},onChange:{required:!1,tsType:{name:"TOnChange"},description:""},name:{required:!1,tsType:{name:"string"},description:""},setFieldValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  name: string,
  value: TFormValue,
  shouldValidate?: { shouldValidate: boolean }
) => void`,signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"TFormValue"},name:"value"},{type:{name:"signature",type:"object",raw:"{ shouldValidate: boolean }",signature:{properties:[{key:"shouldValidate",value:{name:"boolean",required:!0}}]}},name:"shouldValidate"}],return:{name:"void"}}},description:""},tabItems:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`IBaseProps & {
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
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"alignment",value:{name:"string",required:!1}},{key:"action",value:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}},required:!1}},{key:"Component",value:{name:"TSVGIconComponent",required:!1}}]},required:!1}}]}}]}],raw:"TTabItem[]"},description:""},type:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedValue:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}}};export{T};
