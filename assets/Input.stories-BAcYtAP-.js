import{j as r}from"./Text-CKGaIGJ0.js";import{r as s}from"./iframe-DpMxAmj9.js";import"./DropzoneFileUpload-C2ZWgrjN.js";import{I as l}from"./UnderConstruction-DPyuyZui.js";import"./types-BrDM8sXB.js";import"./ButtonGroup-BgsQd8GB.js";import{P as f}from"./Chips-BmNorCMb.js";import{I as o}from"./IconInfo-BD2IbNse.js";import{b as h}from"./IconChevronDoubleRight-Ij4DwE2P.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDismissCircleFilled-lD4REoq8.js";import"./index-BuZNQKp7.js";const q={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const z=["Input"];export{e as Input,z as __namedExportsOrder,q as default};
