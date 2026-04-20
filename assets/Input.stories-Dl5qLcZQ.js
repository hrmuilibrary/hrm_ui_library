import{j as r}from"./jsx-runtime-pDd-v4ZD.js";import{r as s}from"./iframe-2FnXxmlw.js";import{I as l}from"./Input-BMvrqjML.js";import{P as f}from"./Popover-gkcKSzMq.js";import{I as o}from"./IconInfo-Cr3Q0Mpa.js";import{I as h}from"./IconCalendarRight-CAXOhgYu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUAXAE9B.js";import"./index-CufBVRh4.js";import"./ErrorMessage-CA-k-3A8.js";import"./Text-ClEGDka6.js";import"./helpers-BFS1MnzK.js";import"./IconDynamicComponent-Bek1Lrvo.js";import"./Label-BpioSxO9.js";import"./IconCheckmarkCircleFilled-Bqx0mdex.js";import"./index-AboGxAif.js";import"./types-ClOKwcvp.js";import"./IconDismiss-DXwPvCgD.js";import"./Tooltip-DyysFQ0J.js";import"./Button-CGescgA9.js";import"./Link-DDNBmxIP.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
