import{j as t}from"./jsx-runtime-B7SU4NzS.js";import{r as f}from"./iframe-BiiXUHFP.js";import{T as g}from"./Text-BMhshnkU.js";import{B as v}from"./Button-DMlVNJTd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BMnlszqU.js";import"./helpers-LcuiYgGm.js";const s=l=>{const{textProps:m={},expandedText:h,collapsedText:b,buttonText:r={expand:"Ավելին",collapse:"Փակել"},dataId:a=""}=l,[n,i]=f.useState(!1),u=o=>{o.stopPropagation(),i(!0)},x=o=>{o.stopPropagation(),i(!1)};return t.jsxs(g,{...m,className:"more",dataId:a,children:[`${n?h:b}`,t.jsx(v,{className:"more__btn ml-4",type:"link",buttonText:n?r.collapse:r.expand,dataId:a?`${a}-action`:"",onClick:n?x:u})]})};s.__docgenInfo={description:"",methods:[],displayName:"More",props:{textProps:{required:!1,tsType:{name:"TextPropTypes"},description:""},expandedText:{required:!0,tsType:{name:"string"},description:""},collapsedText:{required:!0,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  expand: string
  collapse: string
}`,signature:{properties:[{key:"expand",value:{name:"string",required:!0}},{key:"collapse",value:{name:"string",required:!0}}]}},description:""}}};const q={title:"More",component:s},T=()=>t.jsx("div",{onClick:()=>console.log("sdjbsd"),children:t.jsx(s,{dataId:"more",buttonText:{expand:"Ավելին",collapse:"Փակել"},collapsedText:"I am informed and agree that:",expandedText:`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.`})}),e=T.bind({});var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div onClick={() => console.log('sdjbsd')}>
      <_More dataId="more" buttonText={{
      expand: 'Ավելին',
      collapse: 'Փակել'
    }} collapsedText={'I am informed and agree that:'} expandedText={\`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.\`} />
    </div>;
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const E=["More"];export{e as More,E as __namedExportsOrder,q as default};
