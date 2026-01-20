import{j as r}from"./Text-BCy2auDT.js";import{r as p}from"./iframe-DbuX508q.js";import"./DropzoneFileUpload-CwB8h4Ko.js";import{W as o}from"./UnderConstruction-yQIFCI6E.js";import"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import"./Chips-bt-0p-g_.js";import{I as u}from"./IconInfo-D2MfdYuB.js";import"./preload-helper-Dp1pzeXC.js";import"./IconChevronDoubleRight-BJ7fJSHq.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const H={title:"Textarea",component:o},d=n=>{const[l,m]=p.useState(""),i=c=>{m(c.target.value)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(o,{...n,currentValue:l,onChange:i})})},e=d.bind({});e.args={label:"Label",disabled:!1,required:!1,placeHolder:"Enter text",helperText:"This is your helper text",successMessage:"Success message",error:"Error message",maxCount:240,labelAddons:r.jsx(u,{size:"xsmall",type:"information",className:"ml-4"})};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Textarea {...args} currentValue={value} onChange={changeHandler} />
    </div>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const S=["Textarea"];export{e as Textarea,S as __namedExportsOrder,H as default};
