import{j as r}from"./jsx-runtime-B0cC0YjG.js";import{r as s}from"./iframe-ijS3vg12.js";import{I as l}from"./Input-BS3GR14j.js";import{P as f}from"./Popover-ChGAbmL6.js";import{I as o}from"./IconInfo-CGUIqtSD.js";import{I as h}from"./IconCalendarRight-M435drXC.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CikaM_CD.js";import"./index-D2lxLMQL.js";import"./ErrorMessage-xo5KB2tA.js";import"./Text-Mt6cUdKr.js";import"./helpers-Cg9a9Cp3.js";import"./IconDynamicComponent-BLnZaPZr.js";import"./Label-kmD-K9sb.js";import"./IconCheckmarkCircleFilled-C7GE82XM.js";import"./index-AboGxAif.js";import"./types--FqFz6l0.js";import"./IconDismiss-DkULDUHs.js";import"./Tooltip-B_uXsCwj.js";import"./Button-D26XtBwQ.js";import"./Link-C67Rpihe.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Input"];export{e as Input,O as __namedExportsOrder,N as default};
