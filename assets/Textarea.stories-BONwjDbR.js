import{j as r}from"./jsx-runtime-oQqas1I7.js";import{r as c}from"./iframe-DYBRI1wp.js";import"./DropzoneFileUpload-CKaDWd0o.js";import{V as o}from"./UnderConstruction-BP18KISM.js";import"./types-DQ6VAzuE.js";import"./ButtonGroup-D-oAr9WM.js";import"./Chips-CBc4N0zw.js";import"./Text-Ervgr_He.js";import"./IconYoutube-Ckr_0WrR.js";import{I as u}from"./IconInfo-D81pZUPg.js";import"./IconPerson-BIEUOdwe.js";import"./IconUnitsEmployee-DtJhYD3s.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-BzOHAEqy.js";import"./index-Bw1HxFsN.js";import"./index-DJWDk8xS.js";const W={title:"Textarea",component:o},d=n=>{const[m,l]=c.useState(""),i=p=>{l(p.target.value)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(o,{...n,currentValue:m,onChange:i})})},e=d.bind({});e.args={label:"Label",disabled:!1,required:!1,placeHolder:"Enter text",helperText:"This is your helper text",successMessage:"Success message",error:"Error message",maxCount:240,labelAddons:r.jsx(u,{size:"xsmall",type:"information",className:"ml-4"})};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const changeHandler = (e: TChangeEventType) => {
    setValue(e.target.value);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Textarea {...args} currentValue={value} onChange={changeHandler} />
    </div>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const q=["Textarea"];export{e as Textarea,q as __namedExportsOrder,W as default};
