import{j as t}from"./jsx-runtime-hG3Vka6i.js";import{r as f}from"./iframe-G8znBDlN.js";import{T as g}from"./Text-BGs7_8FC.js";import{B as T}from"./Button-DSZy3bBL.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BzgLc-4F.js";import"./helpers-DAKI7Y_y.js";const s=l=>{const{textProps:m={},expandedText:h,collapsedText:u,buttonText:r={expand:"Ավելին",collapse:"Փակել"},dataTestId:a=""}=l,[n,i]=f.useState(!1),b=o=>{o.stopPropagation(),i(!0)},x=o=>{o.stopPropagation(),i(!1)};return t.jsxs(g,{...m,className:"more",dataTestId:a,children:[`${n?h:u}`,t.jsx(T,{className:"more__btn ml-4",type:"link",buttonText:n?r.collapse:r.expand,dataTestId:a?`${a}-action`:"",onClick:n?x:b})]})};s.__docgenInfo={description:"",methods:[],displayName:"More",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},textProps:{required:!1,tsType:{name:"TextPropTypes"},description:""},expandedText:{required:!0,tsType:{name:"string"},description:""},collapsedText:{required:!0,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  expand: string
  collapse: string
}`,signature:{properties:[{key:"expand",value:{name:"string",required:!0}},{key:"collapse",value:{name:"string",required:!0}}]}},description:""}}};const q={title:"More",component:s},v=()=>t.jsx("div",{onClick:()=>console.log("sdjbsd"),children:t.jsx(s,{dataTestId:"more",buttonText:{expand:"Ավելին",collapse:"Փակել"},collapsedText:"I am informed and agree that:",expandedText:`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.`})}),e=v.bind({});var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div onClick={() => console.log('sdjbsd')}>
      <_More dataTestId="more" buttonText={{
      expand: 'Ավելին',
      collapse: 'Փակել'
    }} collapsedText={'I am informed and agree that:'} expandedText={\`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.\`} />
    </div>;
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const E=["More"];export{e as More,E as __namedExportsOrder,q as default};
