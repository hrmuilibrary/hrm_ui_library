import{j as r}from"./jsx-runtime-oQqas1I7.js";import{r as s}from"./iframe-DYBRI1wp.js";import"./DropzoneFileUpload-CKaDWd0o.js";import{I as l}from"./UnderConstruction-BP18KISM.js";import"./types-DQ6VAzuE.js";import"./ButtonGroup-D-oAr9WM.js";import{P as f}from"./Chips-CBc4N0zw.js";import"./Text-Ervgr_He.js";import{b as h}from"./IconYoutube-Ckr_0WrR.js";import{I as o}from"./IconInfo-D81pZUPg.js";import"./IconPerson-BIEUOdwe.js";import"./IconUnitsEmployee-DtJhYD3s.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-BzOHAEqy.js";import"./index-Bw1HxFsN.js";import"./index-DJWDk8xS.js";const R={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value);
    setIsErrorVisible(true);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Input {...args} error={!value && isErrorVisible ? 'requeired field' : ''} currentValue={value} handleChange={changeHandler} />
    </div>;
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const W=["Input"];export{e as Input,W as __namedExportsOrder,R as default};
