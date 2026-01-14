import{j as r}from"./jsx-runtime-uGtigUhx.js";import{r as c}from"./iframe-CCpZ0RzU.js";import"./DropzoneFileUpload-B6UIcAcl.js";import{V as o}from"./UnderConstruction-A_PNalYn.js";import"./types-DQfykHh9.js";import"./ButtonGroup-CujBHiIl.js";import"./Chips-DjPG7KFe.js";import"./Text-CGJlnosw.js";import"./IconYoutube-oOrWhdz0.js";import{I as u}from"./IconInfo-DaPyXjYs.js";import"./IconPerson-N3kFoPbx.js";import"./IconUnitsEmployee-CIp6I4TM.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-DqSFy7yo.js";import"./index-31GdvHSE.js";import"./index-DZFHmqbk.js";const W={title:"Textarea",component:o},d=n=>{const[m,l]=c.useState(""),i=p=>{l(p.target.value)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(o,{...n,currentValue:m,onChange:i})})},e=d.bind({});e.args={label:"Label",disabled:!1,required:!1,placeHolder:"Enter text",helperText:"This is your helper text",successMessage:"Success message",error:"Error message",maxCount:240,labelAddons:r.jsx(u,{size:"xsmall",type:"information",className:"ml-4"})};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
