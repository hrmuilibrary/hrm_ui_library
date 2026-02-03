import{j as t}from"./jsx-runtime-Bx6nDAHA.js";import{r as x}from"./iframe-Djkj-SoK.js";import{T as f}from"./Text-BA3vWX_v.js";import{B as g}from"./Button-DGtMkrFa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Do9ZPFz0.js";import"./helpers-CYPKY3Aw.js";const o=c=>{const{textProps:l={},expandedText:m,collapsedText:h,buttonText:s={expand:"Ավելին",collapse:"Փակել"}}=c,[a,r]=x.useState(!1),b=n=>{n.stopPropagation(),r(!0)},u=n=>{n.stopPropagation(),r(!1)};return t.jsxs(f,{...l,className:"more",children:[`${a?m:h}`,t.jsx(g,{className:"more__btn ml-4",type:"link",buttonText:a?s.collapse:s.expand,onClick:a?u:b})]})};o.__docgenInfo={description:"",methods:[],displayName:"More",props:{textProps:{required:!1,tsType:{name:"TextPropTypes"},description:""},expandedText:{required:!0,tsType:{name:"string"},description:""},collapsedText:{required:!0,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  expand: string
  collapse: string
}`,signature:{properties:[{key:"expand",value:{name:"string",required:!0}},{key:"collapse",value:{name:"string",required:!0}}]}},description:""}}};const _={title:"More",component:o},v=()=>t.jsx("div",{onClick:()=>console.log("sdjbsd"),children:t.jsx(o,{buttonText:{expand:"Ավելին",collapse:"Փակել"},collapsedText:"I am informed and agree that:",expandedText:`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.`})}),e=v.bind({});var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <div onClick={() => console.log('sdjbsd')}>
      <_More buttonText={{
      expand: 'Ավելին',
      collapse: 'Փակել'
    }} collapsedText={'I am informed and agree that:'} expandedText={\`I am informed and agree that:
 - The vacation application is considered submitted if it has been approved by the manager(s) and substitute(s). If the approvals haven’t been obtained, the application cannot be considered by the HRM and is not subject to processing.
The payment for the annual vacation is made:
3 days before the start of the vacation, if the application approvals are available at least 6 working days before the vacation begins,
Within 3 working days after the start of the vacation, if application approvals were provided within 5 working days before the vacation begins.\`} />
    </div>;
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const q=["More"];export{e as More,q as __namedExportsOrder,_ as default};
